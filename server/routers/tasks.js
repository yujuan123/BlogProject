import TaskItem from '../models/TaskItem';
import express from 'express';
import UserInfo from '../models/UserInfo';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Attention from '../models/Attention';
import md5 from 'md5';

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());

router.get('/', (req, res)=> {
  var index = req.query.index;
  TaskItem.find({}, (err, doc)=> {
    if (err) {
      return next(err);
    }
    if (index == 0) {
      index = +index - +5;
    }
    let i = +index + +5;
    if (i >= doc.length) {
      index = +index - +5;
    }
  });
  index = +index + +5;
  TaskItem.find({}).sort({regtime: -1}).skip(index).limit(5).exec((err, data)=> {
    if (err) {
      console.log("数据库出错");
    }
    res.send({data, index});
  });
});
router.get('/subTask', (req, res)=> {
  let index = req.query.index;
  if (index < 0) {
    index = 0;
  }
  if (index == 0) {
    index = +index + +5;
  }
  index = +index - +5;
  TaskItem.find({}).sort({regtime: -1}).skip(index).limit(5).exec((err, data)=> {
    if (err) {
      console.log("数据库出错");
    }
    res.send({data, index});
  });
});

router.get('/showAll', (req, res)=> {
  TaskItem.find({username: req.cookies.username}, (err, data)=> {
    if (err) {
      console.log("数据库出错");
    }
    res.send(data);
  });
});
router.get('/legal-username', (req, res, next)=> {
  if (req.cookies.username) {
    res.send(req.cookies.username);
  } else {
    res.status(403).send('');
  }
});
//首页发布番茄任务时的用户验证
router.get('/verify-user-identity', (req, res, next)=> {
  if (req.cookies.username) {
    UserInfo.findOne({username: req.cookies.username}, (err, doc)=> {
      if (err) {
        next(err);
      }
      if (!doc) {
        res.status(500).send('服务器出错,没有找到该用户');
      } else {
        res.status(200).send(doc.username);
      }
    })
  } else {
    res.status(403).send('');
  }
});

router.get('/users/:username', (req, res, next)=> {
  let name = req.params.username;
  UserInfo.findOne({username: name}, (err, data)=> {
    if (err) {
      return next(err);
    }
    if (!data) {
      res.send("用户名不存在，请重新输入");
    } else {
      res.send(" ");
    }
  });
});

router.get('/userTaskInfo', (req, res, next)=> {
  TaskItem.find({username: req.cookies.username}).sort({regtime: -1}).exec((err, data)=> {
    if (err) {
      return next(err);
    }
    res.send(data);
  });
});

router.get('/userInfo', (req, res, next)=> {
  UserInfo.find({username: req.cookies.username}, (err, data)=> {
    if (err) {
      return next(err);
    }
    res.send(data);
  });
});

router.post('/exitUser', (req, res)=> {
  UserInfo.findOne({"username": req.body.username}, (err, data)=> {
    if (err) {
      console.log("数据库出错");
    }
    if (data) {
      res.send("用户名已被注册，请重新输入");
    }
    else {
      res.send("false");
    }
  })
});

router.post('/register', (req, res, next)=> {
  let userInfo = new UserInfo({
    username:req.body.username,
    password:md5(req.body.password)
});
  userInfo.save((err, data)=> {
    if (err) {
      return next(err);
    }

    new Attention({
      username: req.body.username,
      fans: [],
      friends: []
    }).save((err, doc)=> {
      if (!err && doc) {
        console.log("success");
      }
    });
    res.send("注册成功");
  })
});

router.post('/add', (req, res)=> {
  let taskItem = new TaskItem(req.body);
  taskItem.save((err, data)=> {
    if (err) {
      console.log("数据库出错");
    }
    res.send(data);
  })
});

router.delete('/delete/:id', (req, res)=> {
  TaskItem.findOneAndRemove({_id: req.params.id}, (err, data)=> {
    if (err) {
      console.log(err.message);
    }
    res.send("succeed");
  });
});

router.post('/isLegal', (req, res) => {
  const username = req.body.username;
  const psw = req.body.psw;
  UserInfo.findOne({username: username}, (err, data)=> {
    if (err) {
      return next(err);
    }
    if (data) {
      if (md5(psw) !== data.password) {
        res.send("密码错误，请重新登陆！");
      }
      else {
        res.cookie('username', username, {path: '/'});
        res.send("");
      }
    }
  });
});

router.get('/strangerInfo/:username', (req, res) => {
  const username = req.params.username;
  TaskItem.find({username: username}, (err, data)=> {
    if (err) {
      return next(err);
    }
    res.send(data);
  });
});
router.get('/isFriend/:username', (req, res) => {
  Attention.findOne({username: req.cookies.username}, (err, data)=> {
    if (err) {
      return next(err);
    }
    else if (data.friends.includes(req.params.username)) {
      Attention.findOne({username: req.params.username}, (err, doc)=> {
        let fanLength = doc.fans.length;
        let friendLength = doc.friends.length;
        if (err) {
          return next(err);
        }
        res.send({focus: '已关注', fanLength, friendLength});
      });
    }
    else {
      Attention.findOne({username: req.params.username}, (err, doc)=> {
        let fanLength = doc.fans.length;
        let friendLength = doc.friends.length;
        if (err) {
          return next(err);
        }
        res.send({focus: '+关注', fanLength, friendLength});
      });
    }
  });
});

router.post('/attentionUser/:username', (req, res)=> {
  const username = req.cookies.username;
  const attentionUser = req.params.username;
  Attention.findOne({username: username}, (err, data)=> {
    if (err) {
      return next(err);
    }
    else if (!data) {
      res.status(500).send('没有找到该用户');
    }
    else {
      if (!data.friends.includes(attentionUser)) {
        data.friends.push(attentionUser);
        data.save((err, data)=> {
          if (err) {
            console.log("数据库出错");
          }
        });
        /*关注成功了，将我添加到对方的fans里*/
        Attention.findOne({username: attentionUser}, (err, doc)=> {
          if (err) {
            return next(err);
          }
          else if (!doc) {
            res.status(500).send('没有找到该用户');
          }
          else {
            doc.fans.push(username);
            doc.save((err, data)=> {
              if (err) {
                console.log("数据库出错");
              }
            });
            let fanLength = doc.fans.length;
            let friendLength = doc.friends.length;
            let focus = '已关注';
            res.send({focus, fanLength, friendLength});
          }
        });

      }
      else {
        let index = data.friends.indexOf(attentionUser);
        data.friends.splice(index, 1);
        data.save((err, data)=> {
          if (err) {
            console.log("数据库出错");
          }
        });
        /*取关成功了，将我从对方的fans里删除*/
        Attention.findOne({username: attentionUser}, (err, doc)=> {
          if (err) {
            return next(err);
          }
          else if (!doc) {
            res.status(500).send('没有找到该用户');
          }
          else {
            let index = doc.fans.indexOf(username);
            doc.fans.splice(index, 1);
            doc.save((err, data)=> {
              if (err) {
                console.log("数据库出错");
              }
            });
            let fanLength = doc.fans.length;
            let friendLength = doc.friends.length;
            let focus = '+关注';
            res.send({focus, fanLength, friendLength});
          }
        });
      }
    }
  })
});

router.get('/userAttention', (req, res)=> {
  Attention.findOne({username: req.cookies.username}, (err, doc)=> {
    let fanLength = doc.fans.length;
    let friendLength = doc.friends.length;
    if (err) {
      return next(err);
    }
    res.send([fanLength, friendLength]);
  });
});

router.get('/detailTask/:id', (req, res, next)=> {
  TaskItem.findOne({_id: req.params.id}, (err, data)=> {
    if (err) {
      return next(err);
    }
    if (!data) {
      res.status(500).send("数据库出错");
    }
    else {
      res.send(data);
    }
  })
});
//评论详情页返回所有评论,倒序排列并只显示4条评论
router.get('/showComment/:id', (req, res, next)=> {

  TaskItem.findOne({_id: req.params.id}, (err, data)=> {
    if (err) {
      return next(err);
    }
    if (!data) {
      res.status(500).send("数据库出错");
    }
    else {
      res.send(data.comments);
    }
  })
});


router.post('/addComment/:id', (req, res, next)=> {
  TaskItem.findOne({_id: req.params.id}).exec((err, data)=> {
    if (err) {
      return next(err);
    }
    if (!data) {
      res.status(500).send("数据库出错");
    }
    else {
      data.comments.unshift(req.body);
      data.save((err, data)=> {
        if (err) {
          return next(err);
        }
        res.send(data.comments);
      })
    }
  })
});
module.exports = router;
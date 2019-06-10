export default {
    TaskItem: [
        {
            _id:'592011681ff91029bd139c2b',
            username: 'li',
            content: 'Read a book',
            regtime: '2016/1/3',
            comments: [
                {commentUsername: 'huang', content: '你好', commentTime:'2016/12/6'},
                {commentUsername: 'li', content: '你好', commentTime:'2016/12/8'},
                {commentUsername: 'yu', content: '你好', commentTime:'2017/1/5'},
            ]
        },
        {
            _id:'592011681ff91029bd139c2a',
            username: 'huang',
            content: 'Draw a picture',
            regtime: '2016/2/4',
            comments: [
                {commentUsername: 'huang', content: '你好', commentTime:'2016/12/6'},
                {commentUsername: 'li', content: '你好', commentTime:'2016/12/8'},
                {commentUsername: 'yu', content: '你好', commentTime:'2017/1/5'},
            ]
        },
        {
            _id:'592011681ff91029bd139c2c',
            username: 'han',
            content: 'Write a article',
            regtime: '2014/3/3',
            comments: [
                {commentUsername: 'huang', content: '你好', commentTime:'2016/12/6'},
                {commentUsername: 'li', content: '你好', commentTime:'2016/12/8'},
                {commentUsername: 'yu', content: '你好', commentTime:'2017/1/5'},
            ]
        }
    ],
    UserInfo: [
        {
            _id:1,
            username: 'li',
            password: '123456',
            regtime: '2016/12/3',
            phone: 123456789
        },
        {
            _id:2,
            username: 'huang',
            password: '123456',
            regtime: '2016/12/4',
            phone: 123456789
        },
        {
            _id:3,
            username: 'han',
            password: '123456',
            regtime: '2016/12/6',
            phone: 123456789
        },
    ],
    Attention: [
        {
            _id:1,
            username: 'li',
            friends: [],
            fans: []
        },
        {
            _id:2,
            username: 'huang',
            friends: [],
            fans: []
        },
        {
            _id:3,
            username: 'han',
            friends: [],
            fans: []
        }
    ]
};
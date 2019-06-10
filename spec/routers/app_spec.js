/**
 * Created by lipeishang on 17-5-20.
 */
const app = require('../../app');
const supertest = require('supertest');
const expect = require('expect');
import request from 'supertest';


describe('get /tasks', () => {
    it('should return all items', (done)=> {
        request(app)
            .get('/tasks')
            .end((err, res) => {
                if (err) {
                    done.fail(err);
                }
                else {
                    let result = res.body.data;
                    let expectResult = [ { _id: '592011681ff91029bd139c2a',
                        username: 'huang',
                        content: 'Draw a picture',
                        regtime: '2016/2/4',
                        __v: 0,
                        comments:  [
                            {commentUsername: 'huang', content: '你好', commentTime:'2016/12/6'},
                            {commentUsername: 'li', content: '你好', commentTime:'2016/12/8'},
                            {commentUsername: 'yu', content: '你好', commentTime:'2017/1/5'},
                        ] },
                        { _id: '592011681ff91029bd139c2b',
                            username: 'li',
                            content: 'Read a book',
                            regtime: '2016/1/3',
                            __v: 0,
                            comments: [
                                {commentUsername: 'huang', content: '你好', commentTime:'2016/12/6'},
                                {commentUsername: 'li', content: '你好', commentTime:'2016/12/8'},
                                {commentUsername: 'yu', content: '你好', commentTime:'2017/1/5'},
                            ] },
                        { _id:'592011681ff91029bd139c2c',
                            username: 'han',
                            content: 'Write a article',
                            regtime: '2014/3/3',
                            __v: 0,
                            comments: [
                                {commentUsername: 'huang', content: '你好', commentTime:'2016/12/6'},
                                {commentUsername: 'li', content: '你好', commentTime:'2016/12/8'},
                                {commentUsername: 'yu', content: '你好', commentTime:'2017/1/5'},
                            ]} ];

                    expect(result).toEqual(expectResult);
                    done();
                }
                })
    })
});

// import assert from 'assert';
// import expect from 'expect';
//
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal(-1, [1,2,3].indexOf(4));
//         });
//         it('should run async test', function(done) {
//             expect(1+1).toEqual(2);
//             done();
//         });
//     });
// });
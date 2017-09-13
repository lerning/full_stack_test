var express = require('express');
var router = express.Router();
const knex = require('../knex');


router.get('/', function(req, res, next) {
   console.log('inside posts get')
   knex('posts')
      .then((data) => {
         console.log('get post data', data)
         res.send(data)
      })
});

router.get('/:id', function(req, res, next) {
   console.log('inside posts get ID')
});


router.post('/', function(req, res, next) {
   console.log('inside posts post', req.body)
   knex('posts')
      .returning('*')
      .insert( req.body )
      .then((data) => {
         console.log('posts, post data', data)
         res.send(data)
      })
});

router.delete('/:id', function(req, res, next) {
   console.log('inside posts delete')
});



// router.post('/', function(req, res, next) {
//    let cookieJWT = req.cookies.user
//    let userCookieId = jwt.verify(cookieJWT, process.env.JWT_SECRET)
//    let userId = userCookieId.user.id
//  knex('proposals')
//   .returning('*')
//   .insert({
//    user_id: userId,
//    title: req.body.title,
//    story: req.body.story,
//    summary: req.body.summary,
//    created_by_user_id: userId,
//    edited_by_user_id: userId
//   })
//   .then((proposal) => {
//    let proposal_id = proposal[0].id;
//    return insertDAS(proposal_id, req.body)
//   })
//   .then((proposals) => {
//     res.send({proposal_id: proposals[0][0].proposal_id});
//   })
// })

module.exports = router;

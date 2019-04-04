'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const
  express = require('express'),
  profileUtils = require('../models/utils/profileUtils');

  const router = express.Router();
/** 
* @apiDefine ProfileSuccess
*
* @apiSuccess {String} _id ID of Profile
* @apiSuccess {String} email email on profile
* @apiSuccess {String} firstname firstname on Profile
*
*/

/**
 * @apiDefine ProfileError
 * @apiError msg Error message from the api request
 */





/**
* @api {get} /pyc/profile/:id Find a User Profile by email
* @apiName Find Profile of a user
* @apiGroup Profile
* @apiParam {String} email email of user 
* @apiUse ProfileSuccess
*
* @apiUse ProfileError  
*/

router.get('/profile/:id', (req, res) => {
  return profileUtils.getProfile(req.body, res);
});

/**
* @api {put} /pyc/profile/ Update a Profile 
* @apiName Update Profile
* @apiGroup Profile
* @apiParam {Object} query Containing query params (eg email on profile {email: 'abc@example.com'}) 
* @apiParam {Object} update Containing update params (eg location of artist {address: 'new address'}) 
* @apiUse ProfileSuccess
*
* @apiUse ProfileError  
*/


router.put('/profile/', (req, res) => {
  return artistUtils.updateArtist(req.body, res);
});



module.exports = router;
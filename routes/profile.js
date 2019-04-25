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
* @apiSuccess {String} middlename middlename on Profile
* @apiSuccess {String} lastname lastname on Profile
* @apiSuccess {String} gender gender on Profile
* @apiSuccess {String} DoB Date of birth on Profile as string
* @apiSuccess {String} marital_status marital status on Profile
* @apiSuccess {String} disability Any Profile Disability
* @apiSuccess {String} state State of user on profile
* @apiSuccess {String} lga Local government area of user on profile
* @apiSuccess {Number} phone phone number on profile
* @apiSuccess {String} address address on profile
* @apiSuccess {String} employment_status employment_status on profile
* @apiSuccess {String} type_of_work type_of_work on profile
* @apiSuccess {String} photo photo url on profile
* @apiSuccess {String} resume resume url on profile
* @apiSuccess {Object} education educational qualification on profile (contains educational_qualification(O'LEVEL, HMD, OND, BSC, MSC, PHD), course, institution, year_of_graduation, certificate)
*/


/**
 * @apiDefine ProfileError
 * @apiError msg Error message from the api request
 */



/**
* @api {post} /pyc/profile/ Find a User Profile by phone number
* @apiName Find Profile of a user
* @apiGroup Profile
* @apiParam {Number} phone phone number of user 
* @apiUse ProfileSuccess
*
* @apiUse ProfileError  
*/

router.post('/profile/', (req, res) => {
  return profileUtils.getProfile(req.body, res);
});



/**
* @api {get} /pyc/profile/ Find all User Profiles
* @apiName Find all Profiles
* @apiGroup Profile
* @apiUse ProfileSuccess
*
* @apiUse ProfileError  
*/

router.get('/profile/', (req, res) => {
  return profileUtils.getAllProfile(res);
});
 
/**
* @api {put} /pyc/profile/ Update a Profile 
* @apiName Update Profile
* @apiGroup Profile
* @apiParam {Object} query Containing query params (eg id on profile {id: '123456789}) 
* @apiParam {Object} update Containing update params (eg phone of user {phone: 12324343}) 
* @apiUse ProfileSuccess
*
* @apiUse ProfileError  
*/


router.put('/profile/', (req, res) => {
  return profileUtils.updateProfile(req.body, res);
});



module.exports = router;

/**
* @api {post} /pyc/upload/ Upload Image
* @apiName Upload image to s3
* @apiGroup Upload
* @apiParam {String} photo base 64 string of image after taking of "data:image/jpeg;base64," 
* @apiParam {String} name name of image + ext. e.g Ernest.jpg 
* @apiParam {String} type content type of image gotten between : and ; in base64 string e.g in "data:image/jpeg;base64,dsadasdjkhsdjkfhsdjfh" type = image/jpeg
* @apiSuccess {String} name name of image
* @apiSuccess {String} location url link to image on s3 (this is the link that will be used in other payloads where photo is requested)
*
*/

/**
* @api {get} /test/ Hit test route
* @apiName Test the API
* @apiGroup Test
* @apiSuccess {String} msg msg: Welcome to test route
*
*/
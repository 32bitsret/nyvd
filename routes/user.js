'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const
    express = require('express'),
    passport = require("passport"),
    jwt = require('jsonwebtoken'),
    profileUtils = require('./models/utils/profileUtils'),
    userUtils = require('../models/utils/userUtils');
//=============================================================================
/**
 * Router instance
 */
//=============================================================================
const router = express.Router();
//=============================================================================
/**
 * API Routes
 */
//=============================================================================

//=============================================================================

/** 
* @apiDefine UserSuccess
*
* @apiSuccess {String} _id ID of User
* @apiSuccess {String} email email of User
* @apiSuccess {String} password password hash of user 
* @apiSuccess {String} surname surname of user 
* @apiSuccess {String} othernames othernames of user 
* @apiSuccess {String} photo url link to photo saved to s3 
* @apiSuccess {String} phone phone number of user  
* @apiSuccess {Boolean} activated Status of account true or false default true
*
*/

/**
 * @apiDefine UserError
 * @apiError msg Error message from the api request
 */


/**
* @api {post} /pyc/registerUser Register a user
* @apiName Register User
* @apiGroup User
* @apiParam {String} email email of User
* @apiParam {String} password password of user 
* @apiParam {String} [surname] firstname of user 
* @apiParam {String} [othernames] lastname of user 
* @apiParam {String} [photo] url link to photo saved to s3 
* @apiParam {String} [phone] phone number of user 
* @apiUse UserSuccess
*
* @apiUse UserError  
*/

//used on register page, brand new users
router.post('/registerUser', (req, res) => {

    userUtils.registerUser(req.body)
        .then(result => {
            console.log('Successfully created user and sent email ' + JSON.stringify(result));
            return profileUtils.createProfile(result.id)
            // return res.status(200).json(result);
        })
        .catch(err => {
          console.error('/registerUser ' + JSON.stringify(err));
          return res.status(400).json({message: err});
    });
});

/**
* @api {post} /pyc/loginUser Login a user
* @apiName Login User
* @apiGroup User
* @apiParam {String} email email of User
* @apiParam {String} password password of user 
* @apiSuccess {String} token token of user logged in
*
* @apiUse UserError  
*/
//used on register page, brand new users
router.post('/loginUser', (req, res) => {

    return userUtils.loginUser(req.body, res);
        // .then(result => {
        //     console.log('Successfully login by email ' + JSON.stringify(result));
    //         return res.status(200).json(result);
        // }).
        // catch(err => {
        // console.error('/loginUser ' + JSON.stringify(err));
    //     return res.status(err).json(err);
    // });
});




//=============================================================================
/**
 * Export Router
 */
//=============================================================================
module.exports = router;
//=============================================================================


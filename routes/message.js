'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const
  express = require('express'),
  messageUtils = require('../models/utils/messageUtils');

  const router = express.Router();


/** 
* @apiDefine MessageSuccess
*
* @apiSuccess {String} _id ID of Message
* @apiSuccess {String} message message saved
* @apiSuccess {String} lga lga on Message
* @apiSuccess {String} gender gender on Message
* @apiSuccess {String} marital_status marital status on Message
* @apiSuccess {String} disability Any stated Disability
* @apiSuccess {String} lga Local government area of user on message
* @apiSuccess {String} qualification qualification on message
*/


/**
 * @apiDefine MessageError
 * @apiError msg Error message from the api request
 */


/**
* @api {post} /pyc/message/create Create a message
* @apiName Create Message
* @apiGroup Message
* @apiParam {String} message body of message 
* @apiParam {String} lga lga on message 
* @apiParam {String} gender gender on message 
* @apiParam {String} disability disability on message 
* @apiParam {String} marital_status marital status on message
* @apiParam {String} qualification qualification on message  
* @apiUse MessageSuccess
*
* @apiUse MessageError  
*/

router.post('/message/create', (req, res) => {
  return messageUtils.createMessage(req.body, res);
});

/**
* @api {post} /pyc/message/ Find a message by ID
* @apiName Find message by ID
* @apiGroup Message
* @apiParam {String} id id of message object 
* @apiUse MessageSuccess
*
* @apiUse MessageError  
*/

router.post('/message/', (req, res) => {
  return messageUtils.getMessage(req.body, res);
});

/**
* @api {post} /pyc/message/query Find a message by query
* @apiName Find message by query
* @apiGroup Message
* @apiParam {Object} query query object specifying several parts of schema 
* @apiUse MessageSuccess
*
* @apiUse MessageError  
*/

router.post('/message/query', (req, res) => {
  return messageUtils.getMessageByQuery(req.body, res);
});



/**
* @api {get} /pyc/message/ Find all Messages
* @apiName Find all Messages
* @apiGroup Message
* @apiUse MessageSuccess
*
* @apiUse MessageError  
*/

router.get('/message/', (req, res) => {
  return messageUtils.getAllMessage(res);
});
 


module.exports = router;
'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const 
  Message = require('../Message'),
	_ = require('lodash');


exports.createMessage = (doc, res) => {
	if (_.isEmpty(doc)) {
			return Promise.reject("The body of the message request is empty");
	}
	else {
    const newMessage = new Message(doc);
    return newMessage.save()
    .then(savedDoc => {
      return res.status(201).json({data: savedDoc, message: 'Message saved successfully'});
    })
    .catch(error => {
      console.log(error.message)
      return res.status(400).json({message: error.message});
    });
	}
};

// exports.updateProfile = (doc, res) => {
// 	if (_.isEmpty(doc.query) || _.isEmpty(doc.update)) {
// 			return Promise.reject("Either query or Update params of the request is empty");
// 	}
// 	else {
//       Profile.findOneAndUpdate(doc.query, doc.update, {new: true})
//       .then(updatedDoc => {
// 				if (!!updatedDoc) {
// 					return res.status(200).json({data: updatedDoc, message: 'Profile updated successfully'});
// 				}
// 				else {
// 					return res.status(400).json({message: 'The document was not found'});
// 				}
//       })
//       .catch(error => {
//         return res.status(400).json({message: 'An error occured during update'});
//       });
// 	}
// };

exports.getAllMessage = (res) => {
  Message.find()
    .then(messages => {
      return res.status(200).json({data: messages, message: 'Messages retrieved successfully'});
    })
    .catch(error => {
      return res.status(400).json({message: 'An error occured while trying to retrieve Messages'});
    })
}

exports.getMessage = (data, res) => {
	if (_.isEmpty(data)) {
		console.log(data)
		return res.status(400).json({message: 'Missing key Fields'});
	}
  Message.findOne({_id: data.id})
    .then(message => {
      return res.status(200).json({data: message, message: 'Message retrieved successfully'});
    })
    .catch(error => {
      return res.status(400).json({message: 'An error occured while trying to retrieve Message with id' + data.id});
    })
}

exports.getMessageByQuery = (data, res) => {
	if (_.isEmpty(data)) {
		console.log(data)
		return res.status(400).json({message: 'Missing key Fields'});
	}
  Message.find(data.query)
    .then(messages => {
      return res.status(200).json({data: messages, message: 'Message retrieved successfully'});
    })
    .catch(error => {
      return res.status(400).json({message: 'An error occured while trying to retrieve Message with query' + data.query});
    })
}
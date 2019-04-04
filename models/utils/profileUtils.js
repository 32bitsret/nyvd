'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const 
  Profile = require('../Profile'),
	_ = require('lodash');

exports.getProfile = (filter) => {

	if (_.isEmpty(filter)) {
		return Promise.reject('Missing key Fields');
	}
	return Profile.findOne(filter).exec()
		.then(result => {
			if (!_.isEmpty(result)) {
				return result;
			}
			else {
				return false;
			}
		});
};

exports.createProfile = (doc) => {
	if (_.isEmpty(doc)) {
			return Promise.reject("The body of the profile request is empty");
	}
	else {
			const newProfile = new Profile(doc);
			// try {
			return newProfile.save()
			// }
			.catch(error => {
				console.log('error')
				console.log(error.message)
				//  return Promise.reject(error.message);
				throw error.message
			});
	}
};

exports.updateProfile = (doc) => {
	if (_.isEmpty(doc.query) || _.isEmpty(doc.update)) {
			return Promise.reject("Either query or Update params of the request is empty");
	}
	else {
    if (_.has(doc.update, 'education')) {

    }
    else {
      Profile.findOneAndUpdate(doc.query, doc.update, {new: true})
      .then(updatedDoc => {
        return res.status(200).json({data: updatedDoc, message: 'Profile updated successfully'});
      })
      .catch(error => {
        return res.status(400).json({message: 'An error occured during update'});
      });
    } 
	}
};


exports.getProfile = (data, res) => {
  Profile.findOne({email: data.email})
    .then(profile => {
      return res.status(200).json({data: profile, message: 'Artist retrieved successfully'});
    })
    .catch(error => {
      return res.status(400).json({message: 'An error occured while trying to retrieve Artist with id' + data.email});
    })
}

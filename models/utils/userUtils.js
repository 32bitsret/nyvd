'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const 
  User = require('../User'),
	bcrypt = require('bcrypt'),
	jwt = require('jsonwebtoken'),
	_ = require('lodash');

exports.getUsers = (filter) => {

	if (_.isEmpty(filter)) {
		return Promise.reject('Missing key Fields');
	}

	return User.findOne(filter).exec()
		.then(result => {
			if (!_.isEmpty(result)) {
				return result;
			}
			else {
				return false;
			}
		});

};

exports.createUsers = (doc) => {
	if (_.isEmpty(doc)) {
			return Promise.reject("The body of the request is empty");
	}

	if (_.isArray(doc)) {
			return User.insertMany(doc)
			.catch(error => {
				console.log('error')
				console.log(error.message)
				//  return Promise.reject(error.message);
				throw error.message
			});
	}
	else {
			const newUser = new User(doc);
			// try {
			return newUser.save()
			// }
			.catch(error => {
				console.log(error.message)
				//  return Promise.reject(error.message);
				throw error.message
			});
	}
};

exports.registerUser = (inputUser) => {
	let { email, password } = inputUser;
	if (_.isEmpty(inputUser) || !(email && password)) {
		return Promise.reject('Some key fields are missing. Hint Email or Password');
	}
	return this.getUsers({email})
		.then(user => {
			if (!user) {
				return this.createUsers(inputUser)
				.catch(error => {
					return Promise.reject(error);
				});
			}
			else {
				return Promise.reject("Duplicate Record.. This email has already been registered");
			}
		})
		.catch(err => {
			console.error('Error trying to register user ' + inputUser.email + ' err: ' + JSON.stringify(err));
			return Promise.reject(err);
		});
};

exports.loginUser = (inputUser, res) => {
	let {email, password} = inputUser;
	 // Find user by email
	 
  // Find user by email
  return User.findOne({ email })
    .then(async user => {
			if(!user) {
				return res.status(400).json({message: 'User not found'});
			}
			const match = await bcrypt.compare(password, user.password);
			// return match;
			if(!!match) {
				let secretOrKey = 'superSasdlfjal;jafecasfaklfnalkfretKey';
				const payload = {
					id: user._id,
					firstname: user.firstname,
					lastname: user.lastname,
					photo: user.photo,
					email: user.email
				}; 
				jwt.sign(payload, secretOrKey, { expiresIn: 360000 }, (err, token) => {
					if(err) {
						console.log(err)
						throw error;
					}
					if (token) {
						return res.status(200).json({token, payload})
					}
				})
			}
			else {
				return res.status(400).json({message: 'Incorrect password'});
			}
      
		})
		.catch((error) => {
			return res.status(400).json({message: error});
		});
}

const 
	bluebird = require('bluebird'),
	AWS = require('aws-sdk');


AWS.config.update({
  region: 'us-east-1',
  s3ForcePathStyle: true
});

AWS.config.setPromisesDependency(bluebird);

const s3 = new AWS.S3();


module.exports = function (buf, name, type) {
		const params = {
			Bucket: process.env.S3_BUCKET,
			Body: buf,
			ContentType: type,
			Key: name,
			ACL:'public-read-write'
		};
		console.log(params)
		return s3.upload(params).promise();
}
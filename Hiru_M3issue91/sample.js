let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {


	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_Test1201',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			console.log(message);
		})
	}, function (error) {
		console.log(error);
	});

	sqs.sendMessage({
		MessageBody: 'this is a sample message',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_Test1201',
		DelaySeconds: '0',
		MessageAttributes: {}
	}, function (data) {
		console.log(data);
	}, function (error) {
		console.log(error);
	});


	callback(null, 'Successfully executed');
}
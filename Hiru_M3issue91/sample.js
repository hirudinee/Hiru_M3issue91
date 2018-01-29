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
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
		})
	}, function (error) {
		// implement error handling logic here
	});

	sqs.sendMessage({
		MessageBody: 'this is a sample message',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_Test1201',
		DelaySeconds: '0',
		MessageAttributes: {}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});


	callback(null, 'Successfully executed');
}
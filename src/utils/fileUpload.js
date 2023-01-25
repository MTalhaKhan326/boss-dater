const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

exports.uploadFile = (file) => {
  console.log('process.env.AWS_BUCKET',process.env.AWS_BUCKET)
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: Date.now() + file.name,
    Body: file.data,
    ACL:"public-read-write", 
    ContentType: file.mimetype,
  };
  return s3.upload(params).promise();
};

exports.uploadFileFromStorage = (path, name) => {
  const fileContent = fs.readFileSync(path);
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: name,
    Body: fileContent,
  };
  return s3.upload(params).promise();
};

const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

exports.uploadFile = (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: Date.now() + file.name,
    Body: file.data,
    ContentType: file.mimetype,
  };
  return s3.upload(params).promise();
};

exports.uploadFileFromStorage = (path, name) => {
  const fileContent = fs.readFileSync(path);
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: name,
    Body: fileContent,
  };
  return s3.upload(params).promise();
};

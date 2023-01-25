const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const bucketName = process.env.AWS_BUCKET;
const region = process.env.AWS_DEFAULT_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

//Function to upload a file to s3
exports.uploadToS3 = file=>{
    
    const fileStream = fs.createReadStream(file.path);
    
    const uploadParam = {
        Bucket: bucketName,
        Key: file.filename,
        Body: fileStream,
        ContentType: file.mimetype
    }
    
    return s3.upload(uploadParam).promise()
}

//download a  file from s3
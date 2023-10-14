import AWS from "aws-sdk";

const s3 = new AWS.S3();

export const handler = async (event: any) => {
  const src_bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  try {
    const params = {
      Bucket: src_bucket,
      Key: key,
    };
    console.log("params:", params);

    const imageData = await s3.getObject(params).promise();
    console.log("imageData:", imageData);
  } catch (err) {
    console.log(err);
  }
};

// Records: [
//     {
//       eventVersion: '2.1',
//       eventSource: 'aws:s3',
//       awsRegion: 'eu-north-1',
//       eventTime: '2023-10-05T16:28:03.931Z',
//       eventName: 'ObjectCreated:Put',
//       userIdentity: [Object],
//       requestParameters: [Object],
//       responseElements: [Object],
//       s3: [Object]
//     }
//   ]
// }

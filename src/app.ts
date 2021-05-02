
import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import { eventContext } from 'aws-serverless-express/middleware';
const AWS = require("aws-sdk");

export function App() {
  const app = express();
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(eventContext());

  app.get('/:key', async(req, res) => {

    const s3 = new AWS.S3({});
    const url = await s3.getSignedUrl("getObject", {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: req.params.key,
      Expires: 600,
    });
    res.send(url);
  });

  return app;
}
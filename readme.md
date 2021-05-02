# Commands
Basic serverless application to generate pre-signed url for images in S3 bucket. 
This will create a new S3 bucket and Syn images under assets folder.
Once you call the lambda through API Gateway, it will generate pre-singed url for expiry time 600 seconds.

## Install dependency
`npm install`

## Deploy to AWS
`npm run deploy`

## Build
`npm run build`

## Clear
`npm run clean`

## How to access

### In browser

`https://<API_Gateway_URL>/dev/<image_file_name>`

or 

### Terminal

`curl -X GET https://<API_Gateway_URL>/dev/<image_file_name>`
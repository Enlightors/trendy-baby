import { PutObjectOutput, PutObjectRequest } from "aws-sdk/clients/s3";
import { AWSError } from "aws-sdk/lib/error";
import * as S3 from "aws-sdk/clients/s3";
import Connect from "./storage";

export default async function Upload(
  bucket: string,
  file: Express.Multer.File,
  objectName: string
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const s3: S3 = Connect();
    const params: PutObjectRequest = {
      Bucket: bucket,
      Key: objectName,
      Body: file.buffer,
      ACL: "public-read",
      ContentType: file.mimetype,
    };
    s3.putObject(params, (err: AWSError) => {
      if (err) reject(err);
      const storageUrl = process.env.STORAGE_URL?.replace(/\/$/, "");
      const fullUrl = `${storageUrl}/${bucket}/${objectName}`.replace(
        /([^:]\/)\/+/g,
        "$1"
      );
      resolve(fullUrl);
    });
  });
}

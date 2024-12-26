import { S3 } from "aws-sdk";

export default function Connect(): S3 {
  return new S3({
    apiVersion: "latest",
    region: "us-west-rack-2",
    endpoint: `${process.env.STORAGE_URL}`,
    credentials: {
      accessKeyId: process.env.STORAGE_ACCESS_KEY!,
      secretAccessKey: process.env.STORAGE_SECRET_KEY!,
    },
    s3ForcePathStyle: true,
  });
}

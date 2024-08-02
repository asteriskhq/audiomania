import { Client } from 'minio';

export const storage = new Client({
  endPoint: process.env.STORAGE_URL!,
  port: 9000,
  useSSL: false,
  accessKey: process.env.STORAGE_ACCESS_KEY!,
  secretKey: process.env.STORAGE_PRIVATE_KEY!,
});

import dotenv from 'dotenv';
import type { SignOptions } from 'jsonwebtoken';
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  jwtSecret: process.env.JWT_SECRET || 'cargotrack-secret-key-change-in-production',
  jwtExpiresIn: (process.env.JWT_EXPIRES_IN || '7d') as SignOptions['expiresIn'],
  uploadDir: process.env.UPLOAD_DIR || '/uploads',
  databaseUrl: process.env.DATABASE_URL,
  corsOrigin: process.env.CORS_ORIGIN || '*',
  nodeEnv: process.env.NODE_ENV || 'development',
};

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api",
  DEFAULT_USER_ID: process.env.NEXT_PUBLIC_DEFAULT_USER_ID || 1,
  LIMIT: 5,
} as const;

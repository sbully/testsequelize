const env = process.env.NODE_ENV || 'dev';

const dev = {
  app: { env, port: 5000 },
  auth: {
    secret: process.env.AUTH_SECRET || 'jensaisrien',
    expiresIn: 3600,
    algorithm: 'HS256',
  },
};

const test = {
  app: { env, port: 5000 },
};

const prod = {
  app: { env, port: 5000 },
};

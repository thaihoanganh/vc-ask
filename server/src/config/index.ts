export default () => ({
  port: process.env.PORT || 3000,
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/vc-ask',
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'jwt_secret',
    expiresIn: '7d',
  },
});

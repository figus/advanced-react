module.exports = {
  port: process.env.PORT || 8080, // Try to read it from the process, otherwise, use 8080
  host: process.env.HOST || 'localhost'
};

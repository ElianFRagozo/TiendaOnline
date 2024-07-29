const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'inventory-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

const errorHandler = (err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
};

module.exports = errorHandler;
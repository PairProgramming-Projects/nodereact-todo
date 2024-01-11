import { default as winston } from 'winston'

const log = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
  ]
});

export default log

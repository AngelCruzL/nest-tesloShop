import * as Joi from 'joi';
import * as process from 'process';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  PORT: Joi.number() || process.env.PORT,
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_NAME: Joi.string().required(),
});

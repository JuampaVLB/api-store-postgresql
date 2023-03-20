import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);

console.log(id + " " + name);
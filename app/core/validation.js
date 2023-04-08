const joi = require("joi");

const usercreateprofilevalidation = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().required(),
    intro: joi.string().required(),
    equity: joi.number().required(),
    experience: joi.array().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};


const usersubscriptionvalidation = (req, res, next) => {
  const schema = joi.object({
    plan_type: joi.string().required(),
    expiring_date: joi.string().required(),
    user: joi.string().required(),
    price: joi.number().required(),
    experience: joi.array().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const retriveprofilevalidation = (req, res, next) => {
  const schema = joi.object({
    userId: joi.string().required(),
   
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};


module.exports = {
    usercreateprofilevalidation , usersubscriptionvalidation , retriveprofilevalidation
}
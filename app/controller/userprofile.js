const { user_model } = require("../core/db/user");
const { create_profile_model, profile_subscription_model, retrieve_profile_model } = require("../model/userprofile");



const create_profile_controller = async (req, res, next) => {
    const {username, intro ,equity , experience } = req.body;
    const user = username.toLowerCase()
    try {
      const userDetails = await user_model.findOne({ username: user });
      if (userDetails) {
        //end of saving to the log
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "username already exist on our system",
          error: "username already exist on our system",
        });
      }

      const data = {
        intro ,equity , experience , user
      };
  
      let trainee = await create_profile_model(data, res);
      
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "profile successfully updated",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
    }
  };
const create_subscription_controller = async (req, res, next) => {
    const {plan_type ,  price , expiring_date , user } = req.body;
    try {
      const userDetails = await user_model.findById(user);
      if (!userDetails) {
        //end of saving to the log
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "user dont exist",
          error: "user dont exist",
        });
      }

      const data = {
        plan_type ,  price , expiring_date , user
      };
  
      let trainee = await profile_subscription_model(data, res);
      
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "profile successfully updated",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
    }
  };
const retrieve_profile_controller = async (req, res, next) => {
    const { userId } = req.body;
    try {
      const userDetails = await user_model.findById(userId);
      if (!userDetails) {
        //end of saving to the log
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "user dont exist",
          error: "user dont exist",
        });
      }

      const data = {
        userId
      };
  
      let trainee = await retrieve_profile_model(data, res);
      
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "profile successfully updated",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
module.exports = {
    create_profile_controller  , create_subscription_controller , retrieve_profile_controller
  }
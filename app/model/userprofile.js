const subscription_model = require("../core/db/subscription");
const { user_model } = require("../core/db/user");



const create_profile_model = async (data, res) => {
    try {
      const {user, intro ,equity , experience
      } = data;
      const trainer = await new user_model({
       username:user, intro , equity ,experience
      });
      const userDetails = await trainer.save();
     
      return userDetails;
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
const profile_subscription_model = async (data, res) => {
    try {
      const {plan_type ,  price , expiring_date , user
      } = data;
      const trainer = await new subscription_model({
        plan_type ,  price , expiring_date , user
      });
      const userDetails = await trainer.save();
      return userDetails;
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
const retrieve_profile_model = async (data, res) => {
    try {
      const {userId
      } = data;
      const trainer = await user_model.findById(userId);
      
      return trainer;
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    create_profile_model , profile_subscription_model , retrieve_profile_model
}
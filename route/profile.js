const { create_profile_controller, create_subscription_controller, retrieve_profile_controller } = require('../app/controller/userprofile')
const { usercreateprofilevalidation, usersubscriptionvalidation, retriveprofilevalidation } = require('../app/core/validation')
const { retrieve_profile_model } = require('../app/model/userprofile')

const router = require('express').Router()

router.post('/update/profile' , usercreateprofilevalidation, create_profile_controller)
router.post('/profile/subscription' , usersubscriptionvalidation ,  create_subscription_controller)
router.post('/profile' , retriveprofilevalidation ,  retrieve_profile_controller)

module.exports = router
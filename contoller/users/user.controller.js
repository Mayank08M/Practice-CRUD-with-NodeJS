const { userServices } = require("../../services");
const ApiError = require("../../utils/handlers/Apierrorhandler");
const { ApiResponse } = require("../../utils/handlers/Apiresponse");
const AsyncHandler = require("../../utils/handlers/Async.handler");
const bcryptHelper = require("../../utils/helper/bcrypt.helper");
const sendEmail = require('../../utils/helper/email.helper')

module.exports = {
  loginDetails: AsyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await userServices.getByEmail(email)
    if (!user) throw new ApiError(404, "User not found")
    const compare = bcryptHelper.compare(password, user.password)
    if (!compare) throw new ApiError(401, "Invalid credentials")
    res.status(200).json(new ApiResponse(200, user, "Login Succesfull"))
  }),
  addDetail: AsyncHandler(async (req, res) => {
    const input = req.body
    const file = req.files
    input.profileimage = file.profileimage[0].path
    input.password = bcryptHelper.hash(input.password)
    await userServices.create(input, file)
    res.status(201).json(new ApiResponse(201, {}, "Succesfully added"))
  }),
  updateDetails: AsyncHandler(async (req, res) => {
    const input = req.body
    const file = req.files
    const useremail = req.body.email
    input.profileimage = file.profileimage[0].path
    input.id = req.params.id
    if (input.password) {
      input.password = bcryptHelper.hash(input.password)
    }
    console.log(useremail)
    await userServices.update(input)
    const userEmail = useremail; // Replace with actual user email
    const emailSubject = 'Profile Updated';
    const emailText = 'Your profile has been successfully updated.';
    await sendEmail(userEmail, emailSubject, emailText);
    res.status(202).json(new ApiResponse(201, {}, "Succesfully updated"))

  }),
  getDetail: AsyncHandler(async (req, res) => {
    const users = await userServices.getAll()
    res.status(200).json(new ApiResponse(200, { users }, "Data retrived succesfully"))
  }),
  getByID: AsyncHandler(async (req, res) => {
    const users = await userServices.getByID(req.params.id)
    res.status(200).json(new ApiResponse(200, { users }, "User retrived succesfully"))
  }),
}
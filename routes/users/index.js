const { userController } = require('../../contoller')
const createMulterStorage = require('../../middleware/fileUploader')
const multer = require("multer");
const storage = createMulterStorage("profile");
const handle_recipe_files = multer({ storage });

const userRoutes = require('express').Router()
userRoutes.get('/getAll', userController.getDetail)
userRoutes.post('/registration',handle_recipe_files.fields([
            { name: "profileimage", maxCount: 1 },
          ]), userController.addDetail)
userRoutes.post('/login', userController.loginDetails)
userRoutes.put('/updateprofile/:id',handle_recipe_files.fields([
  { name: "profileimage", maxCount: 1 },
]), userController.updateDetails)
userRoutes.get('/getByID/:id', userController.getByID)
module.exports = userRoutes

// CMSRecipeRouter.route("/create").post(
//     [
//       Auth(),
//       handle_recipe_files.fields([
//         { name: "video", maxCount: 1 },
//         { name: "cover_image", maxCount: 1 },
//       ]),
//     ],
//     createRecipe
//   );
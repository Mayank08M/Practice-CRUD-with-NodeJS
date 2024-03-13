// const multer  = require('multer')

// const storage = multer.diskStorage({
//   destination: function (req, file, cb){
//     return cb(null, "./uploads")
//   },
//   filename: function (req, file, cb){
//     return cb(null, `${Date.now()}-${file.originalname}`);
//   }
// })

// const upload = multer({ storage })
// module.exports = upload
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const createMulterStorage = (folderName) => {
  return multer.diskStorage({
    // Set the destination directory for uploadeduploads
    destination: function (req, file, cb) {
      // Check if the 'public' directory exists, and create it if it doesn't
      if (!fs.existsSync("uploads")) {
        try {
          fs.mkdirSync("uploads");
        } catch (err) {
          if (err instanceof Error) {
            return cb(err, "");
          }
        }
      }

      // Check if the specified directory exists inside 'public', and create it if it doesn't
      if (!fs.existsSync(`uploads/${folderName}`)) {
        try {
          fs.mkdirSync(`uploads/${folderName}`);
        } catch (err) {
          if (err instanceof Error) {
            return cb(err, "");
          }
        }
      }

      // Call the callback with the path to the destination directory
      cb(null, `uploads/${folderName}`);
    },

    // Set the filename for uploaded files
    filename: function (req, file, cb) {
      // Use the original filename, but append the current timestamp and file extension
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    },
  });
};

module.exports = createMulterStorage;
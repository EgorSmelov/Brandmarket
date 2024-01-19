const multer = require("multer");
const mime = require("mime-types");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/img");
  },
  filename(req, file, cb) {
    const ext = mime.extension(file.mimetype);
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

module.exports = multer({ storage });

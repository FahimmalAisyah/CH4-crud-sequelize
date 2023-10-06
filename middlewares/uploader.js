const multer = require("multer");

const multerFiltering = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true); // Tipe file sesuai, tidak ada kesalahan
  } else {
    cb(new Error("Hanya format gambar yang diterima")); // Tipe file tidak sesuai, kirim pesan kesalahan
  }
};

const upload = multer({
  fileFilter: multerFiltering,
});

module.exports = upload;

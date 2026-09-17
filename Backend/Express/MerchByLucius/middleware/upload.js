const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const imageOnly = (req, file, callback) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
        return callback(new Error("Only JPEG, PNG, WebP, and GIF images are allowed"));
    }
    callback(null, true);
};

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: imageOnly,
    limits: {fileSize: 5 * 1024 * 1024}
});

const uploadImage = (req, res, next) => {
    upload.single("image")(req, res, (error) => {
        if (error) {
            return res.status(400).json({message: error.message});
        }

        if (!req.file) {
            return next();
        }

        const uploadStream = cloudinary.uploader.upload_stream(
            {folder: "merch-by-lucius/products", resource_type: "image"},
            (uploadError, result) => {
                if (uploadError) {
                    return next(uploadError);
                }

                req.file.path = result.secure_url;
                req.file.cloudinaryPublicId = result.public_id;
                next();
            }
        );

        uploadStream.end(req.file.buffer);
    });
};

module.exports = uploadImage;

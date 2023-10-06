import multer from 'multer';

const upload = multer({
	storage : multer.diskStorage ({
		destination : function (req, file, cb) {
			cb(null, "public/images")
		},
		filename : function (req, file, cb){
			cb(null, file.originalname)
		}
	})
}).single("image");

export default upload;
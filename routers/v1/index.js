const express = require('express');
const rootRouter = express.Router();
const JobSeekerController = require('../../controllers/job.seeker.controller');
const jobSeekerController = new JobSeekerController();
const path = require('path');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads/'));
  },
  filename: function (req, file, cb) {
    req.body.file = file.originalname;
    cb(null, file.originalname.trim());
  }
})

var upload = multer({ storage: storage });
rootRouter.get('/candidate', jobSeekerController.getJobSeekersData);
rootRouter.post('/candidate', upload.single('file'), jobSeekerController.registerJobSeeker);
rootRouter.put('/candidate', jobSeekerController.updateJobSeekerData);
rootRouter.delete('/candidate', jobSeekerController.deleteJobSeekerData);
module.exports = rootRouter;
const JobSeekerService = require("../services/job.seeker.service");
class JobSeekerController {
  constructor() {}

  registerJobSeeker(req, res) {
    console.log(req.body);
    const { fullname, email, password, file } = req.body;
    if (!fullname || !email || !password || !file)
      return res.status(404).send({ status: 404, message: 'Bad Request' });

    const jobSeekerService = new JobSeekerService();
    jobSeekerService
      .createJobSeekerData(req.body)
      .then((data) => {
        return res.send({ status: 200, message: "Data Created successfully.", data: data });
      })
      .catch((err) => {
        return res.status(404).send({ status: 400, message: err });
      });
  }

  getJobSeekersData(req, res) {
    const jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekersData()
      .then((data) => {
        return res.send({ status: 200, data: data });
      })
      .catch((err) => {
        return res.status(404).send({ status: 400, message: err });
      });
  }

  updateJobSeekerData(req, res) {
    const { fullname, email, password, file } = req.body;
    if (!fullname || !email || !password || !file)
      return res.status(404).send({ status: 400, message: err });

    const jobSeekerService = new JobSeekerService();
    jobSeekerService
      .updateJobSeekerData(req.body)
      .then((data) => {
        return res.send({ status: 200, message: "Updated Successfully", data: data });
      })
      .catch((err) => {
        return res.status(400).send({ status: 400, message: err });
      });
  }

  deleteJobSeekerData(req, res) {
    const { email } = req.body;
    if (!email) return res.status(404).send({ status: 400, message: err });
    const jobSeekerService = new JobSeekerService();
    jobSeekerService
      .deleteJobSeekerData(email)
      .then((data) => {
        return res.send({ status: 200, message: "Deleted Successfully" });
      })
      .catch((err) => {
        return res.status(404).send({ status: 400, message: err });
      });
  }
}

module.exports = JobSeekerController;

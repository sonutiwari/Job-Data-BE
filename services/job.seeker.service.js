let connection = require("../configs/mongoose.config");
const JobSeekerModel = require("../models/job.seeker.model");
class JobSeekerService {
  async updateJobSeekerData(data) {
    return JobSeekerModel.updateOne({ email: data.email }, data)
      .then((resp) => Promise.resolve(resp))
      .catch((err) => Promise.reject(err));
  }

  async getJobSeekersData() {
    return JobSeekerModel.find()
      .then((data) => Promise.resolve(data))
      .catch((err) => Promise.resolve(err));
  }

  async createJobSeekerData(data) {
    const document = new JobSeekerModel({
      ...data,
    });
    return JobSeekerModel.create(document)
      .then((resp) => Promise.resolve(resp))
      .catch((err) => Promise.reject(err));
  }

  async deleteJobSeekerData(email) {
    return JobSeekerModel.deleteOne({ email: email })
      .then((resp) => Promise.resolve(resp))
      .catch((err) => Promise.reject(err));
  }
}

module.exports = JobSeekerService;

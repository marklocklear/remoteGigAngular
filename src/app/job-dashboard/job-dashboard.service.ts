import { Job } from "./job.interface";

export class JobDashboardService {
  constructor() {}

  getJobs(): Job[] {
    return [
      {
        id: 1,
        company: "RedHat",
        title: "Software Engineer",
        description: "Description goes here",
        appliedFor: true,
        appliedForDate: 1490742000000
      },
      {
        id: 2,
        company: "Digital Ocean",
        title: "DevOps Engineer",
        description: "Description goes here",
        appliedFor: false,
        appliedForDate: null
      }
    ];
  }
}

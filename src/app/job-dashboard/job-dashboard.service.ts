import { Job } from "./job.interface";
// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class JobDashboardService {
  constructor(private http: HttpClient) {}

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

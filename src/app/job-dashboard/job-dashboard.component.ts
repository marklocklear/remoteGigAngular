import { Component, OnInit } from "@angular/core";
import { Job } from "./job.interface";

@Component({
  selector: "job-dashboard",
  styleUrls: ["job-dashboard.component.scss"],
  template: `
    <h3>Remote Jobs</h3>
    <div>
      <job-count [items]="jobs"> </job-count>
      <job-detail
        *ngFor="let job of jobs"
        [detail]="job"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </job-detail>
    </div>
  `
})
export class JobDashboardComponent implements OnInit {
  jobs: Job[];
  constructor() {}
  ngOnInit() {
    this.jobs = [] = [
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
  handleEdit(event) {
    this.jobs = this.jobs.map((job: Job) => {
      if (job.id === event.id) {
        job = Object.assign({}, job, event);
      }
      return job;
    });
  }
  handleRemove(event: Job) {
    this.jobs = this.jobs.filter((job: Job) => {
      return job.id !== event.id;
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Job } from "./job.interface";
import { JobDashboardService } from "./job-dashboard.service";

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
  constructor(private jobService: JobDashboardService) {}
  ngOnInit() {
    this.jobService.getJobs().subscribe((data: Job[]) => (this.jobs = data));
  }
  handleEdit(event: Job) {
    this.jobService.updateJob(event).subscribe((data: Job) => {
      this.jobs = this.jobs.map((job: Job) => {
        if (job.id === event.id) {
          job = Object.assign({}, job, event);
        }
        return job;
      });
    });
  }
  handleRemove(event: Job) {
    this.jobService.removeJob(event).subscribe((data: Job) => {
      this.jobs = this.jobs.filter((job: Job) => {
        return job.id !== event.id;
      });
    });
  }
}

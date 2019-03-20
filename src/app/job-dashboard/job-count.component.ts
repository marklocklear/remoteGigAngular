import { Component, Input } from "@angular/core";

import { Job } from "./job.interface";

@Component({
  selector: "job-count",
  template: `
    <div>
      Total Jobs: {{ items.length }} Jobs Applied for: {{ jobsAppliedFor() }}
    </div>
  `
})
export class JobCountComponent {
  @Input()
  items: Job[];
  jobsAppliedFor(): number {
    return this.items.filter((job: Job) => job.appliedFor).length;
  }
}

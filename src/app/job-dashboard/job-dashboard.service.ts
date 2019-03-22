import { Job } from "./job.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

// const JOB_URL: string = "/api/jobs";
const JOB_URL: string = "http://localhost:3000/jobs";

@Injectable()
export class JobDashboardService {
  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get(JOB_URL);
  }
}

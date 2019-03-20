import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { Job } from "./job.interface";

@Component({
  selector: "job-detail",
  styleUrls: ["./job-dashboard.component.scss"],
  template: `
    <div>
      <div *ngIf="!editingStatus">
        <span class="status" [class.applied-for]="detail.appliedFor"> </span>
      </div>
      <div *ngIf="editingStatus">
        <input
          type="checkbox"
          [checked]="detail.appliedFor"
          (input)="onStatusChange(appliedFor.value)"
          #appliedFor
        />
      </div>
      <div *ngIf="editingTitle">
        <input
          type="text"
          [value]="detail.title"
          (input)="onTitleChange(title.value)"
          #title
        />
      </div>
      <div *ngIf="!editingTitle">
        {{ detail.title }}
      </div>
      <div class="date">
        Applied for on:
        {{
          detail.appliedForDate
            ? (detail.appliedForDate | date: "yMMMMd" | uppercase)
            : "Not Applied For"
        }}
      </div>
      <button (click)="toggleTitleEdit()">
        {{ editingTitle ? "Done" : "Edit Title" }}
      </button>
      <button (click)="toggleStatusEdit()">
        {{ editingStatus ? "Done" : "Edit Status" }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class JobDetailComponent implements OnChanges {
  @Input()
  detail: Job;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editingTitle: boolean = false;
  editingStatus: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onTitleChange(value: string) {
    this.detail.title = value;
  }
  onStatusChange(value: boolean) {
    this.detail.appliedFor = !this.detail.appliedFor;
  }
  toggleStatusEdit() {
    if (this.editingStatus) {
      this.edit.emit(this.detail);
    }
    this.editingStatus = !this.editingStatus;
  }
  toggleTitleEdit() {
    if (this.editingTitle) {
      this.edit.emit(this.detail);
    }
    this.editingTitle = !this.editingTitle;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}

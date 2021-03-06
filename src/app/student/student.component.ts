import { Component, Input, OnInit } from "@angular/core";

import { Student } from "./student.model";

@Component({
  selector: "jad-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  @Input() student: Student;

  constructor() {}

  ngOnInit() {}

  clicked() {
    console.log(`Students: ${this.student.name}`);
  }
}

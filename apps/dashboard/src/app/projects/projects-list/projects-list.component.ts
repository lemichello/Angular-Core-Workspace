import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'angular-core-workspace-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Input() readonly = true;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}

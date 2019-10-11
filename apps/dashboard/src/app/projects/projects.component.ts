import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-core-workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true
    }
  ];
  selectedProject: Project;

  constructor() {}

  ngOnInit() {}

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  cancel() {
    this.selectProject(null);
  }
}

interface Project {
  id: string;
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
}

import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'angular-core-workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  cancel() {
    this.selectProject(null);
  }

  deleteProject(project: Project) {
    this.projectsService
      .delete(project.id)
      .subscribe(result => this.getProjects());
  }
}

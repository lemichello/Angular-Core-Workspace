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

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  cancel() {
    this.selectProject(null);
    this.resetProject();
  }

  deleteProject(project: Project) {
    this.projectsService
      .delete(project.id)
      .subscribe(result => this.getProjects());
  }

  saveProject(project: Project) {
    if (project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }
  }

  createProject(project: Project) {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project: Project) {
    this.projectsService.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  resetProject() {
    const emptyProject: Project = {
      id: '',
      title: '',
      approved: false,
      details: '',
      percentComplete: 0
    };

    this.selectProject(emptyProject);
  }
}

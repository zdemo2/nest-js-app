import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Project } from './schema/project.schema';
import { createProject } from './dto/createProjectDto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  async getAllTasks(
    @Query()
    query: ExpressQuery,
  ): Promise<Project[]> {
    return this.projectService.findAllProjects(query);
  }

  @Post()
  async newProject(
    @Body()
    project: createProject,
  ): Promise<Project> {
    return this.projectService.creatNewProject(project);
  }
}

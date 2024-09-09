import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schema/project.schema';
import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: mongoose.Model<Project>,
  ) {}

  async findAllProjects(query: Query): Promise<Project[]> {
    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const getAlltasks = await this.projectModel.find({ ...keyword });

    if (!getAlltasks.length) {
      throw new NotFoundException('no tasks found');
    }
    return getAlltasks;
  }

  async creatNewProject(project: Project): Promise<Project> {
    const newProject = this.projectModel.create(project);

    return newProject;
  }
}

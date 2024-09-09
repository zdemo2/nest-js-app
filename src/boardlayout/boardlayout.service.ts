import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BoardLayout } from './schema/boardLayout.schema';
import mongoose from 'mongoose';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class BoardlayoutService {
  constructor(
    @InjectModel(BoardLayout.name)
    private boardLayoutModel: mongoose.Model<BoardLayout>,
  ) {}

  async getAllLayout(): Promise<BoardLayout[]> {
    const layouts = await this.boardLayoutModel.find();

    if (!layouts.length) {
      throw new NotFoundException('no layout found');
    }

    return layouts;
  }

  async createLayout(layout) {
    const layouts = await this.boardLayoutModel.create(layout);

    return layouts;
  }

  async updateLayout(layoutID: string, newTaskID: string) {
    const isValidId = mongoose.isValidObjectId(layoutID);

    if (!isValidId) {
      throw new NotFoundException('enter vaild ID');
    }
    const updateLayout = await this.boardLayoutModel.findByIdAndUpdate(
      layoutID,
      { $push: { tasks: newTaskID } },
      { new: true, useFindAndModify: false },
    );

    return updateLayout;
  }
}

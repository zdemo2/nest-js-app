import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export enum priority {
  URGENT = 'urgent',
  HIGH = 'high',
  NORMAL = 'normal',
  LOW = 'low',
}

class dueDate {
  @Prop()
  startDate: string;

  @Prop()
  endDate: string;
}

@Schema({
  timestamps: true,
})
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  assignedTo: string;

  @Prop()
  dueDate?: dueDate;

  @Prop()
  priority: priority;

  //   @Prop({ type: SchemaTypes.ObjectId, ref: 'Board', required: true })
  //   product: { type: Types.ObjectId; ref: 'Board' };

  @Prop({ required: true })
  currentLayout: string;

  @Prop()
  isSubTask: boolean;

  @Prop()
  indexOf: number;

  @Prop()
  isMoved?: Boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

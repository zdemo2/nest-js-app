import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class BoardLayout {
  @Prop({ required: true })
  title: string;

  @Prop()
  tasksID: [string];

  @Prop()
  isHidden: Boolean;
}

export const BoardLayoutSchema = SchemaFactory.createForClass(BoardLayout);

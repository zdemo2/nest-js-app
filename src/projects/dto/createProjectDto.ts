import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { priority } from '../schema/project.schema';

export class dueDateDto {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;
}

export class createProject {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  assignedTo: string;

  @IsOptional()
  dueDate?: dueDateDto;

  @IsNotEmpty()
  @IsString()
  @IsEnum(priority, { message: 'please enter correct priority flag' })
  priority: priority;

  @IsNotEmpty()
  @IsString()
  currentLayout: string;

  @IsBoolean()
  isSubTask: boolean;
}

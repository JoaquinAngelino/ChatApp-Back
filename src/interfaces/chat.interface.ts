import { Types } from 'mongoose';
import { IMessage } from './message.interface';

export interface IChat {
	_id?: Types.ObjectId;
	messages: IMessage[];
	members: Types.ObjectId;
}

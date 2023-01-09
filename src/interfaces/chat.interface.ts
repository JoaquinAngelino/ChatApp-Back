import { Types } from 'mongoose';
import { IMessage } from './message.interface';
import { IUser } from './user.interface';

export interface IChat {
	_id?: Types.ObjectId;
	messages: Array<Types.ObjectId | IMessage>
	members: Array<Types.ObjectId | IUser>
}

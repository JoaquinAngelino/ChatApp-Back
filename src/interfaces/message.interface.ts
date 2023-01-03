import { Types } from 'mongoose';

export interface IMessage {
	_id?: Types.ObjectId;
	text: string;
	sender: Types.ObjectId;
	time: number;
}
import { ObjectId } from 'mongoose';



export interface IMessage {
	_id?: ObjectId;

	text: string;

	timestamp: number;

	chat: ObjectId;
}

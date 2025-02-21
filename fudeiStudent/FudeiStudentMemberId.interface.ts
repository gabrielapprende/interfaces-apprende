import { IFudeiStudentSchool } from './FudeiStudentSchool.interface';
import { IFudeiStudentRepresentative } from './IFudeiStudentRepresentative.interface';

export interface IFudeiStudentMemberId {
	age: null;
	name: string;
	dni: string;
	level: string;
	address: string;
	gender: string;
	dateBirth: string;
	priority: boolean;
	preferential: boolean;
	junaeb: boolean;
	specialSchool: boolean;
	representative: IFudeiStudentRepresentative;
	school: IFudeiStudentSchool;
}

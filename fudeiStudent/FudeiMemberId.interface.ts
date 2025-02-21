import { IFudeiDiagnosis } from './FudeiDiagnosis.interface';
import { IFudeiStudentMemberId } from './FudeiStudentMemberId.interface';

export interface IFudeiMemberId {
	Id: string;
	dni: string;
	name: string;
	lastname: string;
	level: string;
	nee: string;
	diagnoses: IFudeiDiagnosis[];
	schoolId: number;
	schoolRbd: string;
	schoolName: string;
	birthDate: string;
	entryDate: string;
	studentId: string;
	student: IFudeiStudentMemberId;
}

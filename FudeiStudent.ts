import {IStudentHeader} from "./StudentHeader";
import {IFudeiMain} from "./fudeiStudent";

export interface IFudeiStudent {
	student: IStudentHeader;
	fudeis: IFudeiMain[];
}
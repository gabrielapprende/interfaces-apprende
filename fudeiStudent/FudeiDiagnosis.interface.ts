import { IFudeiAuthorized } from './FudeiAuthorized.interface';

export interface IFudeiDiagnosis {
	name: string;
	acronym: string;
	certificatesUrl: string;
	description: string;
	implications: string;
	authorized: IFudeiAuthorized;
	teamProfessionals: unknown[];
}

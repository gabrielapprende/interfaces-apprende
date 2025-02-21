import { FrequencyTime } from '../enum/support-plan/FrequencyTime.enum';

export interface IFrequencySupportPlan {
	professional: {
		id: string;
		name: string;
		role: string;
	};
	typeOfIntervention: string;
	frequency: FrequencyTime;
	quantityOfSessions: number;
}

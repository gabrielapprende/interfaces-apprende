import { InterventionsSupportPlan } from '../enum/support-plan/InterventionSupportPlan.enum';

export interface IInterventionSupportPlan {
	type: InterventionsSupportPlan;
	detail: string;
	strategies: string[];
}

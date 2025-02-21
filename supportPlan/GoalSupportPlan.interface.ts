import { GeneratedGoalsSupportPlan } from '../enum/support-plan/GoalSupportPlan.enum';

export interface IGoalSupportPlan {
	type: string;
	detail: string;
	active: boolean;
	generated: GeneratedGoalsSupportPlan;
}

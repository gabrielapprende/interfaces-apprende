import { GeneratedGoalsSupportPlan } from '../enum/support-plan/GoalSupportPlan.enum';
import { StrategySupportPlan } from '../enum/support-plan/StrategiesSupportPlan.enum';

export interface IStrategySupportPlan {
	criteria: string;
	detail: string;
	strategies: StrategySupportPlan[];
	active: boolean;
	generated: GeneratedGoalsSupportPlan;
}

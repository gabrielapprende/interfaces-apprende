import { IGoalSupportPlan } from './GoalSupportPlan.interface';
import { IStrategySupportPlan } from './StrategiesSupportPlan.interface';
import { IAdaptationSupportPlan } from './AdaptationSupportPlan.interface';
import { IInterventionSupportPlan } from './InterventionSupportPlant.interface';
import { IEvaluationSupportPlan } from './EvaluationSupportPlan.interface';
import { IFrequencySupportPlan } from './FrecuencySupportPlan.interface';

export interface IResponseGetSupportPlan {
	__v: number;
	adaptations: IAdaptationSupportPlan[];
	context: string;
	endDate: null;
	evaluations: IEvaluationSupportPlan[];
	frequency: IFrequencySupportPlan[];
	goals: IGoalSupportPlan[];
	Id: string;
	interventions: IInterventionSupportPlan[];
	memberId: string;
	methodologies: unknown[];
	parentMeetings: unknown[];
	responsible: null;
	schedules: unknown[];
	signed: null;
	startDate: string;
	status: string;
	student: SupportPlanStudent;
	suggestionsDiagnosis: unknown[];
	suggestionsProgress: unknown[];
	teamProfessional: unknown[];
	type: string;
	strategy: IStrategySupportPlan[];
}

export interface SupportPlanStudent {
	name: string;
	age: number;
	email: string;
	level: string;
	address: string;
	dateBirth: string;
	preferential: boolean;
	junaeb: boolean;
	specialSchool: boolean;
	entryLevel: string;
	previousParticipation: number;
	usualLanguageSpanish: boolean;
	representative: SupportPlanRepresentative;
	school: SupportPlanSchool;
	nee: string;
	diagnosis: string;
	yearInsert: string;
}

export interface SupportPlanSchool {
	id: string;
	name: string;
	commune: string;
	region: string;
	typeAdministration: string;
}

export interface SupportPlanRepresentative {
	dni: string;
	name: string;
	address: string;
	phone: string;
}

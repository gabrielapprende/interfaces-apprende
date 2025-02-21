export interface IFudeiEducationalNeeds {
	curricular: string;
	family: string;
	other: string;
	strengths: string;
	observations: string;
	hasRequestForAccommodations: boolean;

	cognitiveSustainedAttention: boolean;
	cognitiveSelectiveAttention: boolean;
	cognitiveAttentionProcessing: boolean;
	cognitiveShortTermMemory: boolean;
	cognitiveMemoryMediumTerm: boolean;
	cognitiveMemoryLongTerm: boolean;
	cognitiveFunctionsWorkingMemory: boolean;
	cognitiveFunctionsPlanning: boolean;
	cognitiveFunctionsReasoning: boolean;
	cognitiveFunctionsFlexibility: boolean;
	cognitiveFunctionsResolution: boolean;
	cognitiveFunctionsOthers: string;
	communicativeExpressive: boolean;
	communicativeReceptive: boolean;
	communicativeOther: string;

	languagePhonologicalSpeech: boolean;
	languagePhonologicalWritten: boolean;
	languagePhonologicalSign: boolean;
	languageMorphosyntacticalSpeech: boolean;
	languageMorphosyntacticalWritten: boolean;
	languageMorphosyntacticalSign: boolean;
	languageSyntacticalSpeech: boolean;
	languageSyntacticalWritten: boolean;
	languageSyntacticalSign: boolean;
	languageSemanticSpeech: boolean;
	languageSemanticWritten: boolean;
	languageSemanticSign: boolean;
	languagePragmaticSpeech: boolean;
	languagePragmaticWritten: boolean;
	languagePragmaticSign: boolean;
	languageOther: string;

	sensoryPerceptiveVisual: boolean;
	sensoryPerceptiveAuditory: boolean;
	sensoryPerceptiveTactile: boolean;
	sensoryPerceptiveHaptic: boolean;
	sensoryPerceptiveOlfactoryGustatory: boolean;
	sensoryPerceptiveOther: string;

	psychomotorFine: boolean;
	psychomotorGross: boolean;
	psychomotorBody: boolean;
	psychomotorLaterality: boolean;
	psychomotorSpatial: boolean;
	psychomotorTemporal: boolean;
	psychomotorVisuoManual: boolean;
	psychomotorPositioning: boolean;
	psychomotorDisplacement: boolean;
	psychomotorBalance: boolean;
	psychomotorOther: string;

	effectiveSelfEsteem: boolean;
	effectiveSelfCare: boolean;
	effectiveAutonomy: boolean;
	effectiveSocial: boolean;
	effectivePeers: boolean;
	effectiveAdults: boolean;

	emotionalIdentifies: boolean;
	emotionalExpression: boolean;
	emotionalControl: boolean;
	emotionalOther: string;
}

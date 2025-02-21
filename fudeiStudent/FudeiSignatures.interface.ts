export interface IFudeiSignature {
	professionalInCharge: {
		name: string;
		profession: string;
		role: string;
		phone: string;
		email: string;
	};
	schoolPrincipal: {
		name: string;
		phone: string;
		email: string;
	};
	metaData: {
		closingDate: Date;
		folioId: string;
	};
}

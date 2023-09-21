export type CitizensListResponse = {
	data: Citizen[]
}

export type Citizen = {
	id: number;
	nombre: string;
	apellido: string;
	dni: string;
	telefono: string;
	domicilio: Address;
	fechaNacimiento: string;
	referenteTTT: ReferenteTTT;
};

export type Address = {
	calle: string;
	numero: string;
	extra: string;
}

export type ReferenteTTT = {
	nombre: string;
}

export type Filters = {
	referente: string;
	calle: string;
};

export type FiltersData = {
	referentes: string[];
	calles: string[];
};
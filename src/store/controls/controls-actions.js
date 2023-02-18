export const SET_SEARCH = "@@controls/SET_SEARCH";
export const SET_REGION = "@@controls/SET_REGION";
export const CLEAR_CONTROLS = "@@controls/CLEAR_CONTROLS";

export const setSearch = (search) => {
	return {
		type: SET_SEARCH,
		payload: search,
	};
};

export const setRegion = (region) => {
	return {
		type: SET_REGION,
		payload: region,
	};
};

export const clearControls = () => {
	return {
		type: CLEAR_CONTROLS,
	};
};

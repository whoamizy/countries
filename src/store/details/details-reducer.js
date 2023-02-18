import {
	CLEAR_DETAILS,
	SET_COUNTRY,
	SET_ERROR,
	SET_LOADING,
	SET_NEIGHBORS,
} from "./details-actions";

const initialState = {
	status: "idle",
	currentCountry: null,
	neighbors: [],
	error: null,
};

export const detailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_COUNTRY:
			return { ...state, status: "recieved", currentCountry: action.payload };
		case SET_LOADING:
			return { ...state, status: "loading", error: null };
		case SET_ERROR:
			return { ...state, status: "rejected", error: action.payload };
		case SET_NEIGHBORS:
			return { ...state, neighbors: action.payload };
		case CLEAR_DETAILS:
			return initialState;
		default:
			return state;
	}
};

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { selectDetails } from "../store/details/details-selectors";
import { useEffect } from "react";
import { clearDetails, loadCountryByName } from "../store/details/details-actions";

export const Details = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { status, currentCountry, error } = useSelector(selectDetails);

	useEffect(() => {
		dispatch(loadCountryByName(name));

		return () => {
			dispatch(clearDetails());
		};
	}, [name, dispatch]);

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			{error && <h2>Ne smog zagryzit`</h2>}
			{status === "loading" && <h2>Loading...</h2>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</div>
	);
};

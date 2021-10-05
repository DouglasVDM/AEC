/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Feedback = ({ setPage }) => {
	return (
		<>
			<div
				className="back mb-5"
				onClick={() => setPage("")}
				style={{ fontWeight: "600", cursor: "pointer" }}
			>
				<ArrowBackIcon />
				Go Back
			</div>
			<div className="feedback-table">
				<h3 className="text-center">Feedback</h3>
				<table className="table table-hover mt-5">
					<thead>
						<tr>
							<th scope="col" style={{ width: "10%" }}>
								#
							</th>
							<th scope="col" style={{ width: "15%" }}>
								Project Name
							</th>
							<th scope="col" style={{ width: "20%" }}>
								Problem Statement
							</th>
							<th scope="col" style={{ width: "20%" }}>
								Proposed Action
							</th>
							<th scope="col" style={{ width: "15%" }}>
								Feedback
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan="5">
								<h5 className="text-center">Coming soon......</h5>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Feedback;

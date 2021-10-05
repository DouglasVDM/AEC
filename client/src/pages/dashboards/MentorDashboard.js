import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import BcgImage from "./bg1.png";
import axios from "axios";

const MentorDashboard = ({ setAuth }) => {
	const [proposals, setProposals] = useState([]);
	const [page, setPage] = useState("");

	const getProposals = async () => {
		try {
			const response = await axios.get("/api/project");
			const data = response.data;
			setProposals(data);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getProposals();
	}, [page]);

	return (
		<div>
			<Container style={{ width: "100%", backgroundImage: `url(${BcgImage})` }}>
				<Button onClick={() => setAuth(false)} variant="contained">
					Log out
				</Button>
				<br />
				<br />
				<div>
					<table className="table table-hover">
						<caption>List of Projects</caption>
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Project name</th>
								<th scope="col">Problem statement</th>
								<th scope="col">Proposed action</th>
								<th scope="col">Expected result</th>
								<th scope="col">Project status</th>
							</tr>
						</thead>
						{proposals.map(
							(
								{
									project_id,
									project_name,
									problem_statement,
									proposed_action,
									expected_result,
									project_status,
								},
								index
							) => {
								return (
									<tbody key={project_id}>
										<tr>
											<th scope="row">{index + 1}</th>
											<td>{project_name}</td>
											<td>{problem_statement}</td>
											<td>{proposed_action}</td>
											<td>{expected_result}</td>
											<td>{project_status}</td>
										</tr>
									</tbody>
								);
							}
						)}
					</table>
				</div>
			</Container>
		</div>
	);
};

export default MentorDashboard;

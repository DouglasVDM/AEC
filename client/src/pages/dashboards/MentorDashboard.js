import React, { useEffect, useState } from "react";
import MentorShowProposal from "./dashComponents/MentorShowProposal";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";


const MentorDashboard = ({ setAuth }) => {
	const [proposals, setProposals] = useState([]);
	const [singleProject, setSingleProject] = useState([]);
	const [page, setPage] = useState("");

	useEffect(() => {
		getAllProposals();
	}, []);


	const getAllProposals = async () => {
		try {
			const response = await fetch("/api/project");
			const data = await response.json();
			setProposals(data);
		} catch (error) {
			console.error(error.message);
		}
	};

	const getProposalById = async (id) => {
		try {
			const response = await fetch(`/api/student/projects/proposal/${id}`, {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseResponse = await response.json();

			setSingleProject(parseResponse);
			setPage("mentor_show");
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="p-5">
			{page === "mentor_show" ? (
				<MentorShowProposal singleProject={singleProject} setPage={setPage} projectId={proposals.project_id} />
			) : (
				<Container style={{ width: "100%" }}>
					<Button onClick={() => setAuth(false)} variant="contained">
						Log out
					</Button>
					<br />
					<br />
					<div>
						<h3 className="text-center mb-3">Student Project Proposals</h3>
						<table className="table table-hover">
							<caption>List of Projects</caption>
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Project name</th>
									<th scope="col">Problem statement</th>
									<th scope="col">Proposed action</th>
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
										project_status,
									},
									index
								) => {
									return (
										<tbody key={project_id}>
											<tr onClick={() => getProposalById(project_id)}>
												<th scope="row">{index + 1}</th>
												<td>{project_name}</td>
												<td>{problem_statement}</td>
												<td>{proposed_action}</td>
												<td>{project_status}</td>
											</tr>
										</tbody>
									);
								}
							)}
						</table>
					</div>
				</Container>
			)}
		</div>
	);
};

export default MentorDashboard;
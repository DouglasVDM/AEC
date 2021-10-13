/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

const EditProposal = ({ proposal }) => {
	let entry = proposal[0];
	const {
		project_name,
		problem_statement,
		proposed_action,
		expected_result,
		social_returns,
		key_activities,
		key_resources,
		team,
		client_profile,
		client_relationships,
		client_channels,
		key_partners,
		stakeholders,
		networks,
		startup_costs,
		operational_costs,
		finance_plan,
		business_plan,
		implementation_plan,
		key_milestones,
		monitoring_and_evaluation,
		who_we_are,
		vision_and_mission,
		track_record,
	} = entry;

	const [projectName, setProjectName] = useState(project_name);
	const [problem, setProblem] = useState(problem_statement);
	const [action, setAction] = useState(proposed_action);
	const [expectResult, setExpectResult] = useState(expected_result);
	const [socialReturn, setSocialReturn] = useState(social_returns);
	const [keyActivity, setKeyActivity] = useState(key_activities);
	const [keyResource, setKeyResource] = useState(key_resources);
	const [teams, setTeams] = useState(team);
	const [clientProfile, setClientProfile] = useState(client_profile);
	const [clientRelation, setClientRelation] = useState(client_relationships);
	const [clienChannel, setClientChannel] = useState(client_channels);
	const [keyPartner, setKeyPartner] = useState(key_partners);
	const [stakeholder, setStakeholder] = useState(stakeholders);
	const [network, setNetwork] = useState(networks);
	const [startCost, setStartCost] = useState(startup_costs);
	const [operationCost, setOperationCost] = useState(operational_costs);
	const [financePlan, setFinancePlan] = useState(finance_plan);
	const [businessPlan, setBusinessPlan] = useState(business_plan);
	const [implementation, setImplementation] = useState(implementation_plan);
	const [keyMilestone, setKeyMilestone] = useState(key_milestones);
	const [monitoring, setMonitoring] = useState(monitoring_and_evaluation);
	const [whoWeAre, setWhoWeAre] = useState(who_we_are);
	const [vision, setVision] = useState(vision_and_mission);
	const [trackRecord, setsetTrackRecord] = useState(track_record);

	const EditProposalText = async (id) => {
		try {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			myHeaders.append("token", localStorage.token);

			const body = { projectName };

			const response = await fetch(`/api/student/projects/proposal/${id}`, {
				method: "PUT",
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			// const parseResponse = await response.json();
			console.log(response);
		} catch (error) {
			console.error(error.message);
		}
	};
console.log(entry);
console.log(entry.project_id);
console.log(projectName);
	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target={`#id${entry.project_id}`}
			>
				Open Project
			</button>

			<div className="modal" id={`id${entry.project_id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Edit Project Proposal</h4>
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>

						<div className="modal-body">
							<input
								type="text"
								className="form-control"
								value={projectName}
								onChange={(e) => setProjectName(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={problem}
								onChange={(e) => setProblem(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={action}
								onChange={(e) => setAction(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={expectResult}
								onChange={(e) => setExpectResult(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={socialReturn}
								onChange={(e) => setSocialReturn(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={keyActivity}
								onChange={(e) => setKeyActivity(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={keyResource}
								onChange={(e) => setKeyResource(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={teams}
								onChange={(e) => setTeams(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={clientProfile}
								onChange={(e) => setClientProfile(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={clientRelation}
								onChange={(e) => setClientRelation(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={clienChannel}
								onChange={(e) => setClientChannel(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={keyPartner}
								onChange={(e) => setKeyPartner(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={stakeholder}
								onChange={(e) => setStakeholder(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={network}
								onChange={(e) => setNetwork(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={startCost}
								onChange={(e) => setStartCost(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={operationCost}
								onChange={(e) => setOperationCost(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={financePlan}
								onChange={(e) => setFinancePlan(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={businessPlan}
								onChange={(e) => setBusinessPlan(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={implementation}
								onChange={(e) => setImplementation(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={keyMilestone}
								onChange={(e) => setKeyMilestone(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={monitoring}
								onChange={(e) => setMonitoring(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={whoWeAre}
								onChange={(e) => setWhoWeAre(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={vision}
								onChange={(e) => setVision(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={trackRecord}
								onChange={(e) => setsetTrackRecord(e.target.value)}
							/>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-dismiss="modal"
								onClick={() => EditProposalText(proposal[0].project_id)}
							>
								Edit
							</button>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-danger"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditProposal;

// const {
//     project_name,
//     problem_statement,
//     proposed_action,
//     expected_result,
//     social_returns,
//     key_activities,
//     key_resources,
//     team,
//     client_profile,
//     client_relationships,
//     client_channels,
//     key_partners,
//     stakeholders,
//     networks,
//     startup_costs,
//     operational_costs,
//     finance_plan,
//     business_plan,
//     implementation_plan,
//     key_milestones,
//     monitoring_and_evaluation,
//     who_we_are,
//     vision_and_mission,
//     track_record,
// } = data;

// const [data, setData] = useState({
// 	project_name: "",
// 	problem_statement: "",
// 	proposed_action: "",
// 	expected_result: "",
// 	social_returns: "",
// 	key_activities: "",
// 	key_resources: "",
// 	team: "",
// 	client_profile: "",
// 	client_relationships: "",
// 	client_channels: "",
// 	key_partners: "",
// 	stakeholders: "",
// 	networks: "",
// 	startup_costs: "",
// 	operational_costs: "",
// 	finance_plan: "",
// 	business_plan: "",
// 	implementation_plan: "",
// 	key_milestones: "",
// 	monitoring_and_evaluation: "",
// 	who_we_are: "",
// 	vision_and_mission: "",
// 	track_record: "",
// });

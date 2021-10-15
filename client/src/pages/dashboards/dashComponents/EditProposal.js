/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

const EditProposal = ({ proposal, setDataChange }) => {

	let entry = proposal[0];
	const {
		project_id,
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
	const [clientChannel, setClientChannel] = useState(client_channels);
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

			const body = { projectName, problem, action, expectResult, socialReturn, keyActivity, keyResource, teams, clientProfile, clientRelation, clientChannel, keyPartner, stakeholder, network, startCost, operationCost, financePlan, businessPlan, implementation, keyMilestone, monitoring, whoWeAre, vision, trackRecord };

			const response = await fetch(`/api/student/projects/proposal/${id}`, {
				method: "PUT",
				headers: myHeaders,
				body: JSON.stringify(body),
			});
			console.log(response);
			setDataChange(true);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target={`#id${project_id}`}
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
								value={projectName === null ? "" : projectName}
								onChange={(e) => setProjectName(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={problem === null ? "" : problem}
								onChange={(e) => setProblem(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={action === null ? "" : action}
								onChange={(e) => setAction(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={expectResult === null ? "" : expectResult}
								onChange={(e) => setExpectResult(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={socialReturn === null ? "" : socialReturn}
								onChange={(e) => setSocialReturn(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={keyActivity === null ? "" : keyActivity}
								onChange={(e) => setKeyActivity(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={keyResource === null ? "" : keyResource}
								onChange={(e) => setKeyResource(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={teams === null ? "" : teams}
								onChange={(e) => setTeams(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={clientProfile === null ? "" : clientProfile}
								onChange={(e) => setClientProfile(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={clientRelation === null ? "" : clientRelation}
								onChange={(e) => setClientRelation(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={clientChannel === null ? "" : clientChannel}
								onChange={(e) => setClientChannel(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={keyPartner === null ? "" : keyPartner}
								onChange={(e) => setKeyPartner(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={stakeholder === null ? "" : stakeholder}
								onChange={(e) => setStakeholder(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={network === null ? "" : network}
								onChange={(e) => setNetwork(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={startCost === null ? "" : startCost}
								onChange={(e) => setStartCost(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={operationCost === null ? "" : operationCost}
								onChange={(e) => setOperationCost(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={financePlan === null ? "" : finance_plan}
								onChange={(e) => setFinancePlan(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={businessPlan === null ? "" : businessPlan}
								onChange={(e) => setBusinessPlan(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={implementation === null ? "" : implementation}
								onChange={(e) => setImplementation(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={keyMilestone === null ? "" : keyMilestone}
								onChange={(e) => setKeyMilestone(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={monitoring === null ? "" : monitoring}
								onChange={(e) => setMonitoring(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={whoWeAre === null ? "" : whoWeAre}
								onChange={(e) => setWhoWeAre(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={vision === null ? "" : vision}
								onChange={(e) => setVision(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								value={trackRecord === null ? "" : trackRecord}
								onChange={(e) => setsetTrackRecord(e.target.value)}
							/>
						</div>


						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-dismiss="modal"
								onClick={() => EditProposalText(project_id)}
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

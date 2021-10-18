/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditProposal = ({ proposal, setDataChange }) => {
	let entry = proposal[0];

	const [inputChange, setInputChange] = useState({
		project_name: entry.project_name,
		problem_statement: entry.problem_statement,
		proposed_action: entry.proposed_action,
		expected_result: entry.expected_result,
		social_returns: entry.social_returns,
		key_activities: entry.key_activities,
		key_resources: entry.key_resources,
		team: entry.team,
		client_profile: entry.client_profile,
		client_relationships: entry.client_relationships,
		client_channels: entry.client_channels,
		key_partners: entry.key_partners,
		stakeholders: entry.stakeholders,
		networks: entry.networks,
		startup_costs: entry.startup_costs,
		operational_costs: entry.operational_costs,
		finance_plan: entry.finance_plan,
		business_plan: entry.business_plan,
		implementation_plan: entry.implementation_plan,
		key_milestones: entry.key_milestones,
		monitoring_and_evaluation: entry.monitoring_and_evaluation,
		who_we_are: entry.who_we_are,
		vision_and_mission: entry.vision_and_mission,
		track_record: entry.track_record,
	});

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
	} = inputChange;

	const onChange = (e) => {
		setInputChange((change) => {
			return {
				...change,
				[e.target.name]: e.target.value,
			};
		});
	};

	const EditProposalText = async (id) => {
		try {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			myHeaders.append("token", localStorage.token);

			const body = {
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
			};
			console.log(body);
			const response = await fetch(`/api/student/projects/proposal/${id}`, {
				method: "PUT",
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			if (response.status === 200) {
				toast.success("Project Updated Successfully!!");
			}
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
								name="project_name"
								value={project_name === null ? "" : project_name}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="problem_statement"
								className="form-control"
								value={problem_statement === null ? "" : problem_statement}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="proposed_action"
								className="form-control"
								value={proposed_action === null ? "" : proposed_action}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="expected_result"
								className="form-control"
								value={expected_result === null ? "" : expected_result}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="social_returns"
								className="form-control"
								value={social_returns === null ? "" : social_returns}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="key_activities"
								className="form-control"
								value={key_activities === null ? "" : key_activities}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="key_resources"
								className="form-control"
								value={key_resources === null ? "" : key_resources}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="team"
								className="form-control"
								value={team === null ? "" : team}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="client_profile"
								className="form-control"
								value={client_profile === null ? "" : client_profile}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="client_relationships"
								className="form-control"
								value={
									client_relationships === null ? "" : client_relationships
								}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="client_channels"
								className="form-control"
								value={client_channels === null ? "" : client_channels}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="key_partners"
								className="form-control"
								value={key_partners === null ? "" : key_partners}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="stakeholders"
								className="form-control"
								value={stakeholders === null ? "" : stakeholders}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="networks"
								className="form-control"
								value={networks === null ? "" : networks}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="startup_costs"
								className="form-control"
								value={startup_costs === null ? "" : startup_costs}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="operational_costs"
								className="form-control"
								value={operational_costs === null ? "" : operational_costs}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="finance_plan"
								className="form-control"
								value={finance_plan === null ? "" : finance_plan}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="business_plan"
								className="form-control"
								value={business_plan === null ? "" : business_plan}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="implementation_plan"
								className="form-control"
								value={implementation_plan === null ? "" : implementation_plan}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="key_milestones"
								className="form-control"
								value={key_milestones === null ? "" : key_milestones}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="monitoring_and_evaluation"
								className="form-control"
								value={
									monitoring_and_evaluation === null
										? ""
										: monitoring_and_evaluation
								}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="who_we_are"
								className="form-control"
								value={who_we_are === null ? "" : who_we_are}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="vision_and_mission"
								className="form-control"
								value={vision_and_mission === null ? "" : vision_and_mission}
								onChange={(e) => onChange(e)}
							/>
							<input
								type="text"
								name="track_record"
								className="form-control"
								value={track_record === null ? "" : track_record}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-dismiss="modal"
								onClick={() => EditProposalText(entry.project_id)}
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



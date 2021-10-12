/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

const EditProposal = ({ proposal }) => {
	const [data, setData] = useState(proposal);

	const onChangeHandler = (e) => {
        setData(e.target.value);
		// return setData((info) => ({
		// 	...info,
		// 	[e.target.name]: e.target.value,
		// }));
	};

	const EditProposalText = async (id) => {
		try {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			myHeaders.append("token", localStorage.token);

			const body = data;

			const response = await fetch(`/api/student/projects/proposal/${id}`, {
				method: "PUT",
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			const parseResponse = await response.json();
			console.log(parseResponse);
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
				data-target={`#id${proposal[0].project_id}`}
			>
				Open Project
			</button>
			{data.map((entry, idx) => {
				return (
					<div className="modal" id={`id${entry.project_id}`} key={idx}>
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
										value={entry.project_name}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="problem_statement"
										value={entry.problem_statement}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="proposed_action"
										value={entry.proposed_action}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="expected_result"
										value={entry.expected_result}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="social_returns"
										value={entry.social_returns}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="key_activities"
										value={entry.key_activities}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="key_resources"
										value={entry.key_resources}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="team"
										value={entry.team}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="client_profile"
										value={entry.client_profile}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="client_relationships"
										value={entry.client_relationships}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="client_channels"
										value={entry.client_channels}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="key_partners"
										value={entry.key_partners}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="stakeholders"
										value={entry.stakeholders}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="networks"
										value={entry.networks}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="startup_costs"
										value={entry.startup_costs}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="operational_costs"
										value={entry.operational_costs}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="finance_plan"
										value={entry.finance_plan}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="business_plan"
										value={entry.business_plan}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="implementation_plan"
										value={entry.implementation_plan}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="key_milestones"
										value={entry.key_milestones}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="monitoring_and_evaluation"
										value={entry.monitoring_and_evaluation}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="who_we_are"
										value={entry.who_we_are}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="vision_and_mission"
										value={entry.vision_and_mission}
										onChange={(e) => onChangeHandler(e)}
									/>
									<input
										type="text"
										className="form-control"
										name="track_record"
										value={entry.track_record}
										onChange={(e) => onChangeHandler(e)}
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
				);
			})}
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

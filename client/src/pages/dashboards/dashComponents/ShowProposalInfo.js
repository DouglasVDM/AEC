/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ShowProposalInfo = ({ setPage, proposal }) => {
	console.log(proposal);
	const [data, setData] = useState({
		project_name: "",
		problem_statement: "",
		proposed_action: "",
		expected_result: "",
		social_returns: "",
		key_activities: "",
		key_resources: "",
		team: "",
		client_profile: "",
		client_relationships: "",
		client_channels: "",
		key_partners: "",
		stakeholders: "",
		networks: "",
		startup_costs: "",
		operational_costs: "",
		finance_plan: "",
		business_plan: "",
		implementation_plan: "",
		key_milestones: "",
		monitoring_and_evaluation: "",
		who_we_are: "",
		vision_and_mission: "",
		track_record: "",
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
	} = data;

	const onChangeHandler = (e) => {
		return setData((info) => ({
			...info,
			[e.target.name]: e.target.value,
		}));
	};

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

			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#myModal"
			>
				Open Project
			</button>

			<div className="modal" id="myModal">
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
								value={project_name}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="problem_statement"
								value={problem_statement}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="proposed_action"
								value={proposed_action}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="expected_result"
								value={expected_result}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="social_returns"
								value={social_returns}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="key_activities"
								value={key_activities}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="key_resources"
								value={key_resources}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="team"
								value={team}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="client_profile"
								value={client_profile}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="client_relationships"
								value={client_relationships}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="client_channels"
								value={client_channels}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="key_partners"
								value={key_partners}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="stakeholders"
								value={stakeholders}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="networks"
								value={networks}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="startup_costs"
								value={startup_costs}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="operational_costs"
								value={operational_costs}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="finance_plan"
								value={finance_plan}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="business_plan"
								value={business_plan}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="implementation_plan"
								value={implementation_plan}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="key_milestones"
								value={key_milestones}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="monitoring_and_evaluation"
								value={monitoring_and_evaluation}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="who_we_are"
								value={who_we_are}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="vision_and_mission"
								value={vision_and_mission}
								onChange={(e) => onChangeHandler(e)}
							/>
							<input
								type="text"
								className="form-control"
								name="track_record"
								value={track_record}
								onChange={(e) => onChangeHandler(e)}
							/>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-dismiss="modal"
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

export default ShowProposalInfo;

{
	/* <div className="show-proposal-container">
				{proposal.map((info, idx) => {
					return (
						<div key={idx}>
							<h5>The Project</h5>
							<div className="proposal-info">
								<p>{info.project_name}</p>
							</div>
							<h5>Problem Statement</h5>
							<div className="proposal-info">
								<p>{info.problem_statement}</p>
							</div>
							<h5>Proposed Action</h5>
							<div className="proposal-info">
								<p>{info.proposed_action}</p>
							</div>
							<h5>Expected Result</h5>
							<div className="proposal-info">
								<p>{info.expected_result}</p>
							</div>
							<h5>Social Returns</h5>
							<div className="proposal-info">
								<p>{info.social_returns}</p>
							</div>
							<h5>Key Activities</h5>
							<div className="proposal-info">
								<p>{info.key_activities}</p>
							</div>
							<h5>Key Resources</h5>
							<div className="proposal-info">
								<p>{info.key_resources}</p>
							</div>
							<h5>The Team</h5>
							<div className="proposal-info">
								<p>{info.team}</p>
							</div>
							<h5>Client Profile</h5>
							<div className="proposal-info">
								<p>{info.client_profile}</p>
							</div>
							<h5>Client Relationships</h5>
							<div className="proposal-info">
								<p>{info.client_relationships}</p>
							</div>
							<h5>Client_Channels</h5>
							<div className="proposal-info">
								<p>{info.client_channels}</p>
							</div>
							<h5>Key partners</h5>
							<div className="proposal-info">
								<p>{info.key_partners}</p>
							</div>
							<h5>Stakeholders</h5>
							<div className="proposal-info">
								<p>{info.stakeholders}</p>
							</div>
							<h5>Networks</h5>
							<div className="proposal-info">
								<p>{info.networks}</p>
							</div>
							<h5>Start Up Cost</h5>
							<div className="proposal-info">
								<p>{info.startup_cost}</p>
							</div>
							<h5>Operational Cost</h5>
							<div className="proposal-info">
								<p>{info.operational_cost}</p>
							</div>
							<h5>Finance Plan</h5>
							<div className="proposal-info">
								<p>{info.finance_plan}</p>
							</div>
							<h5>Business Plan</h5>
							<div className="proposal-info">
								<p>{info.business_plan}</p>
							</div>
							<h5>Implementation Plan</h5>
							<div className="proposal-info">
								<p>{info.implementation_plan}</p>
							</div>
							<h5>Key Milestones</h5>
							<div className="proposal-info">
								<p>{info.key_milestones}</p>
							</div>
							<h5>Monitoring And Evaluation</h5>
							<div className="proposal-info">
								<p>{info.monitoring_and_evaluation}</p>
							</div>
							<h5>Who We Are</h5>
							<div className="proposal-info">
								<p>{info.who_we_are}</p>
							</div>
							<h5>Vision And Mission</h5>
							<div className="proposal-info">
								<p>{info.vision_and_mission}</p>
							</div>
							<h5>Track_Record</h5>
							<div className="proposal-info">
								<p>{info.track_record}</p>
							</div>
						</div>
						</div>
					);
				})} */
}

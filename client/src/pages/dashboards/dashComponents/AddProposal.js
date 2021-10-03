import { useState } from "react";
import StepOne from "./AddProposalSteps/StepOne";
import StepTwo from "./AddProposalSteps/StepTwo";
import StepThree from "./AddProposalSteps/StepThree";
import StepFour from "./AddProposalSteps/StepFour";
import StepFive from "./AddProposalSteps/StepFive";
import StepSix from "./AddProposalSteps/StepSix";
import StepSeven from "./AddProposalSteps/StepSeven";
import StepEight from "./AddProposalSteps/StepEight";
import StepNine from "./AddProposalSteps/StepNine";
import Box from "@mui/material/Box";


const AddProposal = () => {
	const [data, setData] = useState({
		proposal_name: "",
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

	const [currentStep, setCurrentstep] = useState(0);

	// API REQUEST
	const makeApiRequest = (formData) => {
		console.log("Form Submitted", formData);
	};

	// FORWARD 1 STEP
	const handleNextStep = (newData, finalStep = false) => {
		setData((previousState) => ({ ...previousState, ...newData }));

		if (finalStep) {
			makeApiRequest(data);
			return;
		}

		setCurrentstep((previousStep) => previousStep + 1);
	};

	// BACK 1 STEP
	const handlePreviousStep = (newData) => {
		setData((previousState) => ({ ...previousState, ...newData }));
		setCurrentstep((previousState) => previousState - 1);
	};

	const steps = [
		<StepOne next={handleNextStep} data={data} steps={currentStep + 1} />,
		<StepTwo next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
		<StepThree next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
		<StepFour next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
		<StepFive next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
		<StepSix next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
		<StepSeven next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
		<StepSeven next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
		<StepEight next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
		<StepNine next={handleNextStep} previousStep={handlePreviousStep} data={data} />,
	];

	console.log("data", data);

	return (
		<div className="App">
			<Box
				sx={{
					mx: "auto",
					borderStyle: "outset",
					// bgcolor: 'primary.main',
					color: "#kkk",
					width: "auto",
					p: 1,
					m: 1,
					borderRadius: 1,
					textAlign: "center",
				}}
			>
				The Project Proposal
			</Box>
			{steps[currentStep]}
		</div>
	);
};
export default AddProposal;
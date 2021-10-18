import { Router } from "express";
import pool from "./db.js";
import authorization from "./jwtMiddleware/authorization";

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Welcome to Stellenbosch University" });
});

// ADD NEW PROJECT
router.post("/project", async (req, res) => {
	try {
		const {
			project_name,
			problem_statement,
			proposed_action,
			expected_result,
		} = req.body;
		const newProject = await pool.query(
			"INSERT INTO projects (project_name, problem_statement, proposed_action, expected_result) VALUES ($1,$2,$3,$4) RETURNING *",
			[project_name, problem_statement, proposed_action, expected_result]
		);
		res.json({ projects: newProject });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// GET ALL PROJECT
router.get("/project", async (req, res) => {
	try {
		const projects = await pool.query("SELECT * FROM project_proposal");
		res.json(projects.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// CREATE NEW PROJECT PROPOSAL STEP 1
router.post("/student/projects", authorization, async (req, res) => {
	const {
		project_name,
		problem_statement,
		proposed_action,
		expected_result,
		project_status = "await feedback",
	} = req.body;
	try {
		await pool.query(
			"INSERT INTO projects (student_id, project_name, problem_statement, proposed_action, expected_result, project_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			[
				req.user,
				project_name,
				problem_statement,
				proposed_action,
				expected_result,
				project_status,
			]
		);
		res.json({ status: "success", message: "Project proposal added!" });
	} catch (error) {
		console.error(error.message);
	}
});

// GET PROJECT PROPOSAL
router.get("/student/projects/proposal", authorization, async (req, res) => {
	try {
		const result = await pool.query(
			"SELECT * FROM project_proposal WHERE student_id = $1",
			[req.user]
		);
		res.json(result.rows);
	} catch (error) {
		console.error(error.message);
	}
});

//GET PROJECT BY PROJECT ID
router.get(
	"/student/projects/proposal/:projectId",
	authorization,
	async (req, res) => {
		try {
			const { projectId } = req.params;

			const result = await pool.query(
				"SELECT * FROM project_proposal WHERE project_id = $1",
				[projectId]
			);

			res.json(result.rows);
		} catch (error) {
			console.error(error.message);
		}
	}
);

// CREATE NEW PROJECT PROPOSAL ALL STEPS
router.post("/student/projects/proposal", authorization, async (req, res) => {
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
		project_status = "await feedback",
	} = req.body;
	try {
		await pool.query(
			"INSERT INTO project_proposal (project_name, problem_statement, proposed_action, expected_result, social_returns, key_activities, key_resources, team, client_profile, client_relationships, client_channels, key_partners,	stakeholders, networks, startup_costs, operational_costs, finance_plan, business_plan, implementation_plan, key_milestones,	monitoring_and_evaluation, who_we_are, vision_and_mission, track_record, project_status, student_id) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25, $26) RETURNING *",
			[
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
				project_status,
				req.user,
			]
		);
		res.json({
			status: "success",
			message: "Project proposal all steps added!",
		});
	} catch (error) {
		console.error(error.message);
	}
});

// EDIT PROJECT PROPOSAL
router.put(
	"/student/projects/proposal/:projectId",
	authorization,
	async (req, res) => {
		const { projectId } = req.params;
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
		} = req.body;

		try {
			const getProjectProposal = await pool.query(
				"SELECT * FROM project_proposal WHERE project_id = $1 AND student_id = $2",
				[projectId, req.user]
			);
			let proposal = getProjectProposal.rows[0];

			if (getProjectProposal.rowCount > 0) {
				proposal.project_name = project_name ?
					(await pool.query(
						"UPDATE project_proposal SET project_name = $1 WHERE project_id = $2 AND student_id = $3",
						[project_name, projectId, req.user]
					)) : proposal.project_name;
				proposal.problem_statement = problem_statement ?
					(await pool.query(
						"UPDATE project_proposal SET problem_statement = $1 WHERE project_id = $2 AND student_id = $3",
						[problem_statement, projectId, req.user]
					)): proposal.problem_statement;
				proposal.proposed_action = proposed_action ?
					(await pool.query(
						"UPDATE project_proposal SET proposed_action = $1 WHERE project_id = $2 AND student_id = $3",
						[proposed_action, projectId, req.user]
					)) : proposal.proposed_action;
				proposal.expected_result = expected_result ?
					(await pool.query(
						"UPDATE project_proposal SET expected_result = $1 WHERE project_id = $2 AND student_id = $3",
						[expected_result, projectId, req.user]
					)) : proposal.expected_result;
				proposal.social_returns = social_returns ?
					(await pool.query(
						"UPDATE project_proposal SET social_returns = $1 WHERE project_id = $2 AND student_id = $3",
						[social_returns, projectId, req.user]
					)) : proposal.social_returns;
				proposal.key_activities = key_activities ?
					(await pool.query(
						"UPDATE project_proposal SET key_activities = $1 WHERE project_id = $2 AND student_id = $3",
						[key_activities, projectId, req.user]
					)) : proposal.key_activities;
				proposal.key_resources = key_resources ?
					(await pool.query(
						"UPDATE project_proposal SET key_resources = $1 WHERE project_id = $2 AND student_id = $3",
						[key_resources, projectId, req.user]
					)) : proposal.key_resources;
				proposal.team = team ?
					(await pool.query(
						"UPDATE project_proposal SET team = $1 WHERE project_id = $2 AND student_id = $3",
						[team, projectId, req.user]
					)) : proposal.team;
				proposal.client_profile = client_profile ?
					(await pool.query(
						"UPDATE project_proposal SET client_profile = $1 WHERE project_id = $2 AND student_id = $3",
						[client_profile, projectId, req.user]
					)) : proposal.client_profile;
				proposal.client_relationships = client_relationships ?
					(await pool.query(
						"UPDATE project_proposal SET client_relationships = $1 WHERE project_id = $2 AND student_id = $3",
						[client_relationships, projectId, req.user]
					)) : proposal.client_relationships;
				proposal.client_channels = client_channels ?
					(await pool.query(
						"UPDATE project_proposal SET client_channels = $1 WHERE project_id = $2 AND student_id = $3",
						[client_channels, projectId, req.user]
					)) : proposal.client_channels;
				proposal.key_partners = key_partners ?
					(await pool.query(
						"UPDATE project_proposal SET key_partners = $1 WHERE project_id = $2 AND student_id = $3",
						[key_partners, projectId, req.user]
					)) : proposal.key_partners;
				proposal.stakeholders = stakeholders ?
					(await pool.query(
						"UPDATE project_proposal SET stakeholders = $1 WHERE project_id = $2 AND student_id = $3",
						[stakeholders, projectId, req.user]
					)) : proposal.stakeholders;
				proposal.networks = networks ?
					(await pool.query(
						"UPDATE project_proposal SET networks = $1 WHERE project_id = $2 AND student_id = $3",
						[networks, projectId, req.user]
					)) : proposal.networks;
				proposal.startup_costs = startup_costs ?
					(await pool.query(
						"UPDATE project_proposal SET startup_costs = $1 WHERE project_id = $2 AND student_id = $3",
						[startup_costs, projectId, req.user]
					)) : proposal.startup_costs;
				proposal.operational_costs = operational_costs ?
					(await pool.query(
						"UPDATE project_proposal SET operational_costs = $1 WHERE project_id = $2 AND student_id = $3",
						[operational_costs, projectId, req.user]
					)) : proposal.operational_costs;
				proposal.finance_plan = finance_plan ?
					(await pool.query(
						"UPDATE project_proposal SET finance_plan = $1 WHERE project_id = $2 AND student_id = $3",
						[finance_plan, projectId, req.user]
					)) : proposal.finance_plan;
				proposal.business_plan = business_plan ?
					(await pool.query(
						"UPDATE project_proposal SET business_plan = $1 WHERE project_id = $2 AND student_id = $3",
						[business_plan, projectId, req.user]
					)) : proposal.business_plan;
				proposal.implementation_plan = implementation_plan ?
					(await pool.query(
					"UPDATE project_proposal SET implementation_plan = $1 WHERE project_id = $2 AND student_id = $3",
					[implementation_plan, projectId, req.user]
					)) : proposal.implementation_plan;
				proposal.key_milestones = key_milestones ?
					(await pool.query(
						"UPDATE project_proposal SET key_milestones = $1 WHERE project_id = $2 AND student_id = $3",
						[key_milestones, projectId, req.user]
					)) : proposal.key_milestones;
				proposal.monitoring_and_evaluation = monitoring_and_evaluation ?
					(await pool.query(
					"UPDATE project_proposal SET monitoring_and_evaluation = $1 WHERE project_id = $2 AND student_id = $3",
					[monitoring_and_evaluation, projectId, req.user]
					)) : proposal.monitoring_and_evaluation;
				proposal.who_we_are = who_we_are ?
					(await pool.query(
						"UPDATE project_proposal SET who_we_are = $1 WHERE project_id = $2 AND student_id = $3",
						[who_we_are, projectId, req.user]
					)) : proposal.who_we_are;
				proposal.vision_and_mission = vision_and_mission ?
					(await pool.query(
						"UPDATE project_proposal SET vision_and_mission = $1 WHERE project_id = $2 AND student_id = $3",
						[vision_and_mission, projectId, req.user]
					)) : proposal.vision_and_mission;
				proposal.track_record = track_record ?
					(await pool.query(
						"UPDATE project_proposal SET track_record = $1 WHERE project_id = $2 AND student_id = $3",
						[track_record, projectId, req.user]
					)) : proposal.track_record;
			}
			res.json({
				status: "success",
				message: "Project proposal Updated!",
			});
		} catch (error) {
			console.error(error.message);
		}
	}
);



// ADD NEW COMPETITION
router.post("/competition", authorization, async (req, res) => {
	try {
		const { comp_title, comp_desc, contact_pers } = req.body;
		const newCompetition = await pool.query(
			"INSERT INTO competitions (admin_id, comp_title, comp_desc, contact_pers) VALUES ($1, $2, $3, $4) RETURNING *",
			[req.user, comp_title, comp_desc, contact_pers]
		);
		res.json({ competitions: newCompetition });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// GET ALL COMPETITIONS
router.get("/competition", async (req, res) => {
	try {
		const competitions = await pool.query("SELECT * FROM competitions");
		res.json(competitions.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.get("/students_profile/:student_id", async (req, res) => {
	const { student_id } = req.params;
	try {
		const profile = await pool.query(
			"SELECT * FROM students_profile WHERE student_id = $1",
			[student_id]
		);
		if (profile.rowCount > 0) {
			res.status(200).json(profile.rows[0]);
		} else {
			res.status(404).json({
				message: "No information found for the student",
				body: profile,
			});
		}
	} catch (error) {
		res.status(500).json({
			message: "Couldn't fetch the student profile at the moment",
			error: error,
		});
	}
});

router.post("/students_profile", async (req, res) => {
	const {
		student_id,
		student_number,
		student_phone,
		student_bio,
		student_img,
		student_active,
	} = req.body;

	try {
		const profile = await pool.query(
			"SELECT * FROM students_profile WHERE student_id = $1",
			[student_id]
		);
		if (profile.rowCount > 0) {
			await pool.query(
				"UPDATE students_profile SET student_number = $1, student_phone = $2, student_bio = $3, student_img = $4, student_active = $5 WHERE student_id = $6",
				[
					student_number,
					student_phone,
					student_bio,
					student_img,
					student_active,
					student_id,
				]
			);

			res.status(200).json({ message: "Ok" });
		} else {
			await pool.query(
				"INSERT INTO students_profile (student_id, student_number, student_phone, student_bio, student_img, student_active) VALUES ($1, $2, $3, $4, $5, $6)",
				[
					student_id,
					student_number,
					student_phone,
					student_bio,
					student_img,
					student_active,
				]
			);

			res.status(200).json({ message: "Ok" });
		}
	} catch (error) {
		res.status(500).json({
			message: "Couldn't fetch the student profile at the moment",
			error: error,
		});
	}
});

router.put("/students_profile", async (req, res) => {
	const {
		student_id,
		student_number,
		student_phone,
		student_bio,
		student_img,
		student_active,
	} = req.body;
	console.log(req.body);
	try {
		await pool.query(
			"UPDATE students_profile SET student_number = $1, student_phone = $2, student_bio = $3, student_img = $4, student_active = $5 WHERE student_id = $6",
			[
				student_number,
				student_phone,
				student_bio,
				student_img,
				student_active,
				student_id,
			]
		);

		res.status(200).json({ message: "Ok" });
	} catch (error) {
		res.status(500).json({
			message: "Couldn't update the student profile at the moment",
			error: error,
		});
	}
});

// FEEDBACK ROUTES

// GIVE FEEDBACK
router.post("/mentor/feedback/:projectId", authorization, async (req, res) => {
	try {
		const { projectId } = req.params;
		const { feedback, project_status = "feedback given" } = req.body;

		const foundProposal = await pool.query(
			"SELECT * FROM project_proposal WHERE project_id = $1",
			[projectId]
		);

		if (foundProposal) {
			await pool.query(
				"INSERT INTO feedback (project_id, mentor_id, feedback) VALUES ($1, $2, $3) RETURNING *",
				[projectId, req.user, feedback]
			);
			res.json("Feedback added successfully!");
		}

		const foundFeedback = await pool.query(
			"SELECT feedback FROM feedback WHERE project_id = $1",
			[projectId]
		);

		if (foundProposal && foundFeedback) {
			await pool.query("UPDATE project_proposal SET project_status = $1", [
				project_status,
			]);
		}
	} catch (error) {
		console.error(error.message);
	}
});

// GET FEEDBACK
router.get("/student/feedback", authorization, async (req, res) => {
	try {
		const results = await pool.query(
			"SELECT mentors.mentor_name, project_proposal.project_name, feedback.feedback FROM students LEFT JOIN project_proposal ON project_proposal.student_id = students.student_id INNER JOIN feedback ON project_proposal.project_id = feedback.project_id INNER JOIN mentors ON mentors.mentor_id = feedback.mentor_id WHERE students.student_id = $1",
			[req.user]
		);

		res.json(results.rows);
	} catch (error) {
		console.error(error.message);
	}
});

export default router;

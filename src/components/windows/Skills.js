import React from "react";
import AddButton from "../AddButton";

const Skills = props =>
{
	const handleChange = (key, e) => props.skillsFns.setSkills(key, e.target.value);

	return(
		<div>
			<div className="form-input-box">
				<label htmlFor="job">Position/Job</label>
				<input type="text" id="job" value={props.job} placeholder="Web Developer" onChange={(e) => props.skillsFns.setJob(e.target.value)}></input>
			</div>
			<h1>Skills</h1>
			<div className="skills">
				{props.skills.map
				(
					skill =>
						<div key={skill.key} style={{display: "flex", alignItems: "center"}}>
							<input value={skill.name} onChange={(e) => handleChange(skill.key ,e)}></input>
							<span className="material-icons" onClick={() => props.skillsFns.removeSkill("skills", skill.key)}>delete</span>
						</div>
				)}
				<AddButton property={props.skills} length={7} action={props.skillsFns.addSkill}/>
			</div>
		</div>
	)
}

export default Skills;

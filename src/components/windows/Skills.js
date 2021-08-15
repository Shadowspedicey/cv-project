import React from "react";
import AddButton from "../AddButton";

class Skills extends React.Component
{
	constructor()
	{
		super()

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (key, e) =>
	{
		this.props.setSkills(key, e.target.value)
	}

	render()
	{
		return(
			<div>
				<div className="form-input-box">
					<label htmlFor="job">Position/Job</label>
					<input type="text" id="job" value={this.props.job} placeholder="Web Developer" onChange={(e) => this.props.setJob(e.target.value)}></input>
				</div>
				<h1>Skills</h1>
				<div className="skills">
					{this.props.skills.map
					(
						skill =>
							<div key={skill.key} style={{display: "flex", alignItems: "center"}}>
								<input value={skill.name} onChange={(e) => this.handleChange(skill.key ,e)}></input>
								<span className="material-icons" onClick={() => this.props.removeSkill(skill.key)}>delete</span>
							</div>
					)}
					<AddButton property={this.props.skills} length={7} action={this.props.addSkill}/>
				</div>
			</div>
		)
	}
}

export default Skills;

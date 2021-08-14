import React from "react";

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
				{this.props.skills.map(skill => <input key={skill.key} value={skill.name} onChange={(e) => this.handleChange(skill.key ,e)}></input>)}
				</div>
				<div className="skill-add" onClick={this.props.addSkill}>+</div>
			</div>
		)
	}
}

export default Skills;

import React from "react";
import Personal from "./windows/Personal";
import Education from "./windows/Education";
import Skills from "./windows/Skills";
import Work from "./windows/Work";

class CVCreator extends React.Component
{
	constructor()
	{
		super()

		this.state =
		{
			window:
			{
				personal: true,
				education: false,
				skills: false,
				work: false,
			}
		}

		this.changeWindow = this.changeWindow.bind(this);
	}

	changeWindow = window => this.setState
	(
		{
			window:
			{
				personal: false,
				education: false,
				skills: false,
				work: false,
				[window]: true,
			}
		}
	)

	render()
	{
		return(
			<div className="cv-creator">
				<div className="buttons-container">
					<div
					className={`button left left-corner ${this.state.window.personal ? null : "unselected"}`}
					onClick={() => this.changeWindow("personal")}>
						Personal Info
					</div>

					<div
					className={`button middle ${this.state.window.education ? null : "unselected"}`}
					onClick={() => this.changeWindow("education")}>
						Education
					</div>
					
					<div
					className={`button middle right ${this.state.window.skills ? null : "unselected"}`}
					onClick={() => this.changeWindow("skills")}>
						Skills
					</div>

					<div
					className={`button right right-corner ${this.state.window.work ? null : "unselected"}`}
					onClick={() => this.changeWindow("work")}>
						Work Experience
					</div>
				</div>
				{
					this.state.window.personal 
					? <Personal setPersonalInfo={this.props.setPersonalInfo} personalInfo={this.props.personalInfo}/> 
					: this.state.window.education
					? <Education/>
					: this.state.window.skills
					? <Skills setJob={this.props.setJob} addSkill={this.props.addSkill} setSkills={this.props.setSkills} job={this.props.job} skills={this.props.skills}/>
					: this.state.window.work
					? <Work/>
					: null
				}
			</div>
		)
	}
}

export default CVCreator;

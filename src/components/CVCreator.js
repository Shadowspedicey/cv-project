import React from "react";
import Personal from "./windows/Personal";
import Education from "./windows/Education";
import Skills from "./windows/Skills";
import Work from "./windows/Work";
import Export from "./windows/Export";

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
				export: false,
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
				export: false,
				[window]: true,
			}
		}
	)

	render()
	{
		return(
			<div className="cv-creator"
			style={this.props.info.switchMenu.on ? this.props.info.switchMenu.menus.cvCreator ? null : {display: "none"} : null}>
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
					className={`button right ${this.state.window.work ? null : "unselected"}`}
					onClick={() => this.changeWindow("work")}>
						Work Experience
					</div>

					<div
					className={`button right right-corner ${this.state.window.export ? null : "unselected"}`}
					onClick={() => this.changeWindow("export")}>
						Export
					</div>
				</div>
				{
					this.state.window.personal 
					? <Personal setPersonalInfo={this.props.personalFns.setPersonalInfo} personalInfo={this.props.info.personalInfo}/> 
					: this.state.window.education
					? <Education educationFns={this.props.educationFns} education={this.props.info.education}/>
					: this.state.window.skills
					? <Skills skillsFns={this.props.skillsFns} job={this.props.info.job} skills={this.props.info.skills}/>
					: this.state.window.work
					? <Work workFns={this.props.workFns} works={this.props.info.work}/>
					: this.state.window.export
					? <Export/>
					: null
				}
			</div>
		)
	}
}

export default CVCreator;

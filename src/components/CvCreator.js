import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Work from "./Work";

class CvCreator extends React.Component
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
					className={`button left ${this.state.window.personal ? null : "unselected"}`}
					onClick={() => this.changeWindow("personal")}
					>Personal Info</div>

					<div
					className={`button middle ${this.state.window.education ? null : "unselected"}`}
					onClick={() => this.changeWindow("education")}
					>Education</div>
					
					<div
					className={`button right ${this.state.window.work ? null : "unselected"}`}
					onClick={() => this.changeWindow("work")}
					>Work Experience</div>
				</div>
				{
					this.state.window.personal 
					? <Personal setPersonalInfo={this.props.setPersonalInfo} personalInfo={this.props.personalInfo}/> 
					: this.state.window.education
					? <Education/>
					: this.state.window.work
					? <Work/>
					: null
				}
			</div>
		)
	}
}

export default CvCreator;

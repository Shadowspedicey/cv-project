import React from "react";
import Personal from "./Personal";

class CvCreator extends React.Component
{
	render()
	{
		return(
			<div className="cv-creator">
				<div className="buttons-container">
					<div className="button left">Personal Info</div>
					<div className="button middle unselected">Education</div>
					<div className="button right unselected">Work Experience</div>
				</div>
				<Personal setPersonalInfo={this.props.setPersonalInfo} personalInfo={this.props.personalInfo}/>
			</div>
		)
	}
}

export default CvCreator;

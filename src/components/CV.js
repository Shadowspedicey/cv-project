import React from "react";
import CVBrief from "./CVBrief";

class CV extends React.Component
{
	render()
	{
		return(
			<div className="CV">
				<CVBrief personalInfo={this.props.info.personalInfo} skills={this.props.info.skills}/>
				<div className="cv-info">
					<div className="cv-header">
						<h1>{this.props.info.personalInfo.name}</h1>
						<h2>{this.props.info.job}</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default CV;

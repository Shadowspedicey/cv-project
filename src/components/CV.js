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
					<div className="cv-body">
						<div className="cv-description-box">
							<h1>Education</h1>
							{
								this.props.info.education.map
								(edu =>
									<div className="cv-education" key={edu.key}>
										<h4>{edu.year}</h4>
										<h2>{edu.degree}</h2>
										<h3>{edu.titleOfStudy}</h3>
										<h3>{edu.school}</h3>
									</div>
								)
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CV;

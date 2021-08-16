import React from "react";
import CVBrief from "./CVBrief";

class CV extends React.Component
{
	render()
	{
		return(
			<div className="CV"
			style={this.props.info.switchMenu.on ? this.props.info.switchMenu.menus.cv ? {display: "grid"} : {display: "none"} : null}>
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
						<div className="cv-description-box">
							<h1>Work Experience</h1>
							{
								this.props.info.work.map
								(_work =>
									<div className="cv-work" key={_work.key}>
										<h2>{_work.position}</h2>
										<h4>{_work.yearFrom}-{_work.yearTo}</h4>
										<h3>{_work.company}</h3>
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

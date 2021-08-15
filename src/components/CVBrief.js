import React from "react";

class CVBrief extends React.Component
{
	render()
	{
		return(
			<div className="cv-brief">
					<div className="cv-photo">
						<img src={this.props.personalInfo.photo} alt=""></img>
					</div>

					<div className="cv-info-box cv-contact">
						<h2>CONTANT</h2>
						<ul>
							<li>
								<span className="material-icons">phone</span>
								<span>+({this.props.personalInfo.phoneNumber.area}){this.props.personalInfo.phoneNumber.number}</span>
							</li>
							<li>
								<span className="material-icons">email</span>
								<span className="cv-email">{this.props.personalInfo.email}</span>
							</li>
							<li>
								<span className="material-icons">place</span>
								<span>
									{this.props.personalInfo.residence.city},
									{` ${this.props.personalInfo.residence.country}`}
								</span>
							</li>
						</ul>
					</div>

					<div className="cv-info-box cv-skills">
						<h2>SKILLS</h2>
						<ul>
							{this.props.skills.map(skill => <li key={skill.key}>{skill.name}</li>)}
						</ul>
					</div>

					<div className="refrence-info">
						<div>
							<h2>REFRENCE</h2>
							<h3>Ahmed Khaled</h3>
							<h4>Web Developer</h4>
						</div>
					</div>
				</div>
		)
	}
}

export default CVBrief;

import React from "react";
import AddButton from "../AddButton";

class Education extends React.Component
{

	constructor()
	{
		super();

		this.preventInput = this.preventInput.bind(this);
	}

	preventInput = (e, maxLength) =>
	{
		if (e.target.value.length === maxLength && String.fromCharCode(e.which).match(/^\d$/))
			return e.preventDefault();
	}

	render()
	{
		return(
			<div className="education-container">
				{
					this.props.education.map
					(edu =>
						<div className="education" key={edu.key}>
							<span className="material-icons" onClick={() => this.props.educationFns.removeEducation("education", edu.key)}>delete</span>
							<div className="form-input-box" style={{flexDirection: "row", marginBottom: "1rem"}}>
								<div style={{width: "50%", marginRight: "1rem"}}>
									<label htmlFor="degree">Degree</label>
									<input type="text" id="degree" value={edu.degree} placeholder="Bachelor's Degree" onChange={(e) => this.props.educationFns.setEducation(edu.key, "degree", e.target.value)}></input>
								</div>
								<div style={{width: "50%"}}>
									<label htmlFor="titleOfStudy">Title of Study</label>
									<input type="text" id="titleOfStudy" value={edu.titleOfStudy} placeholder="Computer Science" onChange={(e) => this.props.educationFns.setEducation(edu.key, "titleOfStudy", e.target.value)}></input>
								</div>
							</div>
							<div className="form-input-box" style={{flexDirection: "row"}}>
								<div style={{width: "15%", marginRight: "1rem"}}>
									<label htmlFor="year">Year</label>
									<input type="number" id="year" value={edu.year} placeholder="2005" onChange={(e) => this.props.educationFns.setEducation(edu.key, "year", e.target.value)} onKeyDown={(e) => this.preventInput(e, 4)}></input>
								</div>
								<div style={{width: "100%"}}>
									<label htmlFor="school">School</label>
									<input type="text" id="school" value={edu.school} placeholder="Computer Science University" onChange={(e) => this.props.educationFns.setEducation(edu.key, "school", e.target.value)}></input>
								</div>
							</div>
						</div>
					)
				}
				<AddButton property={this.props.education} length={3} action={this.props.educationFns.addEducation}/>
			</div>
		)
	}
}

export default Education;

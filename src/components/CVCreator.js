import React , {useState} from "react";
import Personal from "./windows/Personal";
import Education from "./windows/Education";
import Skills from "./windows/Skills";
import Work from "./windows/Work";
import Export from "./windows/Export";

const CVCreator = props =>
{
	const [window, setWindow] = useState
	(
		{
			personal: true,
			education: false,
			skills: false,
			work: false,
			export: false,
		}
	);

	const changeWindow = window => setWindow
	(
		{
			personal: false,
			education: false,
			skills: false,
			work: false,
			export: false,
			[window]: true,
		}
	);

	return(
		<div className="cv-creator"
		style={props.info.switchMenu.on ? props.info.switchMenu.menus.cvCreator ? null : {display: "none"} : null}>
			<div className="buttons-container">
				<div
				className={`button left left-corner ${window.personal ? null : "unselected"}`}
				onClick={() => changeWindow("personal")}>
					Personal Info
				</div>

				<div
				className={`button middle ${window.education ? null : "unselected"}`}
				onClick={() => changeWindow("education")}>
					Education
				</div>
				
				<div
				className={`button middle right ${window.skills ? null : "unselected"}`}
				onClick={() => changeWindow("skills")}>
					Skills
				</div>

				<div
				className={`button right ${window.work ? null : "unselected"}`}
				onClick={() => changeWindow("work")}>
					Work Experience
				</div>

				<div
				className={`button right right-corner ${window.export ? null : "unselected"}`}
				onClick={() => changeWindow("export")}>
					Export
				</div>
			</div>
			{
				window.personal 
				? <Personal setPersonalInfo={props.personalFns.setPersonalInfo} personalInfo={props.info.personalInfo}/> 
				: window.education
				? <Education educationFns={props.educationFns} education={props.info.education}/>
				: window.skills
				? <Skills skillsFns={props.skillsFns} job={props.info.job} skills={props.info.skills}/>
				: window.work
				? <Work workFns={props.workFns} works={props.info.work}/>
				: window.export
				? <Export/>
				: null
			}
		</div>
	)
}

export default CVCreator;

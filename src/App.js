import React, {useState} from 'react';
import uniqid from "uniqid";

import CVCreator from "./components/CVCreator";
import CV from "./components/CV";
import SwitchMenu from "./components/SwitchMenu"
import './App.css';

const App = () =>
{
	const [switchMenu, setSwitchMenu] = useState({on: false, menus: {cvCreator: true, cv: false}});
	const [personalInfo, setPersonalinfo] = useState
	(
		{
			name: "",
			photo: "https://lh3.googleusercontent.com/proxy/Tu36WTFE1ewkSeZ24YZF4InmdqrT4TqUt6xByw5_DhjS2TF7LhEGyNJcLSM73saTSYwF1CMlE9Ix_m52y5qlKcQC9Y9t4p8AZE98Dj0SHV0SXFb0_AF_dvjP0vUlTg",
			email: "",
			residence:
			{
				address: "",
				city: "",
				country: "",
			},
			phoneNumber:
			{
				area: "",
				number: "",
			}
		}
	);
	const [job, setJob] = useState("");
	const [skills, setSkills] = useState([]);
	const [education, setEducation] = useState
	(
		[
			{
				degree: "",
				titleOfStudy: "",
				year: "",
				school: "",
				key: uniqid(),
			}
		]
	);
	const [work, setWork] = useState
	(
		[
			{
				position: "",
				yearFrom: "",
				yearTo: "",
				company: "",
				key: uniqid(),
			}
		]
	);

	const state =
	{
		switchMenu,
		personalInfo,
		job,
		skills,
		education,
		work,
	}

	const switchMenuOn = () => setSwitchMenu({...switchMenu, on: true});

	const changeMenus = menu =>
	{
		setSwitchMenu
		(
			{
				...switchMenu,
				menus:
				{
					cvCreator: false,
					cv: false,
					[menu]: true,
				}
			}
		)
	};

	const setPersonalInfo = (name, input, nested) =>
	{
		if (nested)
		{
			setPersonalinfo
			(
				{
					...personalInfo,
					[nested]:
					{
						...personalInfo[nested],
						[name]: input,
					}
				}
			);
		}
		else if (name === "photo")
		{
			setPersonalinfo
			(
				{
					...personalInfo,
					photo: URL.createObjectURL(input),
				}
			);
		}
		else setPersonalinfo
		(
			{
				...personalInfo,
				[name]: input,
			}
		);

		setTimeout(() => console.log(state.personalInfo), 0);
	};

	const changeEducation = (key, name, input) =>
	{
		setEducation
		(
			education.map(edu =>
			{
				if (edu.key === key) return {...edu, [name]: input}
				else return edu;
			})
		);
		setTimeout(() => console.log(state.education), 0);
	};

	const addEducation = () =>
	{
		setEducation
		(
			[
				...education,
				{
					degree: "",
					titleOfStudy: "",
					year: "",
					school: "",
					key: uniqid(),
				}
			]
		);
	};

	const changeJob = input => setJob(input);

	const changeSkills = (key, input) =>
	{
		setSkills
		(
			skills.map(skill =>
			{
				if (skill.key === key) return skill = {...skill, "name": input}
				else return skill;
			})
		);
	}

	const addSkill = () =>
	{
		setSkills
		(
			[
				...skills,
				{"name": "", "key": uniqid()}
			]
		);
		setTimeout(() => console.log(state.skills), 0);
	};

	const removeWithKey = (array, key) =>
	{
		if (array === "education")
		{
			setEducation(education.filter(element => element.key !== key));
		}
		else if (array === "skills")
		{
			setSkills(skills.filter(element => element.key !== key));
		}
		else if (array === "work")
		{
			setWork(work.filter(element => element.key !== key));
		};
	};

	const changeWork = (key, name, input) =>
	{
		setWork
		(
			work.map(_work =>
			{
				if (_work.key === key) return {..._work, [name]: input}
				else return _work;
			})
		);
	};

	const addWork = () =>
	{
		setWork
		(
			[
				...work,
				{
					position: "",
					yearFrom: "",
					yearTo: "",
					company: "",
					key: uniqid(),
				}
			]
		);
	};

	const personalFns =
	{
		setPersonalInfo,
	}

	const educationFns =
	{
		setEducation: changeEducation,
		addEducation,
		removeEducation: removeWithKey,
	}

	const skillsFns =
	{
		setJob: changeJob,
		setSkills: changeSkills,
		addSkill,
		removeSkill: removeWithKey,
	}

	const workFns =
	{
		setWork: changeWork,
		addWork,
		removeWork: removeWithKey,
	}

	return(
		<div className="App">
			{window.innerWidth <= 1225 ? <SwitchMenu on={switchMenuOn} changeMenus={changeMenus} menus={switchMenu.menus}/> : null}
			<CVCreator 
			personalFns={personalFns} educationFns={educationFns} skillsFns={skillsFns} workFns={workFns}
			info={state}
			/>
			<CV info={state}/>
		</div>
	);
}

export default App;

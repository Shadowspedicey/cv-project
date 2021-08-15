import React from 'react';
import uniqid from "uniqid";

import CVCreator from "./components/CVCreator";
import CV from "./components/CV";
import './App.css';

class App extends React.Component
{
	constructor()
	{
		super();
		
		this.state =
		{
			personalInfo:
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
			},

			job: "",
			skills: [],

			education:
			[
				{
					degree: "",
					titleOfStudy: "",
					year: "",
					school: "",
					key: uniqid(),
				}
			],
			work:
			[
				{
					position: "",
					yearFrom: "",
					yearTo: "",
					company: "",
					key: uniqid(),
				}
			]
		}

		this.setPersonalInfo = this.setPersonalInfo.bind(this);
		this.setEducation = this.setEducation.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.setJob = this.setJob.bind(this);
		this.setSkills = this.setSkills.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.removeWithKey = this.removeWithKey.bind(this);
		this.addWork = this.addWork.bind(this);
		this.setWork = this.setWork.bind(this);
	}

	setPersonalInfo = (name, input, nested) =>
	{
		if (nested)
		{
			this.setState(prevState =>
				(
					{
						personalInfo:
						{
							...prevState.personalInfo,
							[nested]:
							{
								...prevState.personalInfo[nested],
								[name]: input,
							}
						}
					}
				));
		}
		else if (name === "photo")
		{
			this.setState(prevState =>
				(
					{
						personalInfo:
						{
							...prevState.personalInfo,
							photo: URL.createObjectURL(input),
						}
					}
				));
		}
		else this.setState(prevState =>
			(
				{
					personalInfo:
					{
						...prevState.personalInfo,
						[name]: input,
					}
				}
			));

		setTimeout(() => console.log(this.state.personalInfo), 0);
	}

	setEducation = (key, name, input) =>
	{
		this.setState(prevState =>
		(
			{
				education:
				prevState.education.map(edu =>
				{
					if (edu.key === key) return {...edu, [name]: input}
					else return edu;
				})
			}
		));
		setTimeout(() => console.log(this.state.education), 0);
	}

	addEducation = () =>
	{
		this.setState(prevState =>
		(
			{
				education:
				[
					...prevState.education,
					{
						degree: "",
						titleOfStudy: "",
						year: "",
						school: "",
						key: uniqid(),
					}
				]
			}
		))
	}

	setJob = input => this.setState({job: input});

	setSkills = (key, input) =>
	{
		this.setState(prevState =>
		(
			{		
				skills: prevState.skills.map(skill =>
				{
					if (skill.key === key) return skill = {...skill, "name": input}
					else return skill;
				})
				
			}
		));
	}

	addSkill = () =>
	{
		this.setState(prevState =>
		(
			{
				skills:
				[
					...prevState.skills,
					{"name": "", "key": uniqid()}
				]
			}
		))
		setTimeout(() => console.log(this.state.skills), 0);
	}

	removeWithKey = (array, key) =>
	{
		this.setState(prevState =>
		(
			{
				[array]: prevState[array].filter(element => element.key !== key)
			}
		));
	}

	setWork = (key, name, input) =>
	{
		this.setState(prevState =>
		(
			{
				work:
				prevState.work.map(_work =>
				{
					if (_work.key === key) return {..._work, [name]: input}
					else return _work;
				})
			}
		));
	}

	addWork = () =>
	{
		this.setState(prevState =>
			(
				{
					work:
					[
						...prevState.work,
						{
							position: "",
							yearFrom: "",
							yearTo: "",
							company: "",
							key: uniqid(),
						}
					]
				}
			))
	}

	personalFns =
	{
		setPersonalInfo: this.setPersonalInfo,
	}

	educationFns =
	{
		setEducation: this.setEducation,
		addEducation: this.addEducation,
		removeEducation: this.removeWithKey,
	}

	skillsFns =
	{
		setJob: this.setJob,
		setSkills: this.setSkills,
		addSkill: this.addSkill,
		removeSkill: this.removeWithKey,
	}

	workFns =
	{
		setWork: this.setWork,
		addWork: this.addWork,
		removeWork: this.removeWithKey,
	}

	render()
	{
		return(
			<div className="App">
				<CVCreator 
				personalFns={this.personalFns} educationFns={this.educationFns} skillsFns={this.skillsFns} workFns={this.workFns}
				info={this.state}
				/>
				<CV info={this.state}/>
			</div>
		);
	}
}

export default App;

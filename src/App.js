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
		}

		this.setPersonalInfo = this.setPersonalInfo.bind(this);
		this.setEducation = this.setEducation.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.setJob = this.setJob.bind(this);
		this.setSkills = this.setSkills.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.removeSkill = this.removeSkill.bind(this);
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

	removeSkill = key =>
	{
		this.setState(prevState =>
		(
			{
				skills: prevState.skills.filter(skill => skill.key !== key)
			}
		));
	}

	personalFns =
	{
		setPersonalInfo: this.setPersonalInfo,
	}

	educationFns =
	{
		setEducation: this.setEducation,
		addEducation: this.addEducation,
	}

	skillsFns =
	{
		setJob: this.setJob,
		setSkills: this.setSkills,
		addSkill: this.addSkill,
		removeSkill: this.removeSkill,
	}

	render()
	{
		return(
			<div className="App">
				<CVCreator 
				personalFns={this.personalFns} educationFns={this.educationFns} skillsFns={this.skillsFns}
				info={this.state}
				/>
				<CV info={this.state}/>
			</div>
		);
	}
}

export default App;

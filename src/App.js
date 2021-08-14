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
		}

		this.setPersonalInfo = this.setPersonalInfo.bind(this);
		this.setJob = this.setJob.bind(this);
		this.setSkills = this.setSkills.bind(this);
		this.addSkill = this.addSkill.bind(this);
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

	render()
	{
		return(
			<div className="App">
				<CVCreator 
				setPersonalInfo={this.setPersonalInfo} setJob={this.setJob} addSkill={this.addSkill} setSkills={this.setSkills}
				personalInfo={this.state.personalInfo} job={this.state.job} skills={this.state.skills}
				/>
				<CV info={this.state}/>
			</div>
		);
	}
}

export default App;

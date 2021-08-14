import React from 'react';

import CvCreator from "./components/CvCreator";
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
		}

		this.setPersonalInfo = this.setPersonalInfo.bind(this);
	}

	setPersonalInfo = (info, input, nested) =>
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
								[info]: input,
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
						[info]: input,
					}
				}
			));

		setTimeout(() => console.log(this.state.personalInfo), 0);
	}

	render()
	{
		return(
			<div className="App">
				<CvCreator setPersonalInfo={this.setPersonalInfo} personalInfo={this.state.personalInfo}/>
			</div>
		);
	}
}

export default App;

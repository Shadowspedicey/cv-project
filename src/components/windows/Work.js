import React from "react";
import AddButton from "../AddButton";

class Work extends React.Component
{
	constructor()
	{
		super()

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
			<div className="work-container">
				{
					this.props.works.map
					(work =>
						<div className="work" key={work.key}>
							<span className="material-icons" onClick={() => this.props.workFns.removeWork("work", work.key)}>delete</span>
								<div className="form-input-box" style={{marginBottom: "1rem"}}>
										<label htmlFor="position">Job Position</label>
										<input type="text" id="position" value={work.position} placeholder="Web Developer" onChange={(e) => this.props.workFns.setWork(work.key, "position", e.target.value)}></input>
								</div>
								<div className="form-input-box" style={{flexDirection: "row"}}>
									<div style={{width: "12.5%", marginRight: "1rem"}}>
										<label htmlFor="yearFrom">From</label>
										<input type="number" id="yearFrom" value={work.yearFrom} placeholder="2005" onChange={(e) => this.props.workFns.setWork(work.key, "yearFrom", e.target.value)} onKeyDown={(e) => this.preventInput(e, 4)}></input>
									</div>
									<div style={{width: "12.5%", marginRight: "1rem"}}>
										<label htmlFor="yearTo">To</label>
										<input type="text" id="yearTo" value={work.yearTo} placeholder="2010" onChange={(e) => this.props.workFns.setWork(work.key, "yearTo", e.target.value)} onKeyDown={(e) => this.preventInput(e, 7)}></input>
									</div>
									<div style={{width: "75%"}}>
										<label htmlFor="company">Company</label>
										<input type="text" id="company" value={work.company} placeholder="MICON" onChange={(e) => this.props.workFns.setWork(work.key, "company", e.target.value)}></input>
									</div>
								</div>
						</div>
					)
				}
				<AddButton property={this.props.works} length={3} action={this.props.workFns.addWork}/>
			</div>
		)
	}
}

export default Work;

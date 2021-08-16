import React from "react";

class Personal extends React.Component
{
	constructor()
	{
		super()

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (info, e, nested) =>	this.props.setPersonalInfo(info, e.target.value, nested);

	render()
	{
		return(
			<div>
				<form>
					<div className="form-input-box" style={{flexDirection: "row", marginBottom: "0.5rem"}}>
						<div style={{width: "70%", display: "flex", flexDirection: "column"}}>
							<label htmlFor="name">Full Name</label>
							<input type="text" id="name" value={this.props.personalInfo.name} placeholder="Full Name" onChange={(e) => this.handleChange("name", e)}></input>
						</div>
					</div>
					<div className="form-input-box">
						<div>
							<label htmlFor="photo">Your Photo:</label>
							<input type="file" id="photo" accept="image/*" onChange={(e) => this.props.setPersonalInfo("photo", e.target.files[0])}></input>
						</div>
					</div>
					<div className="form-input-box">
						<label htmlFor="email">Email Address</label>
						<input type="text" id="email" value={this.props.personalInfo.email} placeholder="email@domain.idk" onChange={(e) => this.handleChange("email", e)}></input>
					</div>
					<div>
						<div className="form-input-box">
							<label htmlFor="address">Address</label>
							<input type="text" id="address" value={this.props.personalInfo.residence.address}placeholder="El Seyouf" onChange={(e) => this.handleChange("address", e, "residence")}></input>
						</div>
						<div className="residence-container">
							<div className="form-input-box">
								<label htmlFor="city">City</label>
								<input type="text" id="city" value={this.props.personalInfo.residence.city} placeholder="Alexandria" onChange={(e) => this.handleChange("city", e, "residence")}></input>
							</div>
							<div className="form-input-box">
								<label htmlFor="country">Country</label>
								<input type="text" id="country" value={this.props.personalInfo.residence.country} placeholder="Egypt" onChange={(e) => this.handleChange("country", e, "residence")}></input>
							</div>
						</div>
					</div>
					<div style={{display: "flex"}}>
						<div className="form-input-box phone-number">
							<label htmlFor="number">Phone Number</label>
							<div>
								<label>+</label><input type="number" id="area" value={this.props.personalInfo.phoneNumber.area} placeholder="20" onChange={(e) => this.handleChange("area", e, "phoneNumber")}></input>
								<input type="number" id="number" value={this.props.personalInfo.phoneNumber.number} placeholder="1012345678" onChange={(e) => this.handleChange("number", e, "phoneNumber")}></input>
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default Personal;

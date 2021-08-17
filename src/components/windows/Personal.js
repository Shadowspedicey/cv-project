import React from "react";

const Personal = props =>
{
	const handleChange = (info, e, nested) =>	props.setPersonalInfo(info, e.target.value, nested);

	return(
		<div>
			<form>
				<div className="form-input-box" style={{flexDirection: "row", marginBottom: "0.5rem"}}>
					<div style={{width: "70%", display: "flex", flexDirection: "column"}}>
						<label htmlFor="name">Full Name</label>
						<input type="text" id="name" value={props.personalInfo.name} placeholder="Full Name" onChange={(e) => handleChange("name", e)}></input>
					</div>
				</div>
				<div className="form-input-box">
					<div>
						<label htmlFor="photo">Your Photo:</label>
						<input type="file" id="photo" accept="image/*" onChange={(e) => props.setPersonalInfo("photo", e.target.files[0])}></input>
					</div>
				</div>
				<div className="form-input-box">
					<label htmlFor="email">Email Address</label>
					<input type="text" id="email" value={props.personalInfo.email} placeholder="email@domain.idk" onChange={(e) => handleChange("email", e)}></input>
				</div>
				<div>
					<div className="form-input-box">
						<label htmlFor="address">Address</label>
						<input type="text" id="address" value={props.personalInfo.residence.address}placeholder="El Seyouf" onChange={(e) => handleChange("address", e, "residence")}></input>
					</div>
					<div className="residence-container">
						<div className="form-input-box">
							<label htmlFor="city">City</label>
							<input type="text" id="city" value={props.personalInfo.residence.city} placeholder="Alexandria" onChange={(e) => handleChange("city", e, "residence")}></input>
						</div>
						<div className="form-input-box">
							<label htmlFor="country">Country</label>
							<input type="text" id="country" value={props.personalInfo.residence.country} placeholder="Egypt" onChange={(e) => handleChange("country", e, "residence")}></input>
						</div>
					</div>
				</div>
				<div style={{display: "flex"}}>
					<div className="form-input-box phone-number">
						<label htmlFor="number">Phone Number</label>
						<div>
							<label>+</label><input type="number" id="area" value={props.personalInfo.phoneNumber.area} placeholder="20" onChange={(e) => handleChange("area", e, "phoneNumber")}></input>
							<input type="number" id="number" value={props.personalInfo.phoneNumber.number} placeholder="1012345678" onChange={(e) => handleChange("number", e, "phoneNumber")}></input>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Personal;

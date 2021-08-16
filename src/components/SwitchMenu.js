import React from "react";

class SwitchMenu extends React.Component
{

	componentDidMount = () => this.props.on();

	render()
	{
		return(
			<div className="switch-menu">
				<div className={`button left ${this.props.menus.cvCreator ? null : "unselected"} no-border`} onClick={() => this.props.changeMenus("cvCreator")}>CV Creator</div>
				<div className={`button ${this.props.menus.cv ? null : "unselected"} no-border`} onClick={() => this.props.changeMenus("cv")}>CV</div>
			</div>
		)
	}
}

export default SwitchMenu;

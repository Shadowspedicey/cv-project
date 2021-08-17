import React, {useEffect} from "react";

const SwitchMenu = props =>
{
	useEffect(() => props.on(), []);

	return(
		<div className="switch-menu">
			<div className={`button left ${props.menus.cvCreator ? null : "unselected"} no-border`} onClick={() => props.changeMenus("cvCreator")}>CV Creator</div>
			<div className={`button ${props.menus.cv ? null : "unselected"} no-border`} onClick={() => props.changeMenus("cv")}>CV</div>
		</div>
	);
}

export default SwitchMenu;

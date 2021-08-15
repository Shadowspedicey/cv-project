import React from "react";

class AddButton extends React.Component
{
	render()
	{
		return(
			<div>
				{this.props.property.length < this.props.length ? <div className="add-button" onClick={this.props.action}>+</div> : null}
			</div>
		)
	}
}

export default AddButton;

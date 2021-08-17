import React from "react";

const AddButton = props =>
<div>
	{props.property.length < props.length ? <div className="add-button" onClick={props.action}>+</div> : null}
</div>

export default AddButton;

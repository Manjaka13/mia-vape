import React from "react";

/**
 * Button component
 */

const Button = ({ className, children }) => {
	return (
		<button className={`button${className ? " " + className : ""}`}>
			{children}
		</button>
	);
};

export default Button;

import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/**
 * About card
 */

const AboutCard = ({ icon, title, button, link, children }) => (
	<article className="about-card">
		<div className="about-card__icon">
			<Icon icon={icon} />
		</div>
		<h3 className="about-card__title">{title}</h3>
		<div className="about-card__separator bg-theme"></div>
		<p className="about-card__text">{children}</p>
		<a className="about-card__link" href={link || "#0"}>
			{button}
		</a>
	</article>
);

export default AboutCard;

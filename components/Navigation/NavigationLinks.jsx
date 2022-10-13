import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LINK_LIST } from "helpers/const";
import { v4 as uuidv4 } from "uuid";

/**
 * Navigation links
 */

const mappedLinks = LINK_LIST.map((item, key) => (
	<li className="navigation-links__item" key={uuidv4()}>
		<a className="link active" href={item.link} title={item.title}>
			<Icon className="icon" icon={item.icon} /> {item.content}
		</a>
		<div className="underline"></div>
	</li>
));

const NavigationLinks = () => (
	<ul className="navigation-links">{mappedLinks}</ul>
);

export default NavigationLinks;

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LINK_LIST } from "helpers/const";
import { v4 as uuidv4 } from "uuid";

/**
 * Navigation links
 */

const mappedLinks = LINK_LIST.map((item, key) => (
	<li className="navigation-links__item" key={uuidv4()}>
		<Link href={item.link} passHref>
			<a className="link active" title={item.title}>
				<Icon className="icon" icon={item.icon} /> {item.content}
			</a>
		</Link>
		<div className="underline"></div>
	</li>
));

const NavigationLinks = () => (
	<ul className="navigation-links">{mappedLinks}</ul>
);

export default NavigationLinks;

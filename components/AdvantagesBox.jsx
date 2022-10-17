import React from "react";
import AboutCard from "components/Card/AboutCard";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { ADVANTAGES } from "helpers/const";

/**
 * Advantages component
 */

const mappedAdvantages = ADVANTAGES.map((item) => (
	<li className="advantages-box__item" key={uuidv4()}>
		<AboutCard
			title={item.title}
			icon={item.icon}
			button={item.button}
			link={item.link}
		>
			{item.description}
		</AboutCard>
	</li>
));

// { icon, title, button, link, children }
const AdvantagesBox = () => (
	<div className="advantages-box content-box section">
		<h2 className="section__title">Mia Vape, boutique professionnelle</h2>
		<ul className="advantages-box__list">{mappedAdvantages}</ul>
	</div>
);

export default AdvantagesBox;

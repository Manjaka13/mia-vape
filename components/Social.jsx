import React from "react";
import { SOCIAL_LIST } from "helpers/const";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/**
 * Social links
 */

const mappedSocial = SOCIAL_LIST.map((item) => (
	<li className="social__item" key={uuidv4()}>
		<a className="link" href={item.link} title={item.title}>
			<Icon className="icon" icon={item.icon} />
		</a>
	</li>
));

const Social = () => <ul className="social">{mappedSocial}</ul>;

export default Social;

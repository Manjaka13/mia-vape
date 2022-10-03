import React, { useState } from "react";
import Button from "components/Form/Button";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/**
 * Dropdown component
 */

const Dropdown = ({ list, className, children }) => {
	const [opened, setOpened] = useState(false);
	const [selected, setSelected] = useState(children);

	const mappedList = list.map((item) => (
		<li className="item" key={uuidv4()} onClick={() => select(item)}>
			{item}
		</li>
	));

	const select = (item) => (item ? setSelected(item) : children);

	const toggle = () => setOpened(!opened);

	console.log(selected);

	return (
		<div
			className={`dropdown${opened ? " dropdown--opened" : ""}${
				className ? " " + className : ""
			}`}
			onClick={toggle}
			onBlur={toggle}
		>
			<Button>{children}</Button>
			{!opened && (
				<Icon className="arrow arrow--down" icon={["fas", "caret-down"]} />
			)}
			{opened && <Icon className="arrow arrow--up" icon={["fas", "caret-up"]} />}
			<ul className="dropdown__list">{mappedList}</ul>
		</div>
	);
};

export default Dropdown;

import React, { useState, useContext, createContext } from "react";

/**
 * Menu hook and context
 */

const defaultState = {
	opened: false,
	toggle: () => null,
	close: () => null,
};

// Setup context
const NavContext = createContext(defaultState);

// Setup provider wrapper
const NavProvider = ({ children }) => {
	const [opened, setOpened] = useState(defaultState.opened);

	// Toggles filter on of off
	const toggle = () => setOpened((prevState) => !prevState);
	const close = () => setOpened(false);

	return (
		<NavContext.Provider
			value={{
				opened,
				toggle,
				close,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};

const useNav = () => useContext(NavContext);

export { useNav, NavProvider };

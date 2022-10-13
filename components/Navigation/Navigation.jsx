import React, { Fragment } from "react";
import DesktopNav from "components/Navigation/DesktopNav";
import MobileNav from "components/Navigation/MobileNav";
import { NavProvider } from "hooks/useNav";

/**
 * Navigation bar wrapper
 */

const Navigation = () => (
	<nav className="navigation">
		<NavProvider>
			<DesktopNav />
			<MobileNav />
		</NavProvider>
	</nav>
);

export default Navigation;

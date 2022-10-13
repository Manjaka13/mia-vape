import React, { Fragment } from "react";
import DesktopNav from "components/Navigation/DesktopNav";
import MobileNav from "components/Navigation/MobileNav";

/**
 * Navigation bar wrapper
 */

const Navigation = () => (
	<nav className="navigation">
		<DesktopNav />
		<MobileNav />
	</nav>
);

export default Navigation;

import React from "react";
import NavigationLinks from "components/Navigation/NavigationLinks";
import Social from "components/Social";
import { useNav } from "hooks/useNav";

/**
 * Navigation for mobile
 */

const MobileNav = () => {
	const { opened, close } = useNav();

	return (
		<div className={`mobile-nav${opened ? " mobile-nav--opened" : ""}`}>
			<div className="content-box">
				<NavigationLinks />
				<div className="mobile-nav__divider"></div>
				<p className="mobile-nav__description">
					Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit
					augue in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare
					porttitor sodales. In luctus feugiat malesuada. Phasellus consectetur nec
					ligula vitae commodo. Quisque id ligula vitae turpis blandit ullamcorper.
					Donec faucibus euismod quam. Curabitur eros enim.
				</p>
				<Social />
			</div>
		</div>
	);
};

export default MobileNav;

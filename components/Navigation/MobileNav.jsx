import React from "react";
import NavigationLinks from "components/Navigation/NavigationLinks";

/**
 * Navigation for mobile
 */

const MobileNav = () => (
	<div className="mobile-nav">
		<div className="content-box">
			<NavigationLinks />
			<div className="mobile-nav__divider"></div>
			<p className="mobile-nav__description">
				Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit augue
				in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare porttitor
				sodales. In luctus feugiat malesuada. Phasellus consectetur nec ligula vitae
				commodo. Quisque id ligula vitae turpis blandit ullamcorper. Donec faucibus
				euismod quam. Curabitur eros enim.
			</p>
		</div>
	</div>
);

export default MobileNav;

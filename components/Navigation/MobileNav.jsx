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
					Mia Vape MG est une boutique de{" "}
					<strong>vente de cigarettes électroniques</strong> de qualité partout à
					Madagascar. Nous avons une large gamme d&apos;articles différents pouvant
					séduire vos papilles de vapoteur. Procédez à vos achats en toute sécurité
					sur notre site en payant avec les mobile money.
				</p>
				<Social />
			</div>
		</div>
	);
};

export default MobileNav;

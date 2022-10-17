import React, { Fragment } from "react";
import Navigation from "components/Navigation/Navigation";
import CoverHome from "components/CoverHome";
import Footer from "components/Footer";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import LayoutDefault from "components/Page/LayoutDefault";
import AdvantagesBox from "components/AdvantagesBox";
import WhoAreWe from "components/WhoAreWe";
import GroupBuyPresentation from "components/GroupBuyPresentation";
import Promotion from "components/Promotion";

/**
 * Home page
 */

const HomePage = () => (
	<LayoutDefault
		title="Mia Vape, professionnel du e-cigarette à Madagascar"
		description="Achetez des cigarettes électroniques, e-liquides, bases et autre matériel DIY de la vape ici à Madagascar"
		image="/images/representation.png"
		navOpaque={false}
	>
		<CoverHome />
		<WhoAreWe />
		<GroupBuyPresentation />
		<Promotion />
		<AdvantagesBox />
	</LayoutDefault>
);

export default HomePage;

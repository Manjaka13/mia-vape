import React, { Fragment } from "react";
import Navigation from "components/Navigation/Navigation";
import CoverHome from "components/CoverHome";
import ShopCard from "components/Card/ShopCard";
import AboutCard from "components/Card/AboutCard";
import Footer from "components/Footer";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/**
 * Home page
 */

const HomePage = () => (
	<Fragment>
		<Navigation />
		<CoverHome />
		<ShopCard />
		<AboutCard
			icon={faHeart}
			title="Profitez des promotions"
			button="En profiter"
			link="#0"
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna dui,
			blandit eget malesuada sit amet, dapibus bibendum nibh. Vestibulum ante ipsum
			primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam
			sit amet velit volutpat tristique. Donec id ligula nisl. Donec libero velit,
			iaculis nec hendrerit sed, dapibus non turpis.
		</AboutCard>
		<Footer />
	</Fragment>
);

export default HomePage;

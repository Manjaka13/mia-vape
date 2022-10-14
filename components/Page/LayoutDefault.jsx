import React, { Fragment } from "react";
import PageHeading from "components/Page/PageHeading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer";

/**
 * Default page layout
 */

const LayoutDefault = ({ children, navOpaque, title, description, image }) => (
	<Fragment>
		<PageHeading title={title} description={description} image={image} />
		<Navigation navOpaque={navOpaque} />
		<main>{children}</main>
		<Footer />
	</Fragment>
);

export default LayoutDefault;

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationLinks from "components/Navigation/NavigationLinks";

/**
 * Navbar for desktop mode
 */

const DesktopNav = () => (
	<div className="desktop-nav">
		<div className="content-box">
			<div className="left">
				<figure className="desktop-nav__logo">
					<Image
						className="image"
						src="/images/logo-mia-vape.webp"
						alt="Logo Mia Vape"
						width={60}
						height={60}
					/>
				</figure>
				<div className="desktop-nav__head">
					<h1 className="title">
						<span className="theme">Mia </span>Vape
					</h1>
				</div>
			</div>
			<NavigationLinks />
			<div className="desktop-nav__trigger" title="Ouvrir le menu">
				<Icon icon={faBars} />
			</div>
		</div>
	</div>
);

export default DesktopNav;

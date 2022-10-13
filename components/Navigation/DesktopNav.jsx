import React from "react";
import Image from "next/image";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationLinks from "components/Navigation/NavigationLinks";
import { useNav } from "hooks/useNav";

/**
 * Navbar for desktop mode
 */

const DesktopNav = () => {
	const { toggle, opened } = useNav();

	return (
		<div className={`desktop-nav${opened ? " desktop-nav--opened" : ""}`}>
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
				<div
					className="desktop-nav__trigger"
					title="Ouvrir le menu"
					onClick={toggle}
				>
					<Icon icon={faBars} />
				</div>
			</div>
		</div>
	);
};
export default DesktopNav;

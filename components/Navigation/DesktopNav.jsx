import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationLinks from "components/Navigation/NavigationLinks";
import { useNav } from "hooks/useNav";

/**
 * Navbar for desktop mode
 */

const DesktopNav = ({ defaultOpaque }) => {
	const { toggle, opened } = useNav();
	const [opaque, setOpaque] = useState(defaultOpaque || false);

	useEffect(() => {
		const scrollCallback = () => {
			if (window.pageYOffset > 200) setOpaque(true);
			else setOpaque(false);
			// console.log(window.pageYOffset);
		};
		scrollCallback();
		document.addEventListener("scroll", scrollCallback);
		return () => {
			document.removeEventListener("scroll", scrollCallback);
		};
	}, []);

	return (
		<div
			className={`desktop-nav${opened || opaque ? " desktop-nav--opaque" : ""}`}
		>
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

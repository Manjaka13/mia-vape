import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/**
 * Navbar for desktop mode
 */

const DesktopNav = () => (
	<nav class="navigation">
		<div class="content-box">
			<div class="left">
				<figure class="navigation__logo">
					<img class="image" src="/images/logo-mia-vape.webp" alt="Logo Mia Vape" />
				</figure>
				<div class="navigation__head">
					<h1 class="title">
						<span class="theme">Mia </span>Vape
					</h1>
				</div>
			</div>
			<ul class="navigation__list">
				<li class="item">
					<a class="link active" href="#0">
						Accueil
					</a>
				</li>
				<li class="item">
					<a class="link" href="#0">
						Nos e-cigarettes
					</a>
				</li>
				<li class="item">
					<a class="link" href="#0">
						Les parfums
					</a>
				</li>
				<li class="item">
					<a class="link" href="#0">
						Section DIY
					</a>
				</li>
				<li class="item">
					<a class="link" href="#0">
						Le Bazar
					</a>
				</li>
			</ul>
			<div class="navigation__trigger" title="Ouvrir le menu">
				<Icon icon={["fas", "bars"]} />
			</div>
		</div>
	</nav>
);

export default DesktopNav;

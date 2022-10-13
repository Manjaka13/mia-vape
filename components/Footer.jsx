import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { AUTHOR } from "helpers/const";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/**
 * Footer component
 */

const Footer = () => (
	<footer className="footer">
		<div className="content-box">
			<div className="footer__separator"></div>
			<ul className="footer__list">
				<li className="footer__item">
					© <span className="theme">Mia</span> Vape
				</li>
				<li className="footer__item">Copyright 2022</li>
				<li className="footer__item">
					<p>
						Made with{" "}
						<span>
							<Icon className="heart theme" icon={faHeart} />
						</span>{" "}
						by{" "}
						<a
							className="link theme"
							href={AUTHOR.link}
							title="Le développeur du site"
						>
							{AUTHOR.name}
						</a>
					</p>
				</li>
			</ul>
		</div>
	</footer>
);

export default Footer;

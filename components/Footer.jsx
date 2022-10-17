import React from "react";
import { AUTHOR, CONTACT_LIST } from "helpers/const";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import Social from "components/Social";
import Button from "components/Form/Button";

/**
 * Footer component
 */

const mappedContacts = CONTACT_LIST.map((item) => (
	<li className="item" key={uuidv4()}>
		<Icon className="icon" icon={item.icon} /> {item.content}
	</li>
));

const Footer = () => (
	<footer className="footer">
		<div className="content-box">
			<div className="footer__container">
				<div className="footer__contacts">
					<h2 className="footer__title">Nous joindre ?</h2>
					<div className="footer__box">
						<ul className="list">{mappedContacts}</ul>
						<Social />
					</div>
				</div>
				<div className="footer__contacts">
					<h2 className="footer__title">Notre boutique</h2>
					<div className="footer__map">
						<p className="test-map">
							Une carte avec lequel on peut interagir sera affichée ici
						</p>
					</div>
				</div>
				<div className="footer__contacts">
					<h2 className="footer__title">Newsletter</h2>
					<p className="footer__text">
						En souscrivant à notre newsletter vous recevrez gratuitement par mail les
						nouveautés du sites et vous ne raterez aucunes de nos promotions.
					</p>
					<form className="newsletter">
						<input className="newsletter__input" type="email" placeholder="E-mail" />
						<Button className="newsletter__submit">Envoyer</Button>
					</form>
					<p className="footer__caption"></p>
				</div>
			</div>

			<div className="footer__separator"></div>
			<ul className="footer__list">
				<li className="footer__item">
					© <span className="theme">Mia</span> Vape
				</li>
				<li className="footer__item">Copyright {new Date().getFullYear()}</li>
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

import {
	faHome,
	faDroplet,
	faShoppingCart,
	faBottleWater,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Declare constants and export them from here
 */

// List of navigation links
export const LINK_LIST = [
	{
		icon: faHome,
		title: "Aller vers l'accueil du site",
		content: "Accueil",
		link: "/",
	},
	{
		icon: faBottleWater,
		title: "Découvrez nos cigarettes électroniques",
		content: "Nos E-cigarettes",
		link: "/e-cigarettes",
	},
	{
		icon: faDroplet,
		title: "Section pour les e-liquides",
		content: "Les liquides",
		link: "/e-liquides",
	},
	{
		icon: faShoppingCart,
		title: "Votre panier",
		content: "Panier",
		link: "/panier",
	},
];

// Author infos
export const AUTHOR = {
	name: "Hari",
	link: "https://harij.netlify.app",
};

// Social list
export const SOCIAL_LIST = [
	{ icon: faFacebook, title: "Suivez notre page Facebook !", link: "#0" },
	{ icon: faInstagram, title: "Rejoignez-nous sur Insta !", link: "#0" },
	{ icon: faTwitter, title: "Discutons sur Twitter !", link: "#0" },
	{ icon: faEnvelope, title: "Nous contacter par mail", link: "#0" },
];

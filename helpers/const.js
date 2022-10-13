import {
	faHome,
	faDroplet,
	faShoppingCart,
	faBottleWater,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Declare constants and export them from here
 */

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

import {
	faFacebook,
	faInstagram,
	faTwitter,
	faRaspberryPi,
} from "@fortawesome/free-brands-svg-icons";
import {
	faHome,
	faBong,
	faShoppingCart,
	faBottleWater,
	faEnvelope,
	faPhone,
	faMapMarker,
	faGlobe,
	faGift,
	faAward,
	faTruckFast,
	faSmoking,
	faPiggyBank,
	faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

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
		icon: faBong,
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

// Footer contacts
export const CONTACT_LIST = [
	{ icon: faPhone, content: "+261 34 67 154 30" },
	{ icon: faEnvelope, content: "contact@mia-vape.mg" },
	{ icon: faMapMarker, content: "Tsiazotafo, face Hôtel Nosy Be" },
	{ icon: faGlobe, content: "Antananarivo 101" },
];

// Advantages
export const ADVANTAGES = [
	{
		icon: faGift,
		title: "Profitez de nos promotions",
		button: "En profiter",
		link: "#0",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna dui, blandit eget malesuada sit amet, dapibus bibendum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
	},
	{
		icon: faAward,
		title: "Produits neufs de qualité",
		button: "Aller voir",
		link: "#0",
		description:
			"Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada.",
	},
	{
		icon: faTruckFast,
		title: "Livraison partout à Madagascar",
		button: "Se faire livrer",
		link: "#0",
		description:
			"Etiam lacinia, nisl ac rutrum vestibulum, risus enim placerat nisl, eget bibendum neque nibh a lectus. Donec tincidunt lacinia pharetra. Proin diam arcu, gravida sit amet lobortis ut.",
	},
];

// Advantages of vaping
export const VAPE_ADVANTAGES = [
	{ icon: faSmoking, content: "Jusqu'à 90% moins nocif que le tabac" },
	{ icon: faPiggyBank, content: "De réelles économies sur le long terme" },
	{ icon: faRaspberryPi, content: "Des parfums pour tous les goûts" },
	{ icon: faHandPointRight, content: "Une prise en main très facile" },
];

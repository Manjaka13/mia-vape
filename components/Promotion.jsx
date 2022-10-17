import React from "react";
import ShopCard from "components/Card/ShopCard";
import { v4 as uuidv4 } from "uuid";

/**
 * Promotions
 */

const PROMOTION = [
	{
		name: "Kit Stick TFV-12 Prince",
		description:
			"Le Stick Prince de Smoktech est une combinaison parfaite entre la puissance de la batterie de 3000 mAh et celle du clearomiseur TFV12 Prince de Smoktech. Idéal pour une vape puissante et une production de vapeur importante. Son design ergonomique vous offre une prise en main optimale.",
		price: 390000,
		promotion: 20,
		outOfStock: false,
		image: "/images/kit-stick-prince.jpg",
	},
	{
		name: "VapX Meteor 512 mod 80W",
		description:
			"La Meteor possède un indice IP68. Elle est totalement protégée contre les poussières (indice 6) et contre les effets de l’immersion prolongée dans les conditions spécifiées (indice 8) qui doit être au moins de 1 mètre pendant 1 heure.",
		price: 290000,
		promotion: 15,
		outOfStock: true,
		image: "/images/vapx.webp",
	},
	{
		name: "Kit Luxe 2 Vaporesso",
		description:
			"Le célèbre modèle Luxe revient dans une nouvelle version équipée du chipset très prisé AXON, déjà présent sur les modèles GEN. Le kit est composée d'une batterie Luxe II de 220W avec écran tactile, un nouveau design et de nouvelles fonctionnalités et c'est le clearomiseur NRG-S en 8ml qui accompagne cette box, équipé de résistances puissantes pour une production de vapeur encore jamais vue.",
		price: 285000,
		promotion: 10,
		outOfStock: false,
		image: "/images/vaporesso.webp",
	},
];

const Promotion = () => {
	const mappedPromotion = PROMOTION.map((item) => (
		<li className="promotion__item" key={uuidv4()}>
			<ShopCard item={item} />
		</li>
	));

	return (
		<div className="promotion section content-box">
			<h2 className="section__title">Les offres promotionnelles</h2>
			<div className="promotion__divider"></div>
			<ul className="promotion__list">{mappedPromotion}</ul>
		</div>
	);
};

export default Promotion;

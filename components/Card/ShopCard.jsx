import React from "react";
import Image from "next/image";
import { formatPrice } from "helpers/utils";

/**
 * Card for shop products
 */

const ShopCard = ({ item }) => {
	return (
		<article className="shop-card">
			<figure className="shop-card__representation">
				<Image
					layout="fill"
					objectFit="cover"
					className="image"
					src={item.image}
					alt="Kit TFV-12 Prince Mia Vape"
				/>
			</figure>
			<div className="shop-card__overlay">
				<div className="shop-card__up"></div>
				<div className="shop-card__down">
					<div className="shop-card__promotion">-{item.promotion}%</div>
					<div className="shop-card__price-box">
						{item.promotion && (
							<p className="price price-original">{formatPrice(item.price)} Ar</p>
						)}
						<p className="price">
							{formatPrice(
								item.promotion
									? item.price - Math.floor((item.price * item.promotion) / 100)
									: item.price
							)}{" "}
							Ar
						</p>
					</div>
				</div>
			</div>
			{item.outOfStock && (
				<div className="shop-card__out-stock">
					<p className="out-text">Stock épuisé</p>
				</div>
			)}
			<div className="shop-card__details">
				<h3 className="shop-card__label">{item.name}</h3>
				<div className="shop-card__divider"></div>
				<p className="shop-card__description">{item.description}</p>
				<p
					className="shop-card__link-container"
					title="Voir les détails du produit"
				>
					<a className="button shop-card__link" href="#0">
						{item.outOfStock ? "Précommander" : "Détails"}
					</a>
				</p>
			</div>
		</article>
	);
};

export default ShopCard;

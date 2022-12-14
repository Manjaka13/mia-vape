import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { VAPE_ADVANTAGES } from "helpers/const";

/**
 * Advantages of vaping
 */

const VapeAdvantages = () => {
	const [active, setActive] = useState(0);

	useEffect(() => {
		const intervalId = setTimeout(() => {
			setActive(active + 1 < VAPE_ADVANTAGES.length ? active + 1 : 0);
		}, 2000);
		return () => clearTimeout(intervalId);
	}, [active]);

	const mappedVapeAdvantages = VAPE_ADVANTAGES.map((item, key) => (
		<li
			className={`vape-advantages__item${
				active === key ? " vape-advantages__item--active" : ""
			}`}
			key={key}
		>
			<div className="icon">
				<Icon icon={item.icon} />
			</div>
			<p className="section__text">{item.content}</p>
		</li>
	));

	return (
		<div className="vape-advantages">
			<div className="cont">
				<div className="vape-advantages__rep">
					<figure className="vape-advantages__image">
						<Image
							className="image"
							src="/images/vapoto.jpg"
							layout="fill"
							alt="Représentation avantages de la vape"
							objectFit="cover"
						/>
					</figure>
				</div>
				<div className="vape-advantages__quote">
					<p className="section__text quote">
						Quisque id ligula vitae turpis blandit ullamcorper. Donec faucibus euismod
						quam. Curabitur eros enim, venenatis eget mi at, elementum commodo urna.
						Etiam non facilisis erat.
					</p>
					<p className="section__text signature">- Mia Vape MG</p>
				</div>
			</div>
			<ul className="vape-advantages__list">
				<li className="vape-advantages__title">
					<h3>Le vapotage c&apos;est :</h3>
				</li>
				{mappedVapeAdvantages}
			</ul>
		</div>
	);
};
export default VapeAdvantages;

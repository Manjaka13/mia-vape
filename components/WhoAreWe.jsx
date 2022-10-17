import React from "react";
import Link from "next/link";
import VapeAdvantages from "components/VapeAdvantages";

/**
 * Who are we
 */

const WhoAreWe = () => (
	<div className="who-are-we content-box section">
		<h2 className="section__title">Que fait Mia Vape MG ?</h2>
		<p className="section__text">
			Nous sommes une boutique de <strong>vape</strong> implantée à Madagascar
			depuis un certain moment. Nous vendons des e-liquides, des{" "}
			<strong>e-cigarettes</strong> et d&apos;autres accessoires pour un vapotage
			de qualité supérieur. Si vous voulez acheter une{" "}
			<Link href="/e-cigarettes">
				<a
					className="section__link"
					title="Notre catalogue de cigarettes électroniques"
				>
					cigarette électronique
				</a>
			</Link>{" "}
			à Madagascar, Mia Vape MG vous offre un catalogue de produits exclusivements
			neufs et scellés provenant de France.
		</p>
		<VapeAdvantages />
	</div>
);

export default WhoAreWe;

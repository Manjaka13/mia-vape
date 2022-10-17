import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

/**
 * Group buy presentation
 */

const GroupBuyPresentation = () => (
	<div className="group-buy-presentation">
		<div className="content-box">
			<div className="left">
				<h2 className="title">Group Buy</h2>
				<div className="icon">
					<Icon icon={faPeopleGroup} />
				</div>
			</div>
			<div className="right">
				<p className="section__text">
					Le group buy est un concept où vous et votre groupe convenez à{" "}
					<strong>acheter</strong> par exemple une cigarette électronique sur le site
					Mia Vape en groupe. Il s&apos;agit d&apos;un très bon moyen pour casser les
					prix et profiter d&apos;un large réduction sur un article sous réserve que
					vous achetiez tous en même temps par groupe de 5 ou 10. Vous pouvez
					toutefois aussi profiter des{" "}
					<Link href="#promotions">
						<a className="section__link" title="Voir">
							promotions
						</a>
					</Link>{" "}
					en cours ou directement initier une séance de <strong>group buy</strong>{" "}
					sur un article dans notre catalogue.
				</p>
				<Link href="/group-buy">
					<a className="button" title="Consulter">
						En savoir plus
					</a>
				</Link>
			</div>
		</div>
	</div>
);

export default GroupBuyPresentation;

import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

const Map = ({ img }) => {
		return (
			<section>
				<GatsbyImage image={ img } alt="Camp Map" />
			</section>
		)
}

export default Map

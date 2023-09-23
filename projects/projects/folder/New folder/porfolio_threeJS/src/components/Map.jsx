import React from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
} from "react-simple-maps";

const Map = () => {
	const geoUrl =
		"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/usa-10m.json";

	return (
		<ComposableMap
			projection="geoAlbersUsa" // Change projection to show the USA map
			style={{ width: "100%", height: "100%" }}
		>
			<Geographies
				geography={geoUrl} // Update the path to the local file
				fill="#2c065d"
				stroke="#FFFFFF"
				strokeWidth={0.5}
			>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography key={geo.rsmKey} geography={geo} />
					))
				}
			</Geographies>
			<Annotation
				subject={[-74.0059, 40.7128]} // Coordinates for New York City
				dx={-90}
				dy={-30}
				connectorProps={{
					stroke: "white",
					strokeWidth: 2,
					strokeLinecap: "round",
				}}
			>
				<text
					x="-8"
					textAnchor="end"
					alignmentBaseline="middle"
					fill="white"
				>
					{"New York"}
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default Map;

import React from "react";
import style from "./Banner.module.css";
function Banner() {
	return (
		<div className="banner-container">
			<img
				className={`img-fluid w-100 ${style["banner-img"]}`}
				src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="top-banner"
			/>
		</div>
	);
}

export default Banner;

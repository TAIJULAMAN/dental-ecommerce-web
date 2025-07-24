import React from "react";
import Slider from "./Slider/Slider";
import ExploreByCategory from "./ExploreByCategory/ExploreByCategory"
import HotSelling from "./HotSelling/HotSelling";
import MagicMoney from "./MagicMoney/MagicMoney";
import AboutUs from "./AboutUs/AboutUs";
import Subscribe from "./Subscribe/Subscribe";


// https://ibb.co/8LQnPZWY
// https://ibb.co/fzZ3Xr1H
// https://ibb.co/dsF2yyPB
// https://ibb.co/xKPDn39v


export default function Home() {
    return (
        <div className="bg-[#171716]">
            <Slider />
            <ExploreByCategory />
            <HotSelling />

            <MagicMoney />
            <AboutUs />
            <Subscribe />
        </div>
    );
}
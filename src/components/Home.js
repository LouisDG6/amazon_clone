import React from "react";
import "../Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="4903850"
            title="Asus ROG Strix XG49VQ 49” Curved Gaming FreeSync Monitor 144Hz Dual Full HD HDR Eye Care with DP HDMI Black"
            price={799.99}
            image="https://m.media-amazon.com/images/I/71PjhKA+llL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="8479203"
            title="LENTION USB C Docking Station with 100W PD, 4K HDMI, VGA, Gigabit Ethernet, Card Reader, USB 3.0, Aux Adapter for MacBook Pro, New Mac Air/Surface, More, Stable Driver Certified (CB-D55, Space Gray)"
            price={85.99}
            image="https://m.media-amazon.com/images/I/61JDFaNh1QL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1738484"
            title="Shark AV1010AE IQ Robot Vacuum with XL Self-Empty Base, Bagless, 45-Day Capacity, Advanced Navigation, Alexa & Wi-Fi, Multi-Surface Brushroll, for Pets, Dander & Dust, Carpet & Hard Floor, Black"
            price={399.99}
            image="https://m.media-amazon.com/images/I/71TtU5vBrcL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="9576969"
            title="Amazon Basics Portable Electric Pencil Sharpener, Helical Blade, Auto Stop, Battery/USB Cord Operated"
            price={11.06}
            image="https://m.media-amazon.com/images/I/71NSNRu3I-L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="2745285"
            title="DELUX Wired Ergonomic Vertical Mouse, Large RGB Ergonomic Computer Mouse with 6 Buttons, Removable Wrist Rest, 4000DPI and On-Board Software Reduce Hand Strain,for Carpal Tunnel(M618Plus RGB-Black)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51hgdeF7pWL._AC_SL1300_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="4725496"
            title="MUSICOZY Sleep Headphones Bluetooth Headband Sleeping Headphones Sleep Mask, Wireless Eye Mask Earbuds for Side Sleepers Men Women Office Nap Air Travel Cool Tech Gadgets Unique Gift"
            price={22.49}
            image="https://m.media-amazon.com/images/I/71G9DQQ-owL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

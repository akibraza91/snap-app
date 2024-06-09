"use client"

import Header from "@/components/Header";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <div className="left">
        <div className="content">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.
          </p>
          <button type="button" className="learn-moreBtn">Learn more</button>
        </div>
        <div className="icons">
          <img src="./client-databiz.svg" alt="databiz" />
          <img src="./client-audiophile.svg" alt="audiophile" />
          <img src="./client-meet.svg" alt="meet" />
          <img src="./client-maker.svg" alt="maker" />
        </div>
      </div>
      <div className="right">
        <picture>
          <source media="(min-width: 1025px)" srcSet="./image-hero-desktop.png"/>
          <img src="./image-hero-mobile.png" alt="Hero image" />
        </picture>
      </div>
    </main>
    </>
  );
}

import React, { useRef, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import useLocomotiveScroll from "../../Locomotive/useLocomotive";
import "../../styles/GlobalStyles.scss";
import { timeline } from "motion";
import { TimelineDefinition } from "@motionone/dom/types/timeline/types";
import imagesLoaded from "imagesloaded";
import HDImage2 from "../../assets/image 1.svg";

/// Partners Import
import partners1 from "../../assets/partners-assets/partners1.svg";
import partners2 from "../../assets/partners-assets/partners2.svg";
import partners3 from "../../assets/partners-assets/partners3.svg";
import partners4 from "../../assets/partners-assets/partners4.svg";
import partners5 from "../../assets/partners-assets/partners5.svg";
import partners6 from "../../assets/partners-assets/partners6.svg";
import partners8 from "../../assets/partners-assets/partners8.svg";
import partners9 from "../../assets/partners-assets/partners9.svg";

//video import
import HDvid from "../../assets/video/HDvid.mp4";

//icons import

import discord from "../../assets/icons/discord.svg";
import extlink from "../../assets/icons/external-link.svg";
import reddit from "../../assets/icons/reddit.svg";
import twitter from "../../assets/icons/twitter.svg";

const preloadImages = (selector: string) => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

function getSectionHeight(element: HTMLUListElement) {
  const { height } = element.getBoundingClientRect();
  const { childElementCount } = element;
  return height / childElementCount;
}

const Home: React.FunctionComponent = () => {
  // const [refAquired, setRefAquired] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const countRef = useRef<HTMLUListElement | null>(null);
  const countRef2 = useRef<HTMLUListElement | null>(null);
  // const [countRef, setCountRef] = useState(null)

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleRef2 = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  console.log(countRef);

  const [locomotiveRef] = useLocomotiveScroll({
    ref: scrollRef,
    smooth: true,
    smoothMobile: true,
    inertia: 0.8,
    getDirection: true,
  });

  useEffect(() => {
    // Preload images
    Promise.all([preloadImages(".grid-item-media")]).then(() => {
      if (locomotiveRef.current) {
        locomotiveRef.current.update();
      }
    });
  }, []);

  useEffect(() => {
    // setRefAquired(true);
    if (countRef.current && countRef2.current && loaderRef.current) {
      const transformAmount = getSectionHeight(countRef.current);

      const sequence1 = new Array(3).fill("").flatMap((_, index) => [
        [countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
        [
          countRef2.current,
          { y: `-${transformAmount * (index + 1)}px` },
          { at: "-1.8" },
        ],
      ]) as TimelineDefinition;

      timeline(sequence1, {
        defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 2 },
      });
    }
  }, []);

  useEffect(() => {
    // setRefAquired(true);

    const sequence2: TimelineDefinition = [
      [titleRef.current, { y: 100 }],
      [titleRef2.current, { y: 100 }],
      [imageRef.current, { scale: 1.2 }, { at: "<" }],
      [countRef.current, { opacity: 0 }, { at: "<" }],
      [countRef2.current, { opacity: 0 }, { at: "<" }],
      [loaderRef.current, { y: "-100vh" }, { at: "-0.5" }],
      [titleRef.current, { y: 30 }, { at: "-0.5" }],
      [titleRef2.current, { y: 50 }, { at: "-0.5" }],
      [imageRef.current, { scale: 1 }, { at: "<" }],
    ] as TimelineDefinition;

    timeline(sequence2, {
      defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 1, delay: 7 },
    });
  }, []);

  return (
    <>
      {/* Loader */}

      <div className="loader-container" ref={loaderRef}>
        <div className="counter-container">
          <ul className="counter-list" ref={countRef}>
            <li>
              <h3>3</h3>
            </li>
            <li>
              <h3>6</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
            <li>
              <h3>H</h3>
            </li>
          </ul>
        </div>

        <div className="counter-container">
          <ul className="counter-list" ref={countRef2}>
            <li>
              <h3>3</h3>
            </li>
            <li>
              <h3>6</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
            <li>
              <h3>D</h3>
            </li>
          </ul>
        </div>
      </div>

      {/* Landing Page */}
      <div
        className="main-container"
        id="main-container"
        data-scroll-container
        ref={scrollRef}
      >
        <div className="hero">
          <div className="nav" data-scroll data-scroll-speed="-1">
            <div className="nav__logo">
              <h1>HD</h1>
            </div>
            <ul className="nav__items">
              <li>
                <a href="">mint</a>
              </li>
              <li>
                <a className="btn">View on OpenSea</a>
              </li>
            </ul>
          </div>
          <div className="hero__container">
            <div className="hero-content">
              <div className="hero-title" data-scroll data-scroll-speed="-7">
                <h1 ref={titleRef}>Hangout DAO</h1>
                <h2 ref={titleRef2}>Hangout With the Alphas</h2>
              </div>
            </div>
            <div className="hero-image" data-scroll data-scroll-speed="-7">
              <img
                data-scroll
                ref={imageRef}
                className="grid-item-media"
                src={HDImage2}
              />
            </div>
          </div>
        </div>

        <div className="intro-container" data-scroll data-scroll-speed="0">
          <p>
            Unlock instant access to exclusive NFT opportunities and resources.
            Free 333 passes will be available for mint. <br /> Owning HD pass
            will give holders Whitelist access for future NFT projects, Live
            market updates, Alpha calls, Mint notifications and lots more.
          </p>
        </div>

        <div className="partners" data-scroll data-scroll-speed="1">
          <div className="container">
            <h1>Our Partners</h1>

            <div className="img-container">
              <img src={partners1} alt="" />
              <img src={partners3} alt="" />
              <img src={partners1} alt="" />
              <img src={partners4} alt="" />
              <img src={partners5} alt="" />
              <img src={partners6} alt="" />
              <img src={partners8} alt="" />
              <img src={partners8} alt="" />
              <img src={partners9} alt="" />
            </div>
          </div>
        </div>

        <div className="latest" data-scroll data-scroll-speed="2">
          <h1>Whats the latest news about HANGOUT DAO</h1>
        </div>

        <div className="sneakpeek" data-scroll data-scroll-speed="6">
          <div className="sneakpeek__video">
            <video src={HDvid} width="700" height="500" />
          </div>
          <div className="sneakpeek__text">
            <h1>
              Do you want to be <br /> <span>1/333</span>
            </h1>
            <h1>
              When mint <br /> <span>13/05/2022</span>
            </h1>
          </div>
        </div>

        <div className="footer">
          <h2>Join the discussion</h2>
          <div className="footer__icons">
            <a href="#">
              <img src={discord} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={reddit} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

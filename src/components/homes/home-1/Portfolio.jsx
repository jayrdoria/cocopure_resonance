import AnimatedText from "@/components/common/AnimatedText";
import { portfolios1 } from "@/data/portfolio";

import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
const filters = [
  { name: "All works", category: "all" },
  { name: "Branding", category: "branding" },
  { name: "Design", category: "design" },
  { name: "Development", category: "development" },
];
export default function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".work-item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentCategory(val);
    isotope.current.arrange({
      filter: val == "all" ? "*" : "." + val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="container">
      <div className="row mb-60 mb-md-40">
        <div className="col-lg-5">
          <h2 className="section-caption mb-xs-10">Our Portfolio</h2>
          <h3 className="section-title mb-0">
            <AnimatedText text=" Creativity meets technology here." />
          </h3>
        </div>
        <div className="col-lg-7">
          {/* Works Filter */}
          <div className="works-filter text-md-left text-lg-end mt-50 mt-md-30">
            {filters.map((elm, i) => (
              <a
                onClick={() => updateCategory(elm.category)}
                key={i}
                className={`filter ${
                  currentCategory == elm.category ? "active" : ""
                }`}
              >
                {elm.name}
              </a>
            ))}
          </div>
          {/* End Works Filter */}
        </div>
      </div>
      {/* Works Grid */}
      <ul
        ref={isotopContainer}
        className="works-grid work-grid-3 work-grid-gut-lg masonry"
        id="work-grid"
      >
        {/* Work Item (Lightbox) */}
        <Gallery>
          {portfolios1.slice(0, 6).map((item, index) => (
            <li key={index} className={item.className}>
              {item.description == "Lightbox" ? (
                <a className={item.linkClassName}>
                  <div className="work-img">
                    <div className="work-img-bg " />
                    <Item
                      original={item.imgSrc}
                      thumbnail={item.imgSrc}
                      width={650}
                      height={773}
                    >
                      {({ ref, open }) => (
                        <img
                          width={650}
                          height={773}
                          ref={ref}
                          onClick={open}
                          src={item.imgSrc}
                          alt={item.imgAlt}
                          data-wow-delay={item.delay}
                        />
                      )}
                    </Item>
                  </div>
                  <div className="work-intro text-start">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">{item.description}</div>
                  </div>
                </a>
              ) : (
                <Link
                  to={`/main-portfolio-single-1/${item.id}`}
                  className={item.linkClassName}
                >
                  <div className="work-img">
                    <div className="work-img-bg " />
                    <img
                      width={650}
                      height={773}
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      data-wow-delay={item.delay}
                    />
                  </div>
                  <div className="work-intro text-start">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">{item.description}</div>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </Gallery>
        {/* End Work Item */}
      </ul>
      {/* End Works Grid */}
    </div>
  );
}

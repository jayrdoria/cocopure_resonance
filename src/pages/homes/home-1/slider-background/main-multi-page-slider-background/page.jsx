import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import { menuItemsCoco } from "@/data/menu";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Hero5 from "@/components/homes/home-1/heros/Hero5";

import MetaComponent from "@/components/common/MetaComponent";
import Accordion2 from "@/components/accordion/Accordion2";
import FormSection from "@/components/Form/FormSection";
import Grid from "@/components/grid/Grid";

import { useEffect } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import MainPageFaq1 from "@/pages/otherPages/main-pages-faq-1/page";

const metadata = {
  title:
    "Home 1 Slider Background MultiPage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1SliderBackgroundMultiPage() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar ">
            <Header1Multipage links={menuItemsCoco} />
          </nav>
          <main id="main">
            <div className="home-section relative scrollSpysection" id="home">
              <Hero5 />
            </div>
            <Home1 />
            {/* Accordion */}
            <section className="page-section bg-gray-light-1">
              <div className="container position-relative">
                <div className="text-center mb-60 mb-sm-40">
                  <h2 className="section-title-small">Accordion</h2>
                </div>
                <div className="row section-text">
                  <div>
                    {/* Toggle */}
                    <Accordion2 />
                    {/* End Toggle */}
                  </div>
                </div>
              </div>
            </section>
            {/* End of Accordion */}
            <FormSection />
            <Grid />
            <MainPageFaq1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}

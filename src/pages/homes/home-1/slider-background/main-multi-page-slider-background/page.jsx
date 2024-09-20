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

import { useEffect, useState } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import MainPageFaq1 from "@/pages/otherPages/main-pages-faq-1/page";
import FaqForm from "@/components/Form/FaqForm";
import axios from "axios"; // Import axios for handling HTTP requests

const metadata = {
  title:
    "Home 1 Slider Background MultiPage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};

export default function Home1SliderBackgroundMultiPage() {
  const [faqData, setFaqData] = useState([]);

  // Fetch FAQs from the Express backend (server.js on port 3000)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/faqData.json`)
      .then((response) => {
        setFaqData(response.data); // Set the FAQ data in state
      })
      .catch((err) => console.error("Failed to load FAQs", err));
  }, []);

  // Function to handle new FAQ submissions
  const addFaq = (newFaq) => {
    const updatedFaqs = [...faqData, { id: faqData.length + 1, ...newFaq }];
    setFaqData(updatedFaqs); // Update the local state with new FAQ

    // Send the updated FAQ list to the Express backend server to update the JSON file

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/updateFaqs`, updatedFaqs) // POST to Express server at port 3000
      .then((response) => {
        console.log("FAQs updated successfully");
      })
      .catch((err) => console.error("Failed to update FAQs", err));
  };

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
            {/* FAQ Form - allows users to add new FAQ */}
            <FaqForm addFaq={addFaq} />
            <Grid />
            {/* FAQ display */}
            <MainPageFaq1 faqData={faqData} />
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}

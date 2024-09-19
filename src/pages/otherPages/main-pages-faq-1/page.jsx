import React from "react";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/common/AnimatedText";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "FAQ || Resonance — One & Multi Page Reactjs Creative Template",
  description: "Frequently Asked Questions for Resonance Template",
};

export default function MainPageFaq1({ faqData }) {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <main id="main">
            {/* Page Header */}
            <section className="page-section pt-0 pb-0" id="home">
              <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
              <div className="container position-relative pt-50">
                <div className="text-center">
                  <div className="row">
                    {/* Section Title */}
                    <div className="col-md-8 offset-md-2">
                      <h2
                        className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                        data-wow-duration="1.2s"
                      >
                        FAQ
                      </h2>
                      <h1 className="hs-title-1 mb-0">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text="Frequently Asked Questions" />
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="page-section pt-0">
              <div className="container relative wow fadeInUp">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    {faqData.length > 0 ? (
                      faqData.map((faq, i) => (
                        <React.Fragment key={i}>
                          <hr className="mb-30" />
                          <h4 className="mb-20">{faq.question}</h4>
                          <p>{faq.answer}</p>
                        </React.Fragment>
                      ))
                    ) : (
                      <p>No FAQs available at the moment.</p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <hr className="mt-0 mb-0" />

            {/* Contact Section */}
            <section className="page-section">
              <div className="container position-relative">
                <div className="position-relative">
                  {/* Decorative Waves */}
                  <div
                    className="decoration-21 d-none d-lg-block"
                    data-rellax-y=""
                    data-rellax-speed="0.7"
                    data-rellax-percentage="0.5"
                  >
                    <img
                      src="/assets/images/decoration-3.svg"
                      className="svg-shape"
                      width={148}
                      height={148}
                      alt="Decoration"
                    />
                  </div>
                </div>

                <div className="row wow fadeInUp">
                  <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                    <p className="section-descr mb-0">
                      Looking for exclusive digital services? Contact us, and
                      we'll start productive cooperation.
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-3 text-md-end">
                    <div className="local-scroll">
                      <Link
                        to={`/main-pages-contact-1`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>Contact us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

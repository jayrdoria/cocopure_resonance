import { useEffect } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default function FormSection() {
  useEffect(() => {
    tippy("[data-tippy-content]", {
      placement: "bottom", // Tooltip will be shown at the bottom
    });
  }, []);

  return (
    <section className="page-section">
      <div className="container position-relative">
        <div className="text-center mb-60 mb-sm-40">
          <h2 className="section-title-small">Form fields</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-10 col-lg-6 mb-40">
            <div className="form">
              <div className="mb-20 mb-md-10">
                {/* Last Name */}
                <input
                  type="text"
                  name="last name"
                  id="last name"
                  className="input-lg round form-control"
                  placeholder="Last Name"
                  maxLength={100}
                  data-tippy-content="Last Name"
                  data-tippy-placement="bottom"
                />
              </div>
              <div className="mb-20 mb-md-10">
                {/* First Name */}
                <input
                  type="text"
                  name="first name"
                  id="first name"
                  className="input-lg round form-control"
                  placeholder="First Name"
                  maxLength={100}
                  data-tippy-content="First Name"
                  data-tippy-placement="bottom"
                />
              </div>
              <div className="mb-20 mb-md-10">
                {/* Email */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-lg round form-control"
                  placeholder="Email"
                  maxLength={100}
                  data-tippy-content="Email"
                  data-tippy-placement="bottom"
                />
              </div>
              <div className="mb-10 text-center">
                <a
                  href="#"
                  className="btn btn-mod btn-large btn-round btn-hover-anim"
                >
                  <span>Button</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

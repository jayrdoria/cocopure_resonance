import React, { useState } from "react";

export default function FaqForm({ addFaq }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      addFaq({ question: title, answer: text });
      setTitle(""); // Clear the input fields
      setText("");
    }
  };

  return (
    <section className="page-section">
      <div className="container position-relative">
        <div className="text-center mb-60 mb-sm-40">
          <h2 className="section-title-small">Submit a New FAQ</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-10 col-lg-6 mb-40">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="mb-20 mb-md-10">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="input-lg round form-control"
                    placeholder="Enter question"
                    maxLength={100}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-20 mb-md-10">
                  <textarea
                    name="text"
                    id="text"
                    className="input-lg round form-control"
                    rows={6}
                    placeholder="Enter answer"
                    maxLength={400}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className="mb-10 text-center">
                  <button
                    type="submit"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    Submit FAQ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

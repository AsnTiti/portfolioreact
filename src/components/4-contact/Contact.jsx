import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/Animation - 1728333748674.json";
import ContactUsAnimation from "../../../src/animation/Animation - 1728334231629.json";


import "./contact.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("xpwzaozl");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        debitis magni quia id.
      </p>

      <div style={{justifyContent:"space-between"}}    className="flex">
        <form onSubmit={handleSubmit} action="" className="">
          <div>
            <label htmlFor="">Email address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email Adress"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie style={{ height: 37 }} animationData={doneAnimation} />
              your message has been successfully
            </p>
          )}
        </form>
        <div className="animation"> 
           <Lottie  className="contactAnimation"  style={{ height: 300 }} animationData={ContactUsAnimation} />
           </div>
      </div>
    </section>
  );
};
export default Contact;

import React from "react";
import "./contact.css";
const Contact = () => {
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

      <div className="flex">
        <form action="" className="">
          <div>
            <label htmlFor="" >Email address:</label>
            <input  required type="email" name="" id="email" placeholder="Email Adress" />
          </div>
          <div className="flex" style={{marginTop:"24px"}}>
            <label htmlFor="">Your message:</label>
            <textarea required name="" id="message" placeholder="Message"></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>
        <div className=" border animation"> animation</div>
      </div>
    </section>
  );
};
export default Contact;

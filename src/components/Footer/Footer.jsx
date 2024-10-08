import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer justify-items-center w-[60%] mx-auto py-10 mt-16">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold uppercase text-left underline">Kudil</h1>
        </div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover" to="/branding">
            Branding
          </Link>
          <Link className="link link-hover" to="/design">
            Design
          </Link>
          <Link className="link link-hover" to="/marketing">
            Marketing
          </Link>
          <Link className="link link-hover" to="/advertisement">
            Advertisement
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover" to="/about">
            About us
          </Link>
          <Link className="link link-hover" to="/contact">
            Contact
          </Link>
          <Link className="link link-hover" to="/jobs">
            Jobs
          </Link>
          <Link className="link link-hover" to="/press">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover" to="/terms">
            Terms of use
          </Link>
          <Link className="link link-hover" to="/privacy">
            Privacy policy
          </Link>
          <Link className="link link-hover" to="/cookies">
            Cookie policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

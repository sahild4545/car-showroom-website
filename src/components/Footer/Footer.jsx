import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content" style={{ background: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }}>
      <aside>
        <Link className="btn btn-ghost text-xl" style={{ color: 'white' }}>
          LU<span style={{ margin: '-8px', color: '#c8102e' }}>X</span>U
        </Link>
        <p style={{ color: 'white' }}>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/" className="link link-hover">Branding</Link>
        <Link to="/" className="link link-hover">Design</Link>
        <Link to="/" className="link link-hover">Marketing</Link>
        <Link to="/" className="link link-hover">Advertisement</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/" className="link link-hover">About us</Link>
        <Link to="/" className="link link-hover">Contact</Link>
        <Link to="/" className="link link-hover">Jobs</Link>
        <Link to="/" className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/" className="link link-hover">Terms of use</Link>
        <Link to="/" className="link link-hover">Privacy policy</Link>
        <Link to="/" className="link link-hover">Cookie policy</Link>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input type="text" placeholder="Tell about that here" className="input input-bordered join-item" style={{ backgroundColor: "white" }} />
            <button className="btn btn-primary join-item" style={{ color: 'white', backgroundColor: 'rgb(204,14,14)', border: 'none' }}>Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;

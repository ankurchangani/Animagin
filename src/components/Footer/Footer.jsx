import { memo } from "react";
import Logo from "../../assets/about/logo.png";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 mt-7 bg-[#0E1909] text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section - Logo + Email */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#2C322A] pb-8">
          {/* Logo */}
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-[100px] md:w-[120px] object-contain"
            />
          </div>

          {/* Email Subscription */}
          <div className="w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <MdEmail className="text-3xl text-[#DFF909]" />
                <span className="font-montserrat">Get Updates on Animagin</span>
              </div>

              <div className="flex items-center border-b-2 border-[#7D847A] w-full md:w-96">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-white placeholder-white px-4 py-2 focus:outline-none"
                />
                <button className="w-12 h-12 border-2 border-[#7D847A] flex items-center justify-center rounded-full transition hover:bg-[#DFF909] hover:text-black mb-2">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8 text-sm">
          {/* Product */}
          <div>
            <h5 className="font-semibold mb-3">Product</h5>
            <ul className="space-y-2 text-[#697061]">
              <li>One Click Checkout</li>
              <li>Account Creation</li>
              <li>Goodbye, Guest Checkout</li>
              <li>Fraud Protection</li>
              <li>Bolt SSO</li>
              <li>Bolt Payments</li>
              <li>Checkout Everywhere</li>
              <li>Merchant Analytics</li>
              <li>Product Releases</li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h5 className="font-semibold mb-3">Learn</h5>
            <ul className="space-y-2 text-[#697061]">
              <li>Company News</li>
              <li>ThinkShop</li>
              <li>Resources</li>
              <li>Interactive Demo</li>
              <li>Watch Bolt in 90 Seconds</li>
              <li>Case Studies</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Platform Partners */}
          <div>
            <h5 className="font-semibold mb-3">Platform Partners</h5>
            <ul className="space-y-2 text-[#697061]">
              <li>Bolt for BigCommerce</li>
              <li>Bolt for Adobe</li>
              <li>Bolt for Salesforce</li>
              <li>Bolt for WooCommerce</li>
              <li>Bolt for Solidus</li>
              <li>View All Partners</li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Contact</h5>
              <ul className="space-y-2 text-[#697061]">
                <li>Contact Sales</li>
                <li>Contact Support</li>
                <li>General Inquiries</li>
              </ul>
            </div>
          </div>

          {/* Developers */}
          <div>
            <h5 className="font-semibold mb-3">Developers</h5>
            <ul className="space-y-2 text-[#697061]">
              <li>Developers</li>
              <li>API Reference</li>
              <li>API Status</li>
              <li>Tech Blog</li>
              <li>Latest Releases</li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Latest Releases</h5>
              <ul className="space-y-2 text-[#697061]">
                <li>Account Login</li>
                <li>What is a Bolt Account?</li>
                <li>Shop the Bolt Network</li>
                <li>Security</li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-[#697061]">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
              <li>News & Press</li>
              <li>Support Center</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

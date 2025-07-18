import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const quickLinks = [
  { label: "Features", to: "/features" },
  { label: "Benefits", to: "/benefits" },
  { label: "Pricing", to: "/pricing" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Cookies", to: "/cookies" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1833] text-white pt-16 pb-8 px-4 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">
        {/* Left: Logo & Contact */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <Logo showText={false} className="mb-2" />
          <p className="text-gray-300 text-sm max-w-xs">
            AI-powered solutions for modern logistics and transportation management.
          </p>
          <div className="text-gray-400 text-sm mt-2">
            <div>2051 3rd Street, San Francisco, CA 94103</div>
            <div>
              <a href="mailto:info@hemut.com" className="hover:text-yellow-400 underline">info@hemut.com</a>
            </div>
            <div>
              <a href="tel:15599447199" className="hover:text-yellow-400 underline">(559) 944-7199</a>
            </div>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-300 hover:text-yellow-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Newsletter */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md bg-[#162447] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1 min-w-0"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-[#0a1833] font-semibold px-5 py-2 rounded-md hover:bg-yellow-300 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#22315a] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <div>© 2025 Hemut. All rights reserved.</div>
        <div className="flex gap-4 flex-wrap">
          {legalLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-yellow-400 underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
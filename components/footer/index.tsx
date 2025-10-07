import React from "react";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className=" text-center text-slate-600 text-sm">
          <p>
            © {new Date().getFullYear()} CrowdVest LLC. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            This material does not constitute an offer to sell or solicitation
            to buy securities. Investing involves risk, including possible loss
            of principal.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

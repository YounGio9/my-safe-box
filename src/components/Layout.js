import React from "react";
import SecondBanner from "./SecondBanner";
import '../styles/Layout.css'

function Layout({ children }) {
  return (
    <div className="Layout">
      <SecondBanner />
      {children}
    </div>
  );
}

export default Layout;

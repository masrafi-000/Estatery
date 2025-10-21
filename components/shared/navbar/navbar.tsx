"use client";

import { useState } from "react";
import MobileNav from "./mobile-nav";
import NavMenu from "./nav-menu";

export default function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
      <NavMenu openNav={() => setShowNav(true)} />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />
    </>
  );
}

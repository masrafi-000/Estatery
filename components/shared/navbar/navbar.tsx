"use client"

import { useState } from "react";
import NavMenu from "./nav-menu";
import MobileNav from "./mobile-nav";

export default function Navbar() {

    const [showNav, setShowNav] = useState<boolean>(false)

    

  return (
    <>
      <NavMenu openNav={() => setShowNav(true)} />
        <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />
    </>
  );
}

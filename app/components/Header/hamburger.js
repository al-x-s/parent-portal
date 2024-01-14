import React from "react";
import { Menu } from "react-feather";
import Link from "next/link";

import useToggle from "./use-toggle";
import Drawer from "./drawer";
import styles from "./hamburger.module.css";

function Hamburger({ navLinks }) {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <>
      <button
        className={(styles.hamburgerBtn, "md:hidden")}
        onClick={toggleIsMenuOpen}
      >
        <Menu />
      </button>
      {isMenuOpen && (
        <Drawer handleDismiss={toggleIsMenuOpen}>
          <ul className={styles.navigationList}>
            {navLinks.map(({ name, slug, pf }) => (
              <Link
                key={crypto.randomUUID()}
                href={slug}
                prefetch={pf}
                onClick={toggleIsMenuOpen}
              >
                {name}
              </Link>
            ))}
          </ul>
        </Drawer>
      )}
    </>
  );
}

export default Hamburger;

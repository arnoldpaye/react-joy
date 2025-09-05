import React from "react";

import styles from "./LinkButton.module.css";

function LinkButton({ href, children, ...delegated }) {
  /* if (href) {
    return (
      <a href={href} className={styles.button} {...delegated}>
        {children}
      </a>
    );
  } */

  const Tag = typeof href === "string" ? "a" : "button";

  return React.createElement(
    Tag,
    {
      href,
      className: styles.button,
      ...delegated,
    },
    children
  );

  /* return (
    <Tag className={styles.button} {...delegated}>
      {children}
    </Tag>
  ); */
}

export default LinkButton;

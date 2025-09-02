import React from "react";

import styles from "./Banner.module.css";

export function Banner({ type, children }) {
  const backgroundColor =
    type === "success" ? "var(--color-success)" : "var(--color-error)";

  return (
    <div className={styles.banner} style={{ backgroundColor }}>
      {children}
    </div>
  );
}

export function BlackFridaySaleBanner({
  saleStartDate,
  saleEndDate,
  type,
  children,
}) {
  return <Banner type={type}>{children}</Banner>;
}

export function LoggedInBanner({ type, user, children }) {
  // Only logged in, verified users are
  // allowed to see the banner
  if (!user || user.registrationStatus === "unverified") {
    return null;
  }

  return <Banner type={type}>{children}</Banner>;
}

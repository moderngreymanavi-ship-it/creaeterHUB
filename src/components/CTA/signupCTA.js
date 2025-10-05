"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import mixpanel from "mixpanel-browser";
import styles from "./signupCTA.module.scss";
import Link from "next/link";

export default function SignupCTA({ source }) {
  const searchParams = useSearchParams();

  // Initialize Mixpanel once
  useEffect(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, { debug: false });

    const utmSource = searchParams.get("utm_source") || "organic";
    const utmMedium = searchParams.get("utm_medium") || "none";
    const utmCampaign = searchParams.get("utm_campaign") || "none";

    mixpanel.track("CTA Viewed", {
      source,
      utmSource,
      utmMedium,
      utmCampaign,
    });
  }, [source, searchParams]);

  // Generate UTM params only once
  const utmParams = useMemo(() => {
    return new URLSearchParams({
      utm_source: searchParams.get("utm_source") || "organic",
      utm_medium: searchParams.get("utm_medium") || "none",
      utm_campaign: searchParams.get("utm_campaign") || "none",
    }).toString();
  }, [searchParams]);

  // Track click event
  const handleClick = () => {
    mixpanel.track("CTA Clicked", {
      source,
      ...Object.fromEntries(new URLSearchParams(utmParams)),
    });
  };

  return (
    <div className={styles.ctaWrapper}>
      <h2>Join CreatorHub Today 🚀</h2>
      <p>Get exclusive insights, resources, and tools every week!</p>

      <Link
        href={`/signup?${utmParams}`}
        onClick={handleClick}
        className={styles.ctaButton}
      >
        Sign Up Free
      </Link>
    </div>
  );
}

"use client";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function MixpanelView() {
  useEffect(() => {
    mixpanel.init("e96cc3e4497d99684332517f5447c35b", {
      debug: false,
    });
    console.log(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);
    mixpanel.track("Blog Page View");
  }, []);

  return null;
}

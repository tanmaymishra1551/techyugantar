import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tech Yugantar - Pioneering Digital Transformation",
  description:
    "Learn about Tech Yugantar's mission to bridge the gap between complex technology and seamless business solutions. We specialize in Python, Django, Flutter, and Next.js development.",
  keywords: ["Tech Yugantar", "Software Development", "Web Development", "Mobile Apps", "Digital Transformation"],
  // Add OpenGraph for better social sharing
  openGraph: {
    title: "About Tech Yugantar",
    description: "Driving the next era of technological innovation.",
    url: "https://techyugantar.in/about",
    siteName: "Tech Yugantar",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Tech Yugantar"
        description="We are a forward-thinking technology company dedicated to building robust, scalable software solutions that empower businesses to thrive in the digital age."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
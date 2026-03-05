import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tech Yugantar - Start Your Project",
  description:
    "Get in touch with Tech Yugantar for custom software development, mobile apps, and web solutions. Let's discuss how we can bring your digital vision to life.",
  keywords: ["Contact Tech Yugantar", "Software Consultation", "Hire Developers", "Tech Support India"],
  openGraph: {
    title: "Connect with Tech Yugantar",
    description: "Ready to scale your business? Contact our expert team today.",
    url: "https://techyugantar.in/contact",
    siteName: "Tech Yugantar",
    type: "website",
  },
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
        description="Have a groundbreaking idea or a complex technical challenge? Reach out to us. Our team is ready to provide the expertise and support you need to succeed."
      />
      <Pricing />
    </>
  );
};

export default PricingPage;
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Insights & Tutorials | Tech Yugantar Blog",
  description:
    "Articles on Flutter, Django, Next.js, and mobile development from the Tech Yugantar team in Varanasi — practical tutorials and insights for developers and businesses building software products.",
  keywords: [
    "tech blog",
    "software development trends",
    "flutter tutorials",
    "django tutorials",
    "next.js insights",
    "Tech Yugantar articles",
  ],
  alternates: {
    canonical: "https://techyugantar.in/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://techyugantar.in/blog",
    siteName: "Tech Yugantar",
    title: "Tech Yugantar Blog — Digital Innovation Insights",
    description:
      "Expert insights into Flutter, Django, Next.js, and software engineering from the Tech Yugantar team.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Yugantar Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Yugantar Blog — Digital Innovation Insights",
    description: "Insights on Flutter, Django, Next.js, and software engineering.",
    images: ["/og-image.png"],
  },
};
const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tech Insights"
        description="Deep dives into the world of software development, modern architecture, and the future of digital business. Knowledge shared by the Tech Yugantar team."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                {/* Active page style suggestion: you might want to add a 'bg-primary text-white' class to the current page */}
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-primary text-white flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
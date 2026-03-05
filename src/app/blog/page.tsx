import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Insights & Tutorials | Tech Yugantar Blog",
  description:
    "Stay ahead of the curve with Tech Yugantar. Explore our latest articles on Python, Django, Next.js, and mobile development trends to fuel your digital growth.",
  keywords: ["Tech Blog", "Software Development Trends", "Python Tutorials", "Next.js Insights", "Tech Yugantar Articles"],
  openGraph: {
    title: "Tech Yugantar Blog - Digital Innovation Insights",
    description: "Expert insights into software engineering and digital transformation.",
    url: "https://techyugantar.in/blog",
    siteName: "Tech Yugantar",
    type: "website",
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

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
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
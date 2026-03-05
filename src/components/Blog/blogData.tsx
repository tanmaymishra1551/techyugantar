import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Building Multi-Tenant SaaS Architectures with Django & PostgreSQL",
    paragraph:
      "Schema-per-tenant vs. row-level isolation — we break down the real trade-offs, connection pooling pitfalls, and the exact migration strategy we used to serve 10,000+ tenants without downtime.",
    image: "/images/blog/blog-django-multitenant.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Engineering Team",
    },
    tags: ["django"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Next.js App Router in Production: What Nobody Tells You",
    paragraph:
      "Server Components, streaming SSR, and the new caching model sound great in docs — but here are the race conditions, hydration mismatches, and layout shift bugs we hit in a real e-commerce project.",
    image: "/images/blog/blog-nextjs-approuter.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Engineering Team",
    },
    tags: ["next.js"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Flutter State Management at Scale: Riverpod vs Bloc in 2025",
    paragraph:
      "After shipping three production Flutter apps with 50k+ MAU each, we made the switch. Here is our honest, code-level comparison — architecture diagrams, boilerplate cost, and testability scores included.",
    image: "/images/blog/blog-flutter-state.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Mobile Team",
    },
    tags: ["flutter"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "React Server Components Are Not a Silver Bullet",
    paragraph:
      "The hype is real, but so are the footguns. We audit six common RSC anti-patterns — including the waterfall trap, context API breakage, and why your bundle size might actually increase.",
    image: "/images/blog/blog-react-rsc.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Engineering Team",
    },
    tags: ["react"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "Django REST Framework to FastAPI: A Migration Playbook",
    paragraph:
      "We migrated a 200-endpoint DRF API to FastAPI over 8 weeks — zero breaking changes, 3× throughput improvement. This is the exact branch strategy, Pydantic schema mapping, and auth refactor we used.",
    image: "/images/blog/blog-fastapi-migration.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Backend Team",
    },
    tags: ["django"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "Offline-First Flutter Apps: SQLite, Drift & Smart Sync Queues",
    paragraph:
      "Building for Tier-2 India means your app must work on 2G. We detail our offline-first architecture using Drift ORM, conflict-resolution strategies, and background sync with WorkManager.",
    image: "/images/blog/blog-flutter-offline.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Mobile Team",
    },
    tags: ["flutter"],
    publishDate: "2025",
  },
  {
    id: 7,
    title: "Designing a React Component Library That Teams Actually Use",
    paragraph:
      "Internal design systems fail because of DX, not design. We cover our token architecture, Storybook-driven development workflow, and the versioning strategy that stopped breaking changes cold.",
    image: "/images/blog/blog-react-design-system.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Frontend Team",
    },
    tags: ["react"],
    publishDate: "2025",
  },
  {
    id: 8,
    title: "Next.js ISR + Webhooks: The Content Architecture Behind Fast Storefronts",
    paragraph:
      "How we reduced page build times from 22 minutes to 38 seconds for a 90,000-product catalogue using On-Demand ISR, edge caching, and a webhook fan-out pattern with Redis.",
    image: "/images/blog/blog-nextjs-isr.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Engineering Team",
    },
    tags: ["next.js"],
    publishDate: "2025",
  },
  {
    id: 9,
    title: "Django Celery + Redis: Architecting Reliable Background Job Pipelines",
    paragraph:
      "Task retries, dead-letter queues, ETA scheduling, and chord/chord-error handling — the patterns that keep our async pipelines processing 2M+ jobs per day without silent failures.",
    image: "/images/blog/blog-django-celery.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Backend Team",
    },
    tags: ["django"],
    publishDate: "2025",
  },
  {
    id: 10,
    title: "Flutter Platform Channels: Bridging Dart and Native iOS/Android Code",
    paragraph:
      "Sometimes the plugin you need does not exist. We walk through building a custom MethodChannel for BLE communication, handling threading on both sides, and writing tests that mock native calls.",
    image: "/images/blog/blog-flutter-platform.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Mobile Team",
    },
    tags: ["flutter"],
    publishDate: "2025",
  },
  {
    id: 11,
    title: "Concurrent React: useTransition, useDeferredValue and When to Reach for Each",
    paragraph:
      "Concurrent features are not just for huge lists. We show how we used useTransition to eliminate input jank on a complex filtering UI and useDeferredValue to keep charts responsive during re-renders.",
    image: "/images/blog/blog-react-concurrent.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Frontend Team",
    },
    tags: ["react"],
    publishDate: "2025",
  },
  {
    id: 12,
    title: "Securing Next.js APIs: JWT, Middleware Edge Auth & CSRF in One Stack",
    paragraph:
      "Edge Middleware intercepts before your lambdas even wake up. We detail our layered auth model — httpOnly cookies, JWT rotation, PKCE OAuth flow, and rate-limiting at the CDN edge with Upstash.",
    image: "/images/blog/blog-nextjs-auth.jpg",
    author: {
      name: "Tech Yugantar",
      image: "/images/blog/author-ty.png",
      designation: "Engineering Team",
    },
    tags: ["next.js"],
    publishDate: "2025",
  },
];

export default blogData;
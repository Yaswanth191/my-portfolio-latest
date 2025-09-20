import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Yaswanth",
  lastName: "Panchakarla",
  name: `Yaswanth Panchakarla`,
  role: "Software Engineer Associate",
  avatar: "/images/avatar.jpg",
  email: "yaswanthpanchakarla1@gmail.com",
  location: "Asia/Kolkata", // IANA time zone for India
  languages: ["English"], // Based on resume; add more if applicable
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Yaswanth191",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yaswanth-panchakarla-510530291/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable full-stack applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">LegalXpress</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/legalxpress-legal-document-management-system",
  },
  subline: (
    <>
      I'm Yaswanth Panchakarla, Software Engineer Associate at{" "}
      <strong>Blackcoffer</strong>, where I design and deploy scalable, secure, and data-driven applications.
      <br /> After hours, I build AI-powered projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Yaswanth Panchakarla is a Software Engineer Associate at Blackcoffer with experience in Full Stack Development and Cloud. Skilled at designing and deploying scalable, secure, and data-driven applications. Strong background in Python, Next.js, Supabase, AWS, and NLP models with proven ability to deliver production-grade solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Blackcoffer (OPC) Pvt. Ltd.",
        timeframe: "May 2025 – Present",
        role: "Software Engineer Associate",
        achievements: [
          <>
            Built role-based authentication and access control with Supabase Auth (SSR).
          </>,
          <>
            Designed and deployed document lifecycle workflows (create, draft, e-sign, billing, GST integration).
          </>,
          <>
            Engineered a template management system with DOCX uploads, placeholder extraction, and PDF generation.
          </>,
          <>
            Developed admin dashboards for analytics, pricing, and support ticketing.
          </>,
          <>
            Integrated WordPress APIs for blogs, services, and consumer testimonials.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/legalxpress/cover.jpg",
            alt: "LegalXpress Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "IBM SkillsBuild",
        timeframe: "Jun 2024 – Aug 2024",
        role: "Intern (AI & Frontend Development)",
        achievements: [
          <>
            Built an AI-powered chatbot and frontend web app as part of training.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sri Vasavi Engineering College",
        description: <>B.Tech – CSE (2020–2024)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Developing full-stack applications with Next.js, TypeScript, and TailwindCSS for intuitive UI.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TailwindCSS",
            icon: "tailwind",
          },
        ],
        images: [
          {
            src: "/images/projects/nextjs-project.jpg",
            alt: "Next.js Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Supabase",
        description: (
          <>Implementing real-time databases and authentication with Supabase.</>
        ),
        tags: [
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [],
      },
      {
        title: "Python",
        description: (
          <>Utilizing Python for backend development, NLP models, and scripting.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [
          {
            src: "/images/projects/python-project.jpg",
            alt: "Python Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
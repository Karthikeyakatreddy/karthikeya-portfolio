const config = {
  title: "Sri Sai Karthikeya Katreddy | Portfolio",
  description: {
    long: "Professional portfolio of Sri Sai Karthikeya Katreddy, a Computer Science Engineering graduate focused on Python, Machine Learning, AI, Cloud Computing, cybersecurity fundamentals, and modern web development.",
    short:
      "Portfolio of Sri Sai Karthikeya Katreddy, Computer Science Engineering graduate focused on Python, AI, ML, Cloud, and software development.",
  },
  keywords: [
    "Sri Sai Karthikeya Katreddy",
    "Karthikeya Katreddy",
    "Computer Science Engineer",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Data Analysis",
    "Web Development",
    "Next.js",
    "React",
    "Portfolio",
  ],
  author: "Sri Sai Karthikeya Katreddy",
  email: "SRISAIKARTHIKEYAKATREDDY@GMAIL.COM",
  phone: "+91 8500704493",
  education:
    "B.Tech in Computer Science & Engineering, DNR College of Engineering & Technology (JNTUK), Bhimavaram, Andhra Pradesh | CGPA: 7.74 | 2021 – 2025",
  site: "https://your-vercel-link.vercel.app",

  // for github stars button
  githubUsername: "Karthikeyakatreddy",
  githubRepo: "karthikeya-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/karthikeyakatreddy/",
    instagram: "",
    facebook: "",
    github: "https://github.com/Karthikeyakatreddy",
  },
};
export { config };

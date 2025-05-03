export const siteConfig = {
  name: 'Madhav Verma',
  title: 'Full Stack Developer',
  email: 'madhav.verma108@gmail.com',
  location: 'Bangalore, India',
  about: `Software Developer equipped with great coding, debugging and project management abilities. Accomplished project goals consistently with elegant,
scalable code. In-depth understanding of web technologies with focus on delivering innovative business solutions. Excel in fast-paced, high-energy
and deadline-driven environment with willingness to take on additional tasks.`,
  // profileImage : "https://drive.google.com/thumbnail?id=1lkyTwlMm5HN703H7wu5SB9lgigGFCaFN",
  profileImage : "https://lh3.googleusercontent.com/d/1lkyTwlMm5HN703H7wu5SB9lgigGFCaFN=s900?authuser=0",
  social: {
    github: 'https://github.com/Madhav243',
    linkedin: 'https://linkedin.com/in/madhavverma',
  },

  skills: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      category: 'Backend', 
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'AWS', 'Linux']
    }
  ],

  experience: [
    {
      company: 'InCred Financial Services',
      position: 'Software Engineer',
      duration: 'Aug 2024 - Present',
      description: [
        'Built and launched UBL and SCF LOS portals from scratch using Angular 18, driving faster onboarding and approval workflows—contributing to a ~35% increase in loan disbursal efficiency across SME verticals.',
        'Maintained and upgraded LAP legacy platform (Angular 5) by integrating new features and business flows, ensuring uninterrupted usage by 300+ internal users across Sales and Credit teams.',
        'Developed dynamic Angular Reactive Forms and business rule-driven validations using RxJS and PrimeNG, improving form accuracy and reducing Ops-side rework by ~25%.',
        'Architected reusable components and lazy-loaded modules, improving time-to-market for new LOS features and reducing page load time by ~40% across key journeys.',
        'Implemented seamless LOS-to-LMS (Loan Management System) data push integrations, helping reduce manual handoffs and boosting LMS conversion pipeline by ~30% in Q4 FY24.',
        'Enabled role-based workflows and access control for Ops, Sales, and Credit teams, leading to ~20% faster task completion and improved turnaround times on credit evaluations.',
      ]
    },
    {
      company: 'Paxcom India Pvt Ltd',
      position: 'Software Engineer',
      duration: 'Aug 2021 - Aug 2024', 
      link : 'https://profitnow.ai/login',
      description: [
        'Built and scaled a DIY e-commerce platform enabling SMEs (e.g., restaurants, grocery, electronics) to launch fully functional websites with product management, POS, and order tracking in minutes.',
        'Led the architecture and development of a web & mobile-compatible POS module, the product’s core USP, using Angular 14, RxJS, and Ng Zorro, resulting in a 90%+ adoption rate across businesses.',
        'Developed business-specific features (e.g., QR-scannable menus, combo/addon systems, real-time order notifications) using RxJS, Angular animations, and custom pipes, boosting user engagement by 30%.',
        'Applied RxJS patterns, Angular reactive forms, and stateful components to streamline onboarding workflows, reducing user drop-off during registration by ~20% (based on session analytics).',
        'Used GitLab CI/CD, Agile workflows, and code reviews to streamline development and deployment; mentored juniors on Angular best practices, boosting team velocity by 25%.',
      ]
    }
  ],

  projects: [
    {
      title: 'E-commerce Platform',
      description: 'Full stack e-commerce application with React, Node.js and PostgreSQL',
      link: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      link: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80'
    }
  ],

  education: [
    {
      school: 'DAV Institute of Engineering and Technology',
      degree: 'B.Tech Computer Science',
      duration: '2018 - 2022'
    }
  ]
};
export const siteConfig = {
  name: 'Madhav Verma',
  title: 'Full Stack Developer',
  email: 'madhav.verma108@gmail.com',
  location: 'Bangalore, India',
  about: `Senior Software Developer equipped with great coding, debugging and project management abilities. Accomplished project goals consistently with elegant,
scalable code. In-depth understanding of web technologies with focus on delivering innovative business solutions. Excel in fast-paced, high-energy
and deadline-driven environment with willingness to take on additional tasks.`,
  profileImage : "https://lh3.googleusercontent.com/d/1lkyTwlMm5HN703H7wu5SB9lgigGFCaFN=s900?authuser=0",
  social: {
    github: 'https://github.com/Madhav243',
    linkedin: 'https://linkedin.com/in/madhavverma',
  },
  resumeLink : "https://drive.google.com/file/d/18WCbnL_2k613QQCRQu8vpA7Uu_IcV1AC/view?usp=sharing",
  skills: [
    {
      category: 'Frontend',
      items: ['Angular2+','JavaScript' , 'React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      category: 'Backend', 
      items: ['Node.js', 'Python','ExpressJs' ,'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools',
      items: ['Git', 'AWS','Azure devops','Github', 'GitLab', 'Jira', 'Figma', 'Postman']
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
      title: 'Fittr - An Exercise App',
      description: 'The Fitness App is a React-based web application that helps users discover exercises by body part or name. It uses Material-UI for responsive design and React Router for seamless navigation. Exercise data, including instructions and visuals, is fetched from the ExerciseDB API. The app is fully responsive and deployed on Netlify for fast and reliable hosting.',
      link: 'https://github.com/Madhav243/fitness-app',
      image: 'https://github.com/Madhav243/fitness-app/blob/master/public/ss/home-1.png?raw=true'
    },
    {
      title: 'Chatzz - the Saas for students',
      description: 'Chatzz is an innovative web application that enables users to upload PDF files and engage in interactive conversations with their content. Built with Next.js 13, Prisma ORM, OpenAI API, and Stripe payment integration, the platform offers a seamless and intuitive user experience. Designed for efficiency and ease of use, Chatzz simplifies how users interact with and extract insights from their PDF documents.',
      link: 'https://github.com/Madhav243/chat-pdf',
      image: 'https://github.com/Madhav243/assets/blob/dev/images/chatzz-homepage.png?raw=true'
    },
    {
      title: 'Natours - A Tour Booking Website',
      description: 'Natours is a feature-rich tour booking website built using the MVC architecture with Node.js, Express, and MongoDB. It leverages PUG templating for dynamic and responsive UI rendering, ensuring a seamless user experience. The platform includes interactive elements, a responsive design, and an integrated payment gateway for secure and hassle-free bookings. Users can explore various tours, view detailed information, and make bookings effortlessly. With its clean layout, engaging visuals, and robust backend, Natours delivers a comprehensive and efficient solution for travel enthusiasts.',
      link: 'https://github.com/Madhav243/Natures',
      image: 'https://user-images.githubusercontent.com/58518192/72606801-7ebe0680-3949-11ea-8e88-613f022a64e5.gif'
    },
    {
      title : 'InstaBook - A Social Media App',
      description: 'InstaBook is a social media web application that allows users to create and share posts, follow friends, and engage with content. Built with EJS Template, Node.js, Express, and MongoDB, it features user authentication, real-time notifications, and a responsive design. Users can upload images, comment on posts, and receive updates on their feed. The app is designed for seamless interaction and community building.',
      link : 'https://github.com/Madhav243/Instabook',
      image : 'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
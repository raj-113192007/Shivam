export const PROFILE = {
  name: 'Shivam',
  title: 'Full-Stack Software Engineer & CSE Undergrad',
  college: 'Shivalik College of Engineering, Dehradun',
  degree: 'B.Tech in Computer Science & Engineering',
  batch: '2023 – 2027',
  cgpa: '8.8 / 10.0',
  location: 'Dehradun, Uttarakhand, India 🏔️',
  email: 'shivam.cse.shivalik@gmail.com',
  github: 'https://github.com/shivam-cse-shivalik',
  linkedin: 'https://linkedin.com/in/shivam-cse-dev',
  twitter: 'https://twitter.com/shivam_dev_cse',
  avatar: '/shivam_photo.jpg',
  status: '🟢 Available for SDE Internships & Software Roles',
  summary: 'Computer Science undergraduate at Shivalik College of Engineering, Dehradun with a passion for designing high-performance distributed web applications, robust cloud microservices, and AI-driven systems. Proven track record in competitive programming (450+ problems solved) and national hackathon leadership.'
};

export const STATS = [
  { label: 'LeetCode & DSA Solved', value: 450, suffix: '+' },
  { label: 'Full-Stack Projects Built', value: 14, suffix: '+' },
  { label: 'Hackathon Podiums & Wins', value: 4, suffix: '' },
  { label: 'Academic CGPA', value: 8.8, suffix: ' / 10', isFloat: true },
];

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: [
      { name: 'C++', level: 92, icon: '⚡', category: 'Core DSA' },
      { name: 'JavaScript (ES6+)', level: 95, icon: '🟨', category: 'Web' },
      { name: 'TypeScript', level: 90, icon: '🔷', category: 'Type Safety' },
      { name: 'Python', level: 88, icon: '🐍', category: 'AI & Scripting' },
      { name: 'Java', level: 85, icon: '☕', category: 'OOP & Backend' },
      { name: 'SQL', level: 88, icon: '🗄️', category: 'Relational DB' },
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    skills: [
      { name: 'React.js 18', level: 95, icon: '⚛️', category: 'UI Framework' },
      { name: 'Next.js 14 (App Router)', level: 90, icon: '▲', category: 'SSR & Fullstack' },
      { name: 'Tailwind CSS', level: 96, icon: '🎨', category: 'Styling' },
      { name: 'Redux Toolkit & Zustand', level: 88, icon: '🔄', category: 'State Management' },
      { name: 'Framer Motion', level: 86, icon: '✨', category: 'Kinetic Animations' },
      { name: 'HTML5 / Semantic Web', level: 98, icon: '🌐', category: 'Accessibility' },
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Systems',
    skills: [
      { name: 'Node.js & Express', level: 92, icon: '🟢', category: 'RESTful Services' },
      { name: 'FastAPI (Python)', level: 86, icon: '⚡', category: 'Async APIs' },
      { name: 'WebSockets & Socket.io', level: 88, icon: '🔌', category: 'Real-Time Telemetry' },
      { name: 'PostgreSQL & Supabase', level: 90, icon: '🐘', category: 'Relational Database' },
      { name: 'MongoDB & Mongoose', level: 92, icon: '🍃', category: 'Document Store' },
      { name: 'Redis Cache', level: 84, icon: '🔴', category: 'In-Memory Cache' },
    ]
  },
  {
    id: 'devops',
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Docker & Containers', level: 88, icon: '🐳', category: 'Containerization' },
      { name: 'Git & GitHub Workflows', level: 94, icon: '🐙', category: 'Version Control' },
      { name: 'AWS (S3, EC2, Lambda)', level: 82, icon: '☁️', category: 'Cloud Infrastructure' },
      { name: 'Linux / Bash Scripting', level: 88, icon: '🐧', category: 'OS & CLI' },
      { name: 'Vercel / Render Deployment', level: 95, icon: '🚀', category: 'CI/CD Pipelines' },
      { name: 'Postman API Testing', level: 90, icon: '📮', category: 'API QA' },
    ]
  },
  {
    id: 'core_cs',
    name: 'Computer Science Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', level: 94, icon: '🧩', category: 'Optimization' },
      { name: 'Database Management Systems', level: 90, icon: '💾', category: 'Normalization & ACID' },
      { name: 'Operating Systems & Concurrency', level: 86, icon: '⚙️', category: 'Threads & Memory' },
      { name: 'Computer Networks', level: 88, icon: '📡', category: 'TCP/IP, HTTP/3' },
      { name: 'System Design Basics', level: 84, icon: '📐', category: 'Scalability' },
      { name: 'Object-Oriented Design', level: 92, icon: '🎯', category: 'Design Patterns' },
    ]
  }
];

export const PROJECTS = [
  {
    id: 'campusflow',
    title: 'CampusFlow - Smart College ERP & Attendance Automation',
    shortDesc: 'End-to-end campus automation platform built for Shivalik College of Engineering with dynamic QR biometric verification, exam results portal, and instant fee receipts.',
    fullDesc: 'CampusFlow was designed to replace tedious paper-based campus tracking with a real-time microservices portal. Features time-based rotating QR code generation for proxy-proof student attendance, automated leave request workflows, and instant faculty SMS alerts.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'JWT Auth'],
    category: 'Full-Stack Web',
    featured: true,
    github: 'https://github.com/shivam-cse-shivalik/campusflow-erp',
    liveDemo: 'https://campusflow-shivalik.vercel.app',
    stats: {
      users: '2,400+ Active Students & Faculty',
      latency: 'Sub-80ms Attendance Check-in',
      uptime: '99.9% Cloud Uptime'
    },
    highlights: [
      'Engineered rolling HMAC-SHA256 encrypted QR codes refreshing every 10 seconds to eliminate proxy attendance',
      'Built automated role-based access control (RBAC) supporting Students, Faculty, HODs, and Deans',
      'Integrated real-time push notifications via WebSockets for urgent campus notices and timetable updates',
      'Deployed on Vercel and MongoDB Atlas with automated weekly DB backups'
    ]
  },
  {
    id: 'vortiqen-transit',
    title: 'VortiQen AI - School & Bus Safety Telemetry Engine',
    shortDesc: 'Live high-concurrency student transport tracking system with GPS telemetry streaming, speed violation radar, and automated geofenced parent alerts.',
    fullDesc: 'Developed a robust real-time tracking engine for institutional transit fleets across Dehradun mountainous routes. Implemented WebSocket pub/sub telemetry streaming and emergency SOS automated dispatch.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js 14', 'Python FastAPI', 'WebSockets', 'Leaflet GIS', 'Redis', 'PostgreSQL'],
    category: 'AI & Real-Time GIS',
    featured: true,
    github: 'https://github.com/shivam-cse-shivalik/vortiqen-fleet-telemetry',
    liveDemo: 'https://vortiqen-transit.vercel.app',
    stats: {
      refreshRate: '500ms Real-Time GPS Pings',
      busesTracked: '45+ Institutional Buses',
      alertSpeed: '< 1s SOS Dispatch'
    },
    highlights: [
      'Architected async Python FastAPI backend utilizing Redis Pub/Sub for sub-second GPS coordinate broadcasts',
      'Implemented custom polygon geofencing algorithms in Leaflet.js to notify parents 5 minutes before bus arrival',
      'Designed a sleek dark/light driver telemetry UI displaying live engine speed, battery health, and route progress'
    ]
  },
  {
    id: 'codesphere',
    title: 'CodeSphere - Real-Time Collaborative Cloud IDE',
    shortDesc: 'Browser-based pair-programming workspace with Monaco Editor, live multi-cursor synchronization, and Docker-isolated code execution sandboxes.',
    fullDesc: 'CodeSphere allows remote developer teams and college peers to code together seamlessly. Includes containerized isolated runners supporting C++, Python, Java, and JavaScript with instant stdout/stderr output.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'Docker', 'Node.js', 'WebRTC', 'Monaco Editor', 'Tailwind'],
    category: 'Developer Tools',
    featured: true,
    github: 'https://github.com/shivam-cse-shivalik/codesphere-cloud-ide',
    liveDemo: 'https://codesphere-ide.vercel.app',
    stats: {
      languages: '8+ Compilers Supported',
      syncTime: '15ms Multi-Cursor Latency',
      containers: 'Isolated Docker Sandboxes'
    },
    highlights: [
      'Integrated Monaco Editor (VS Code core) with operational transformation (OT) for smooth multi-user editing',
      'Constructed secure Docker execution workers with memory and CPU quota limits to prevent infinite loop exploits',
      'Built in-browser terminal emulation with custom themes, font ligatures, and code snippet export'
    ]
  },
  {
    id: 'healthsync-ai',
    title: 'HealthSync - AI Clinical Decision Assistant',
    shortDesc: 'Intelligent healthcare triage assistant integrating PubMed and ChEMBL APIs with bio-medical NLP for symptom analysis and drug interaction checks.',
    fullDesc: 'An intelligent medical assistant built during the State Hackathon. Uses fine-tuned biomedical embeddings to match clinical symptoms with known pathologies and warns patients against dangerous drug-drug contraindications.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    tags: ['Python', 'PyTorch', 'FastAPI', 'React.js', 'ChEMBL API', 'PubMed API', 'Tailwind'],
    category: 'AI & Healthcare',
    featured: false,
    github: 'https://github.com/shivam-cse-shivalik/healthsync-ai-assistant',
    liveDemo: 'https://healthsync-ai.vercel.app',
    stats: {
      accuracy: '94.2% Triage Correlation',
      dbRecords: '50,000+ Drug Interactions',
      latency: '240ms Inference Time'
    },
    highlights: [
      'Connected OpenFDA and ChEMBL chemical database to compute potential active ingredient conflicts',
      'Implemented explainable AI output badges detailing scientific citation links for each recommended specialist',
      'Built patient vitals tracking dashboard with exportable doctor summary PDF'
    ]
  },
  {
    id: 'krypzen-vault',
    title: 'KrypZen - Web3 Zero-Knowledge Degree Vault',
    shortDesc: 'Decentralized verifiable academic credential system enabling universities to issue tamper-proof digital transcripts on Polygon blockchain.',
    fullDesc: 'Built to eradicate fake academic degrees and lengthy background verification cycles. Allows universities like Shivalik College to cryptographically sign student degrees onto IPFS and smart contracts.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=80',
    tags: ['Solidity', 'Ethers.js', 'Polygon Amoy', 'IPFS', 'React.js', 'Tailwind CSS'],
    category: 'Web3 & Security',
    featured: false,
    github: 'https://github.com/shivam-cse-shivalik/krypzen-credential-vault',
    liveDemo: 'https://krypzen-vault.vercel.app',
    stats: {
      gasCost: 'Zero Gas on L2 Polygon',
      verification: 'Instant QR Proof in 0.2s',
      storage: 'Decentralized IPFS Pinning'
    },
    highlights: [
      'Authored ERC-721 non-transferable Soulbound Token (SBT) smart contracts with registrar cryptographic minting',
      'Created one-click recruiter verification portal requiring zero crypto wallet setup for HR teams'
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Smart India Hackathon (SIH) 2025 Finalist',
    organization: 'Ministry of Education & AICTE, Govt. of India',
    date: '2025',
    desc: 'Led a 6-member student engineering team representing Shivalik College of Engineering, building an automated disaster response logistics portal.',
    badge: 'National Finalist 🏆',
    color: 'emerald'
  },
  {
    id: 2,
    title: '1st Runner Up - Uttarakhand State Tech Summit',
    organization: 'Uttarakhand Technical University (UTU)',
    date: '2024',
    desc: 'Awarded ₹25,000 cash prize for VortiQen Transit telemetry tracking platform built for public mountain safety.',
    badge: 'State Rank 2 🥈',
    color: 'indigo'
  },
  {
    id: 3,
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services (AWS)',
    date: '2024',
    desc: 'Validated expertise in cloud computing architecture, AWS IAM security, EC2/S3 compute infrastructure, and serverless Lambda paradigms.',
    badge: 'AWS Certified ☁️',
    color: 'amber'
  },
  {
    id: 4,
    title: 'LeetCode 400+ DSA Milestone & Knight Badge',
    organization: 'LeetCode & GeeksforGeeks',
    date: '2023 – Present',
    desc: 'Consistently solved problems in Dynamic Programming, Graphs, Trees, and System Architecture with top 8% contest rating.',
    badge: 'Knight ⚔️ (1850+ Rating)',
    color: 'cyan'
  }
];

export const EDUCATION = [
  {
    institution: 'Shivalik College of Engineering, Dehradun',
    degree: 'Bachelor of Technology (B.Tech) - Computer Science & Engineering',
    period: '2023 – 2027 (Expected)',
    score: 'CGPA: 8.8 / 10.0',
    location: 'Dehradun, Uttarakhand',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (C++/Java)',
      'Database Management Systems',
      'Operating Systems & Linux Kernel',
      'Computer Networks & Protocols',
      'Software Engineering & Agile',
      'Cloud Architecture & DevOps'
    ],
    highlights: [
      'Technical Lead @ Shivalik Coding Club & Campus Hackathon Mentor',
      'Organized 2 campus-wide hackathons with 300+ participants',
      'Academic Excellence Scholarship recipient in 1st & 2nd Year'
    ]
  },
  {
    institution: 'Kendriya Vidyalaya / Senior Secondary School',
    degree: 'Higher Secondary Certificate (Class XII - PCM & Computer Science)',
    period: '2021 – 2023',
    score: '92.4% Aggregate',
    location: 'Dehradun, Uttarakhand',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science (Python & SQL)'],
    highlights: ['School Topper in Computer Science (98/100)']
  }
];

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  • about      - Learn about Shivam & his engineering background
  • college    - Details about Shivalik College of Engineering, Dehradun
  • skills     - View tech stack & proficiency breakdown
  • projects   - List featured full-stack & AI software projects
  • education  - Academic credentials, coursework & CGPA
  • stats      - LeetCode DSA, project count & hackathon wins
  • contact    - Get email, LinkedIn, and GitHub coordinates
  • resume     - Open formatted interactive resume
  • clear      - Clear terminal screen
  • sudo hire shivam - Discover why hiring Shivam is a winning move!`,

  about: `👨‍💻 Shivam | Full-Stack Software Engineer & CSE Undergrad
🎓 Shivalik College of Engineering, Dehradun (B.Tech CSE, 2023-2027)
📍 Dehradun, Uttarakhand, India (Foothills of Himalayas)
💡 Passionate about distributed web systems, real-time telemetry, and clean architecture.
🏆 Smart India Hackathon Finalist | 450+ LeetCode DSA Solved | CGPA 8.8`,

  college: `🏛️ SHIVALIK COLLEGE OF ENGINEERING, DEHRADUN
• Affiliation: Uttarakhand Technical University (UTU) & AICTE Approved
• Campus: Shimla Bypass Road, Shiniwala, Dehradun, Uttarakhand
• Program: Bachelor of Technology (B.Tech) in Computer Science & Engineering
• Shivam's Role: Student Lead @ Coding Club & Full-Stack Campus Developer`,

  skills: `⚡ SHIVAM'S TECH STACK MATRIX:
• Languages:    C++, JavaScript (ES6+), TypeScript, Python, Java, SQL
• Frontend:     React.js, Next.js 14, Tailwind CSS, Redux Toolkit, Framer Motion
• Backend:      Node.js, Express, FastAPI (Python), WebSockets, REST APIs
• Databases:    PostgreSQL, MongoDB, Redis, Supabase, Prisma ORM
• Cloud/DevOps: Docker, AWS (S3, EC2, Lambda), Linux / Bash, Git, Vercel
• Core CS:      DSA, System Design Basics, DBMS, OS, Computer Networks`,

  projects: `🚀 FEATURED SOFTWARE PROJECTS:
1. CampusFlow        - Smart College ERP & Rolling QR Biometric Attendance
2. VortiQen AI       - High-Concurrency Transit & Bus Telemetry Dashboard
3. CodeSphere        - Real-Time Collaborative Cloud IDE with Docker Runners
4. HealthSync        - Clinical Decision Assistant with ChEMBL/PubMed APIs
5. KrypZen           - Web3 Degree Transcripts Vault on Polygon

(Type 'project <name>' or click on the Projects section to test live demos!)`,

  education: `🎓 ACADEMIC BACKGROUND:
• B.Tech in CSE: Shivalik College of Engineering, Dehradun (2023-2027) - CGPA: 8.8/10
• Class XII PCM: Senior Secondary School, Dehradun - 92.4% (CS Score: 98/100)`,

  stats: `📊 LIVE METRICS & STATS:
• LeetCode DSA:     450+ Problems Solved (Knight 1850+ Rating)
• Full-Stack Apps:  14+ Deployed Production Projects
• Hackathon Wins:   4 Podiums (SIH 2025 Finalist, State Rank 2)
• Academic CGPA:    8.8 / 10.0 @ Shivalik College of Engineering`,

  contact: `📬 REACH OUT TO SHIVAM:
• Email:    shivam.cse.shivalik@gmail.com
• LinkedIn: linkedin.com/in/shivam-cse-dev
• GitHub:   github.com/shivam-cse-shivalik
• Twitter:  @shivam_dev_cse
• Location: Dehradun, Uttarakhand, India`,

  'sudo hire shivam': `🚀 EXCELLENT DECISION!
Shivam brings:
✓ Strong Computer Science fundamentals & clean code ethics
✓ High-speed execution with modern React, Next.js, Node.js & Cloud
✓ Proven problem-solving ability (450+ DSA & SIH Finalist)
✓ Hunger to learn, adapt, and ship impact-driven software!

Drop an email to shivam.cse.shivalik@gmail.com to schedule an interview!`
};

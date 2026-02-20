import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Lancelot MELLANO',
    // photo : auto-détectée depuis public/images/ — ne pas renseigner ici
    photoBackEmoji: '🌊',
    title: {
      fr: 'Étudiant ingénieur (SI & Cybersécurité)',
      en: 'Engineering student (Information Systems & Cybersecurity)',
    },
    subtitle: {
      fr: 'Disponible pour un stage international (juin–août)',
      en: 'Available for an international internship (Jun–Aug)',
    },
    location: 'Brest, France',
  },
  seo: {
    title: 'Lancelot MELLANO — CV interactif',
    description: 'CV interactif de Lancelot Mellano, étudiant ingénieur (SI & cybersécurité), en alternance.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Lancelot Mellano', href: 'https://www.linkedin.com/in/lancelotmellano/' },
    { type: 'website', label: 'Portfolio', href: 'https://lancelot-mellano-portfolio.netlify.app/' },
    { type: 'email', label: 'lancelot.mellano@gmail.com' },
    { type: 'phone', label: 'Disponible sur demande' },
    { type: 'location', label: 'Brest, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B2', en: 'B2' } },
      ],
    },
    {
      title: { fr: 'Domaines', en: 'Domains' },
      type: 'text',
      items: [
        { name: { fr: 'Systèmes d\'information, cybersécurité, automatisation, infrastructures numériques', en: 'Information systems, cybersecurity, automation, digital infrastructures' } },
        { name: { fr: 'Analyse de données, outils de reporting, solutions numériques (appui à des projets)', en: 'Data analysis, reporting tools, digital solutions (project support)' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft skills' },
      type: 'text',
      items: [
        { name: { fr: 'Leadership et encadrement', en: 'Team leadership and supervision' } },
        { name: { fr: 'Autonomie et fiabilité', en: 'Autonomy & reliability' } },
        { name: { fr: 'Transmission de connaissances', en: 'Teaching and knowledge transfer' } },
        { name: { fr: 'Méthodique', en: 'Methodical' } },
        { name: { fr: 'Organisation et sens des responsabilités', en: 'Organization and responsibility' } },
        { name: { fr: 'Adaptabilité', en: 'Adaptability' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'naval-group',
      company: { fr: 'Naval Group', en: 'Naval Group' },
      role: { fr: 'Ingénieur DevSecOps (alternance)', en: 'DevSecOps Engineer (Work-Study)' },
      period: { fr: '2025 - 2028', en: '2025 - 2028' },
      description: {
        fr: 'Contribution à l\'automatisation et à la fiabilité des systèmes d\'information, avec partage de connaissances et amélioration continue.',
        en: 'Contributed to the automation and reliability of information systems, with knowledge sharing and continuous improvement.',
      },
      techs: [],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Mission en alternance, centrée sur l\'amélioration de la fiabilité des SI et la collaboration entre équipes.',
          en: 'Work-study role focused on improving IS reliability and cross-team collaboration.',
        },
        tasks: {
          fr: [
            'Contribution à l\'automatisation et à la fiabilité des systèmes d\'information',
            'Rôle de liaison entre équipes, favorisant les retours et le partage d\'expérience',
            'Participation à des initiatives de résolution collective de problèmes',
          ],
          en: [
            'Contributed to the automation and reliability of information systems',
            'Acted as a bridge between teams, encouraging feedback and experience sharing',
            'Participated in knowledge sharing and collective problem-solving initiatives',
          ],
        },
        env: {
          fr: 'Systèmes d\'information / DevSecOps / Automatisation',
          en: 'Information systems / DevSecOps / Automation',
        },
      },
    },
    {
      id: 'sainte-maxime',
      company: { fr: 'Mairie de Sainte-Maxime', en: 'City of Sainte-Maxime' },
      role: { fr: 'Administrateur systèmes & SI (alternance)', en: 'IT & Systems Administrator (Work-Study)' },
      period: { fr: '2024 - 2025', en: '2024 - 2025' },
      description: {
        fr: 'Participation à l\'exploitation, la supervision, la sécurisation et l\'amélioration de la fiabilité du SI au quotidien.',
        en: 'Contributed to operating, monitoring, securing, and improving daily information system reliability.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Organisation publique : missions SI orientées exploitation, sécurité et accompagnement des utilisateurs.',
          en: 'Public organization: IS operations, security, and user support.',
        },
        tasks: {
          fr: [
            'Participation à la supervision, la sécurisation et l\'amélioration de la fiabilité du SI',
            'Conception et animation de sessions de sensibilisation aux usages numériques et aux risques cybersécurité (30–40 personnes), adaptées à un public non technique',
          ],
          en: [
            'Participated in monitoring, securing, and improving daily information system reliability',
            'Designed and delivered training and awareness sessions on digital usage and cybersecurity risks (30–40 users), adapted to non-technical audiences',
          ],
        },
        env: {
          fr: 'Administration SI / Fiabilité / Sécurité / Sensibilisation',
          en: 'IT administration / Reliability / Security / Awareness',
        },
      },
    },
    {
      id: '21e-rima',
      company: { fr: '21e RIMa', en: '21st Marine Infantry Regiment' },
      role: { fr: 'Militaire réserviste (caporal)', en: 'Army Reserve Soldier (corporal)' },
      period: { fr: '2023 - 2028', en: '2023 - 2028' },
      description: {
        fr: 'Engagement dans des missions nationales, avec discipline, responsabilité, esprit d\'équipe et sens du service.',
        en: 'Served as a reserve soldier, contributing to national missions while upholding discipline, responsibility, teamwork, and service.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Réserve : encadrement, transmission et cohésion au sein du groupe.',
          en: 'Reserve duty: leadership, knowledge transfer, and team cohesion.',
        },
        tasks: {
          fr: [
            'Encadrement et instruction : transmission de connaissances et accompagnement de la progression de soldats juniors',
            'Supervision de séances d\'entraînement et d\'instruction, en assurant cohésion, motivation et progression via un coaching structuré',
          ],
          en: [
            'Acted as a team leader and instructor, transmitting knowledge and supporting junior soldiers\' learning progression',
            'Supervised physical training and instructional sessions, ensuring cohesion and progress through structured coaching',
          ],
        },
        env: {
          fr: 'Leadership / Instruction / Entraînement / Cohésion',
          en: 'Leadership / Instruction / Training / Cohesion',
        },
      },
    },
    {
      id: 'math-tutor',
      company: { fr: 'Cours particuliers', en: 'Private tutoring' },
      role: { fr: 'Professeur particulier de mathématiques', en: 'Private Mathematics Tutor' },
      period: { fr: '2023 - 2025', en: '2023 - 2025' },
      description: {
        fr: 'Cours individuels de mathématiques pour collégiens, adaptés au niveau et au rythme de chaque élève.',
        en: 'One-on-one mathematics tutoring for middle school students, adapted to each student\'s level and pace.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Accompagnement pédagogique individualisé, centré sur la progression et la confiance.',
          en: 'Individualized support focused on progress and confidence-building.',
        },
        tasks: {
          fr: [
            'Adaptation des méthodes d\'apprentissage au niveau et au rythme de l\'élève',
            'Aide à reprendre confiance, améliorer les résultats et développer l\'autonomie',
          ],
          en: [
            'Adapted teaching methods to each student\'s level and learning pace',
            'Helped students regain confidence, improve results, and develop autonomy',
          ],
        },
        env: {
          fr: 'Pédagogie / Suivi individuel / Mathématiques',
          en: 'Teaching / 1:1 support / Mathematics',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'IMT Atlantique', en: 'IMT Atlantique' },
      degree: { fr: 'Diplôme d\'ingénieur', en: 'Master of Engineering' },
      specialty: { fr: 'Informatique, Réseaux & Télécommunications', en: 'Computer Science, Networks & Telecommunications' },
      period: '2025 - 2028',
    },
    {
      school: { fr: 'IUT Nice Côte d\'Azur', en: 'University Institute of Technology (IUT) Nice Côte d\'Azur' },
      degree: { fr: 'BUT Réseaux & Télécommunications', en: 'Bachelor of Technology in Networks & Telecommunications' },
      specialty: { fr: 'Parcours cybersécurité', en: 'Cybersecurity track' },
      period: '2023 - 2025',
    },
  ],
  theme: { preset: 'minimal' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'WORK EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. :', en: 'Env:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
    },
  },
}

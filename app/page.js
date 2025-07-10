"use client";
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Globe, 
  Calendar,
  MapPin,
  Trophy,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Star,
  Zap,
  Heart,
  Terminal,
  Palette,
  Layers,
  Sparkles,
  ArrowRight,
  Users,
  Target,
  Award
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: [
      { name: 'React.js', level: 90, icon: <Layers className="w-5 h-5" /> },
      { name: 'Next.js', level: 85, icon: <Globe className="w-5 h-5" /> },
      { name: 'JavaScript', level: 88, icon: <Code className="w-5 h-5" /> },
      { name: 'Tailwind CSS', level: 85, icon: <Palette className="w-5 h-5" /> },
      { name: 'HTML/CSS', level: 92, icon: <Terminal className="w-5 h-5" /> }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: <Server className="w-5 h-5" /> },
      { name: 'Express.js', level: 83, icon: <Server className="w-5 h-5" /> },
      { name: 'MongoDB', level: 80, icon: <Database className="w-5 h-5" /> },
      { name: 'MySQL', level: 82, icon: <Database className="w-5 h-5" /> }
    ],
    tools: [
      { name: 'Git/GitHub', level: 85, icon: <Github className="w-5 h-5" /> },
      { name: 'VS Code', level: 90, icon: <Code className="w-5 h-5" /> },
      { name: 'Postman', level: 80, icon: <Globe className="w-5 h-5" /> },
      { name: 'Docker', level: 70, icon: <Server className="w-5 h-5" /> }
    ]
  };

  const projects = [
    {
      title: 'Gateway Simplification',
      description: 'Developed a dynamic API to streamline payment gateway integration process, making it easier for customers to connect their websites with various payment services.',
      tech: ['React', 'Next.js', 'OpenCart', 'Laravel'],
      category: 'Full Stack',
      image: '🔄',
      achievements: ['Improved integration time by 60%', 'Enhanced system scalability', 'Comprehensive SDLC implementation']
    },
    {
      title: 'Website Builder Platform',
      description: 'Built a platform that allows users to edit website content in real-time with features for adding products and customizing headers and footers.',
      tech: ['JavaScript', 'React.js', 'Ant Design', 'MySQL'],
      category: 'Full Stack',
      image: '🌐',
      achievements: ['Real-time content editing', 'Dynamic product management', 'Responsive design system']
    },
    {
      title: 'Music Library Management',
      description: 'Developed a comprehensive backend system for music library management with role-based access control, JWT authentication, and CRUD operations.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      category: 'Backend',
      image: '🎵',
      achievements: ['Role-based access control', 'JWT authentication', 'RESTful API design'],
      link: 'https://github.com/govindgb/-Music-Library-Management'
    },
    {
      title: 'Dynamic Blog Application',
      description: 'Developed a responsive blog application with real-time comment system using Socket.IO integration.',
      tech: ['React', 'Node.js', 'Socket.IO', 'Ant Design'],
      category: 'Full Stack',
      image: '📝',
      achievements: ['Real-time comments', 'Image upload functionality', 'Form validation']
    }
  ];

  const experience = [
    {
      company: 'Marensolution',
      position: 'Full Stack Developer',
      period: 'Aug 2024 - Present',
      location: 'Current Position',
      description: 'Currently working on full-stack development projects using modern technologies.',
      achievements: ['Working on cutting-edge projects', 'Implementing latest technologies', 'Contributing to scalable solutions']
    },
    {
      company: 'Fathershops',
      position: 'Full Stack Software Engineer',
      period: 'Apr 2023 - Jul 2024',
      location: 'Dehradun',
      description: 'Developed multiple full-stack applications including payment gateway integration, website builder, and extension integrations.',
      achievements: ['Built payment gateway API', 'Created website builder platform', 'Integrated multiple third-party services']
    },
    {
      company: 'Dream Carrier',
      position: 'Frontend Developer',
      period: 'Apr 2023 - Jul 2024',
      location: 'Remote',
      description: 'Built tailored office management tools including employee attendance trackers and project progress dashboards.',
      achievements: ['Streamlined workflows', 'Created responsive designs', 'Improved user experience']
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Govind_Bhatt_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          }}
        />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Govind Bhatt
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 animate-pulse">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-bold">
                GB
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Full Stack
            <br />
            Software Engineer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building innovative web solutions with modern technologies. 
            Passionate about creating scalable applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <Heart className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/govindgb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/govind-bhatt-a64b40202/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:govindbhattpnd@gmail.com?subject=Portfolio%20Inquiry" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/Govind0007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Trophy className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate developer with expertise in full-stack development and modern web technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a dedicated Full Stack Software Engineer with over 1.5 years of experience building 
                innovative web applications. My journey in software development has been driven by a 
                passion for creating solutions that make a real impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in the MERN stack and have worked with companies like Fathershops and 
                Marensolution, where I've contributed to projects ranging from payment gateway integrations 
                to comprehensive website builders.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">India</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">1.5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Available for Projects</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-400" />
                  What I Do
                </h3>
                <div className="space-y-3">
                  {[
                    'Full Stack Web Development',
                    'API Development & Integration',
                    'Database Design & Management',
                    'Payment Gateway Integration',
                    'Real-time Applications'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-400" />
                  Education
                </h3>
                <div className="space-y-2">
                  <div className="font-medium">Bachelor's in Computer Science</div>
                  <div className="text-gray-400">RSR Rungta College</div>
                  <div className="text-gray-400 text-sm">2017 - 2021 | GPA: 7.85/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <h3 className="text-xl font-semibold mb-6 capitalize text-center">
                  {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : 'Tools'}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-400">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Some of the projects I've worked on recently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-400">Key Achievements:</h4>
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center space-x-2 text-sm">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    View on GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-gray-400 text-lg">
              My professional journey in software development
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{exp.position}</h3>
                    <div className="flex items-center space-x-2 text-gray-300 mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-400">Key Achievements:</h4>
                  <div className="grid gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2 text-sm">
                        <ChevronRight className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to collaborate on your next project? Let's talk!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:govindbhattpnd@gmail.com?subject=Portfolio%20Inquiry" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>govindbhattpnd@gmail.com</span>
                  </a>
                  <a href="tel:+919340307428" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span>+91 9340307428</span>
                  </a>
                  <a href="https://www.linkedin.com/in/govind-bhatt-a64b40202/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href="https://github.com/govindgb" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <Github className="w-5 h-5 text-gray-400" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <button 
                    onClick={handleDownloadResume}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </button>
                  <a href="https://leetcode.com/Govind0007" target="_blank" rel="noopener noreferrer" className="w-full bg-white/10 text-white p-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02]">
                    <Trophy className="w-4 h-4" />
                    <span>LeetCode Profile</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Send Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02]"
                >
                  <span>Send Message</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold">Govind Bhatt</span>
            </div>
            
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="https://github.com/govindgb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/govind-bhatt-a64b40202/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:govindbhattpnd@gmail.com?subject=Portfolio%20Inquiry" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/Govind0007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Trophy className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Govind Bhatt. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
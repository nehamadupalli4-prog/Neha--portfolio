import { useMemo, useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import AnimatedHero from './components/AnimatedHero'

const images = {
  hero:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=80',
  education:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  ai:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  data:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  software:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
}

const profile = {
  name: 'Neha Madupalli',
  title: 'Student',
  course: 'BTech Computer Science',
  college: 'Ramachandra College Of Engineering, Eluru',
  educationDates: 'Aug 2024 - Continue',
  location: 'Meerjapuram',
  email: 'nehamadupalli4@gmail.com',
  phone: '6303069849',
  linkedin:
    'https://www.linkedin.com/in/neha-madupalli-b54851354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  summary:
    'Motivated 2nd-year B.Tech CSE student seeking an internship in Data Science / AI / Software Development, looking to apply programming skills and learn from real-world projects.',
}

const skills = [
  { name: 'C', level: 82, group: 'Programming' },
  { name: 'Java', level: 78, group: 'Programming' },
  { name: 'Data Structures', level: 74, group: 'Core CS' },
]

const certifications = [
  {
    issuer: 'Simplilearn',
    title: 'C - Simplilearn',
    note: 'Programming foundation certificate focused on C language fundamentals.',
  },
  {
    issuer: 'Simplilearn, Scaler',
    title: 'Java - Simplilearn, Scaler',
    note: 'Java learning credential supporting software development fundamentals.',
  },
]

const metrics = [
  { value: '2nd', label: 'Year B.Tech CSE' },
  { value: '3', label: 'Core Skills' },
  { value: '2', label: 'Certifications' },
]

const highlights = [
  'Motivated 2nd-year B.Tech CSE student',
  'Seeking an internship in Data Science, AI, or Software Development',
  'Looking to apply programming skills',
  'Interested in learning from real-world projects',
]

const languages = ['Telugu', 'English']

const portfolioItems = [
  {
    title: 'AI Foundations',
    tag: 'AI',
    image: images.ai,
    icon: 'spark',
    description:
      'Building a practical foundation in artificial intelligence concepts for internship-ready learning.',
  },
  {
    title: 'Data Science Practice',
    tag: 'Data Science',
    image: images.data,
    icon: 'chart',
    description:
      'Developing data-focused thinking through analysis basics, logic building, and structured problem solving.',
  },
  {
    title: 'Software Development Readiness',
    tag: 'Software Development',
    image: images.software,
    icon: 'code',
    description:
      'Preparing to apply C, Java, and data structures knowledge in real-world software development work.',
  },

  // Real Projects

  {
    title: 'Full Stack Portfolio Website',
    tag: 'React + Node.js',
    image: images.software,
    icon: 'code',
    description:
      'A professional full-stack portfolio website built using React.js, Node.js, Express.js, MySQL, and Nodemailer. Includes responsive UI, contact form, email notifications, and admin dashboard.',
  },
  {
    title: 'Contact Management Dashboard',
    tag: 'Admin Panel',
    image: images.data,
    icon: 'chart',
    description:
      'Admin dashboard for viewing and managing contact messages. Includes login protection, message listing, delete functionality, and MySQL database integration.',
  },
  {
    title: 'Future Interns Projects',
    tag: 'Internship Work',
    image: images.ai,
    icon: 'spark',
    description:
      'Collection of internship projects developed during the Future Interns program, showcasing full-stack development, problem solving, and practical implementation skills.',
  },
]
const iconPaths = {
  education: 'M6 7.5 12 4l6 3.5-6 3.5-6-3.5Zm3 4.3v4.7c1.7 1 4.3 1 6 0v-4.7',
  list: 'M7 7h10M7 12h10M7 17h10M4 7h.01M4 12h.01M4 17h.01',
  skill: 'M12 3l2.4 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3Z',
  certificate: 'M7 4h10v8a5 5 0 1 1-10 0V4Zm3 15 2-1 2 1v3l-2-1-2 1v-3Z',
  language: 'M4 5h9M9 5c-.5 4.3-2.2 7-5 9M6.5 9c1.4 2.1 3.2 3.8 5.5 5M14 19l3-7 3 7M15.2 16h3.6',
  spark: 'M12 3l1.4 5.2L18.5 10l-5.1 1.8L12 17l-1.4-5.2L5.5 10l5.1-1.8L12 3Z',
  chart: 'M5 19V9M12 19V5M19 19v-7M4 19h17',
  code: 'M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14',
  contact: 'M4 6h16v12H4V6Zm1 1 7 6 7-6',
}

function Icon({ name }) {
  return (
    <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={iconPaths[name]} />
    </svg>
  )
}

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [navOpen, setNavOpen] = useState(false)
  const [activeSkill, setActiveSkill] = useState(skills[0])
  const [activePortfolio, setActivePortfolio] = useState(portfolioItems[0])
  const [formStatus, setFormStatus] = useState('')

  const hoverMotion = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.18, ease: 'easeOut' },
  }

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio enquiry for ${profile.name}`)
    const body = encodeURIComponent(
      `Hello Neha,\n\nMy name is ${form.name || '[Your name]'}.\n\n${form.message || '[Your message]'}\n\nReply email: ${form.email || '[Your email]'}`,
    )

    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }, [form])

  function updateForm(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setFormStatus('')
  }

 async function sendEmailNotification(event) {
  event.preventDefault()

  try {
    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    )

    const data = await response.json()

    if (data.success) {
      setFormStatus("Message sent successfully!")

      setForm({
        name: "",
        email: "",
        message: "",
      })
    } else {
      setFormStatus("Failed to send message.")
    }
  } catch (error) {
    console.error(error)
    setFormStatus("Server error. Please try again.")
  }
}

  return (
    <main>
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#home" className="brand">
          NM
        </a>
        <button
          className={"nav-toggle" + (navOpen ? ' open' : '')}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={"nav-links" + (navOpen ? ' open' : '')}>
          <a href="#resume">Resume</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <AnimatedHero>
          <div className="hero-content">
          <p className="eyebrow">Computer Science Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="role-line">
            {profile.course} student focused on AI, Data Science, and Software Development
          </p>
          <p className="lead">{profile.summary}</p>
          <div className="metrics" aria-label="Profile highlights">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <motion.a className="button primary" href="#contact" {...hoverMotion}>
              <Icon name="contact" />
              Contact Me
            </motion.a>
            <motion.a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer" {...hoverMotion}>
              LinkedIn
            </motion.a>
          </div>
          </div>
        </AnimatedHero>
        <aside className="hero-panel" aria-label="Profile snapshot">
          <figure className="hero-photo">
            <img src={images.hero} alt="Laptop workspace representing Neha's coding and study focus" />
          </figure>
          <p className="availability">Available for internships and entry-level learning opportunities</p>
          <div className="avatar" aria-hidden="true">
            {profile.name
              .split(' ')
              .map((part) => part[0])
              .join('')}
          </div>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section id="resume" className="section">
        <div className="section-heading">
          <p className="eyebrow">Interactive resume</p>
          <h2>Education, skills, and career direction</h2>
          <p>
            A concise resume overview built around Neha's academic path, programming
            strengths, certifications, and internship goals.
          </p>
        </div>

        <div className="resume-grid">
          <article className="panel education-panel">
            <span className="section-icon">
              <Icon name="education" />
            </span>
            <h3>Education</h3>
            <img
              className="panel-image"
              src={images.education}
              alt="Students collaborating with laptops in a college environment"
            />
            <p className="strong">{profile.college}</p>
            <p>{profile.course}</p>
            <p>{profile.educationDates}</p>
            <p>{profile.location}</p>
          </article>

          <article className="panel">
            <span className="section-icon">
              <Icon name="list" />
            </span>
            <h3>Highlights</h3>
            <ul className="clean-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel skills-panel">
            <span className="section-icon">
              <Icon name="skill" />
            </span>
            <h3>Skills</h3>
            <div className="skill-buttons" role="tablist" aria-label="Skill details">
              {skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  className={activeSkill.name === skill.name ? 'active' : ''}
                  type="button"
                  onClick={() => setActiveSkill(skill)}
                  {...hoverMotion}
                >
                  {skill.name}
                </motion.button>
              ))}
            </div>
            <div className="skill-meter" aria-live="polite">
              <div className="meter-header">
                <span>{activeSkill.group}</span>
                <strong>{activeSkill.level}%</strong>
              </div>
              <div className="meter-track">
                <span style={{ width: `${activeSkill.level}%` }}></span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section alt-section">
        <div className="section-heading">
          <p className="eyebrow">Credentials</p>
          <h2>Certifications and languages</h2>
          <p>Verified learning areas and communication languages from the resume.</p>
        </div>
        <div className="credential-grid">
          {certifications.map((certificate) => (
            <article className="certificate" key={certificate.issuer}>
              <Icon name="certificate" />
              <p>{certificate.issuer}</p>
              <h3>{certificate.title}</h3>
              <span>{certificate.note}</span>
            </article>
          ))}
          <article className="certificate languages">
            <Icon name="language" />
            <p>Languages</p>
            <h3>{languages.join(' and ')}</h3>
            <span>Available for professional communication and collaboration.</span>
          </article>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Professional Interests & Featured Projects</h2>
          <p>
  A combination of my professional interests and full-stack development
  projects, showcasing technical skills, problem solving, and practical
  implementation.
</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article
              className={activePortfolio.title === item.title ? 'project-card active' : 'project-card'}
              key={item.title}
            >
              <figure className="project-image">
                <img src={item.image} alt={`${item.title} visual`} />
              </figure>
              <span>{item.tag}</span>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <motion.button type="button" onClick={() => setActivePortfolio(item)} {...hoverMotion}>
                View Details
              </motion.button>
            </article>
          ))}
        </div>
        <aside className="portfolio-detail" aria-live="polite">
          <img src={activePortfolio.image} alt={`${activePortfolio.title} detailed visual`} />
          <div>
            <span>{activePortfolio.tag}</span>
            <h3>{activePortfolio.title}</h3>
            <p>{activePortfolio.description}</p>
          </div>
        </aside>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Start a professional conversation</h2>
          <p>
            Reach out for internships, student projects, freelance opportunities,
or software development collaborations. The form securely sends your
message to my database and email inbox.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendEmailNotification}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={updateForm}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateForm}
              placeholder="your@email.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={updateForm}
              placeholder="Write your message"
              rows="5"
              required
            />
          </label>
          <motion.button className="button primary full-width" type="submit" {...hoverMotion}>
            Send Email Notification
          </motion.button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </section>

      <footer className="site-footer">
        <p>{profile.name}</p>
        <span>{profile.course} - {profile.college}</span>
      </footer>
    </main>
  )
}

export default App

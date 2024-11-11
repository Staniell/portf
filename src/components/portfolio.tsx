"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoonIcon,
  SunIcon,
  X,
  FileCode,
  Server,
  Database,
  GitBranch,
  Briefcase,
} from "lucide-react";

const TimelineItem = ({ year, title, company, description, left }: any) => (
  <div className="mb-8 flex justify-between items-center w-full">
    {!left ? (
      <>
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-primary shadow-xl p-3 rounded-full">
          <h1 className="mx-auto font-semibold text-base text-primary-foreground">{year}</h1>
        </div>
        <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4 border-2">
          <h3 className="mb-3 font-bold text-primary text-xl">{title}</h3>
          <h4 className="mb-3 font-semibold text-sm text-muted-foreground">{company}</h4>
          <p className="text-sm leading-snug tracking-wide text-card-foreground text-opacity-100">{description}</p>
        </div>
      </>
    ) : (
      <>
        <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4 border-2">
          <h3 className="mb-3 font-bold text-primary text-xl">{title}</h3>
          <h4 className="mb-3 font-semibold text-sm text-muted-foreground">{company}</h4>
          <p className="text-sm leading-snug tracking-wide text-card-foreground text-opacity-100">{description}</p>
        </div>
        <div className="z-20 flex items-center order-1 bg-primary shadow-xl p-3 rounded-full">
          <h1 className="mx-auto font-semibold text-base text-primary-foreground">{year}</h1>
        </div>

        <div className="order-1 w-5/12"></div>
      </>
    )}
  </div>
);

export function PortfolioComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        {/* Header */}
        <header className="fixed w-full bg-background z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
            <a href="#" className="text-2xl font-bold">
              GB
            </a>
            <nav className="hidden md:flex md:flex-grow md:justify-center space-x-4">
              <a href="#about" className="hover:text-primary">
                About
              </a>
              <a href="#experience" className="hover:text-primary">
                Experience
              </a>
              <a href="#skills" className="hover:text-primary">
                Skills
              </a>
              {/* <a href="#projects" className="hover:text-primary">
                Projects
              </a> */}
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden bg-background py-4">
              <div className="container mx-auto px-4 flex flex-col space-y-2">
                <a href="#about" className="hover:text-primary" onClick={toggleMenu}>
                  About
                </a>
                <a href="#experience" className="hover:text-primary" onClick={toggleMenu}>
                  Experience
                </a>
                <a href="#skills" className="hover:text-primary" onClick={toggleMenu}>
                  Skills
                </a>
                <a href="#projects" className="hover:text-primary" onClick={toggleMenu}>
                  Projects
                </a>
                <a href="#contact" className="hover:text-primary" onClick={toggleMenu}>
                  Contact
                </a>
              </div>
            </nav>
          )}
        </header>

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <section id="about" className="py-20 bg-muted">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">Gio Staniell Belolo</h1>
              <p className="text-xl mb-8">Full-Stack Software Developer</p>
              <p className="max-w-2xl mx-auto mb-8">
                I'm passionate about creating efficient, scalable, and user-friendly web applications. With expertise in
                both front-end and back-end technologies, I bring ideas to life through code.
              </p>
              <div className="flex justify-center space-x-4">
                <Button onClick={() => window.open("mailto:giostaniell12@gmail.com", "_blank")}>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://github.com/Staniell", "_blank", "noopener,noreferrer")}
                >
                  <Github href="https://github.com/Staniell" className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-primary h-full border left-1/2"></div>
                <TimelineItem
                  year="2023 - Present"
                  title="Full-Stack Developer"
                  company="VoyceMe Inc."
                  description="Integrated backend and frontend with NextJS and NestJS to boost customer satisfaction by 83%, migrated legacy code for scalability, developed a creator system enhancing content creation speed by 80% and satisfaction by 75%, and improved server cost efficiency with advanced frontend caching."
                />
                <TimelineItem
                  left
                  year="2023 - 2023"
                  title="Software Engineer Intern"
                  company="VoyceMe Inc."
                  description="Implemented a CMS for admins to easily manage website settings and content, along with a plaza feature to enhance user interactions on the platform, being used by thousands of users every day."
                />
                <TimelineItem
                  year="2023 - 2023"
                  title="Software Engineer Intern"
                  company="ChatGenie.PH"
                  description="Successfully deployed three full-stack applications in collaboration with other interns, showcasing strong problem-solving skills by quickly resolving technical issues to maintain smooth project progression."
                />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "JavaScript", icon: <FileCode className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "TypeScript", icon: <FileCode className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "React", icon: <Code className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "Node.js", icon: <Server className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "Python", icon: <FileCode className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "SQL", icon: <Database className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "MongoDB", icon: <Database className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "GraphQL", icon: <Code className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "Docker", icon: <Server className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "AWS", icon: <Server className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "Git", icon: <GitBranch className="h-8 w-8 mb-2 mx-auto" /> },
                  { name: "Agile", icon: <Briefcase className="h-8 w-8 mb-2 mx-auto" /> },
                ].map((skill) => (
                  <Card key={skill.name} className="text-center">
                    <CardHeader>
                      {skill.icon}
                      <CardTitle>{skill.name}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          {/* <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "E-commerce Platform",
                    description: "A full-stack e-commerce solution with React and Node.js",
                  },
                  {
                    title: "Task Management App",
                    description: "A React Native mobile app for task management with a Node.js backend",
                  },
                  {
                    title: "Data Visualization Dashboard",
                    description: "An interactive dashboard using D3.js and React for data visualization",
                  },
                ].map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">View Project</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section> */}

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Fill out the form below to send me a message.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Textarea placeholder="Your Message" />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://github.com/Staniell", "_blank", "noopener,noreferrer")}
              >
                <Github href="https://github.com/Staniell" className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/gio-staniell-belolo/", "_blank", "noopener,noreferrer")
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("mailto:giostaniell12@gmail.com", "_blank")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <p>&copy; 2023 Gio Staniell Belolo. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

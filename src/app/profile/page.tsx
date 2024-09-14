"use client"

import { useState } from 'react'
import { 
  CalendarDays, 
  Mail, 
  MapPin, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Award, 
  FileText, 
  Heart 
} from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Separator } from '~/components/ui/separator'
import { Button } from '~/components/ui/button'
import { ScrollArea } from '~/components/ui/scroll-area'
import { Progress } from '~/components/ui/progress'

export default function Profile() {
  const [activeSection, setActiveSection] = useState('experience')

  const sections = [
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'projects', icon: FileText, label: 'Projects' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'publications', icon: FileText, label: 'Publications' },
    { id: 'interests', icon: Heart, label: 'Interests' },
  ]

  return (
    <div className="container mx-auto p-6" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <Card className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 bg-secondary p-6 rounded-l-lg">
            <div className="mb-6">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User's profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold text-center mt-4 text-secondary-foreground">John Doe</h2>
              <p className="text-center text-muted-foreground">Senior Software Developer</p>
            </div>
            <div className="space-y-2 text-sm text-secondary-foreground">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                john.doe@example.com
              </div>
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                Joined September 2021
              </div>
            </div>
            <Separator className="my-4" />
            <nav className="space-y-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "secondary" : "ghost"}
                  className="w-full justify-start text-secondary-foreground"
                  onClick={() => setActiveSection(section.id)}
                >
                  <section.icon className="mr-2 h-4 w-4" />
                  {section.label}
                </Button>
              ))}
            </nav>
          </div>
          <div className="md:w-3/4 p-6 bg-card text-card-foreground">
            <ScrollArea className="h-[700px] pr-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-sm text-muted-foreground">
                    Passionate senior software developer with 8 years of experience in web technologies. 
                    Specializes in creating scalable and efficient applications with a focus on user experience.
                  </p>
                </div>
                <Separator />
                {activeSection === 'experience' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
                    {[
                      { title: "Senior Software Developer", company: "Tech Innovators Inc.", period: "2019 - Present" },
                      { title: "Software Developer", company: "WebSolutions Co.", period: "2015 - 2019" },
                      { title: "Junior Developer", company: "StartUp Ventures", period: "2013 - 2015" }
                    ].map((job, index) => (
                      <Card key={index} className="mb-4">
                        <CardHeader>
                          <CardTitle className="text-md">{job.title}</CardTitle>
                          <CardDescription>{job.company} | {job.period}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}
                {activeSection === 'skills' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
                    {[
                      { name: "JavaScript", years: 8 },
                      { name: "React", years: 6 },
                      { name: "Node.js", years: 5 },
                      { name: "Python", years: 4 },
                      { name: "Docker", years: 3 }
                    ].map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.years} years</span>
                        </div>
                        <Progress value={skill.years * 10} max={100} className="h-2" />
                      </div>
                    ))}
                    <h3 className="text-lg font-semibold mb-4 mt-6">Language Skills</h3>
                    {[
                      { language: "English", level: "Native" },
                      { language: "Spanish", level: "Fluent" },
                      { language: "French", level: "Intermediate" }
                    ].map((lang, index) => (
                      <div key={index} className="flex justify-between text-sm mb-2">
                        <span>{lang.language}</span>
                        <span>{lang.level}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeSection === 'education' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Education</h3>
                    {[
                      { degree: "Master of Science in Computer Science", school: "Tech University", year: "2013" },
                      { degree: "Bachelor of Science in Software Engineering", school: "State University", year: "2011" }
                    ].map((edu, index) => (
                      <Card key={index} className="mb-4">
                        <CardHeader>
                          <CardTitle className="text-md">{edu.degree}</CardTitle>
                          <CardDescription>{edu.school} | {edu.year}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}
                {activeSection === 'projects' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Notable Projects</h3>
                    {[
                      { name: "E-commerce Platform", description: "Led the development of a scalable e-commerce solution" },
                      { name: "AI-powered Chatbot", description: "Developed a customer service chatbot using NLP" },
                      { name: "Mobile Fitness App", description: "Created a cross-platform mobile app for fitness tracking" }
                    ].map((project, index) => (
                      <Card key={index} className="mb-4">
                        <CardHeader>
                          <CardTitle className="text-md">{project.name}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}
                {activeSection === 'certifications' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Certifications</h3>
                    {[
                      { name: "AWS Certified Solutions Architect", year: "2022" },
                      { name: "Google Cloud Professional Developer", year: "2021" },
                      { name: "Microsoft Certified: Azure Developer Associate", year: "2020" }
                    ].map((cert, index) => (
                      <div key={index} className="flex justify-between text-sm mb-2">
                        <span>{cert.name}</span>
                        <span>{cert.year}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeSection === 'publications' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Publications</h3>
                    {[
                      { title: "Scalable Microservices Architecture", link: "https://example.com/publication1" },
                      { title: "Machine Learning in Web Applications", link: "https://example.com/publication2" }
                    ].map((pub, index) => (
                      <div key={index} className="mb-2">
                        <a href={pub.link} className="text-sm text-primary hover:underline">{pub.title}</a>
                      </div>
                    ))}
                  </div>
                )}
                {activeSection === 'interests' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Open Source Contributing", "AI & Machine Learning", "Blockchain", "Hiking", "Photography"].map((interest) => (
                        <span key={interest} className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
        <CardFooter className="flex justify-end">
          <Button variant="outline">Редактировать</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
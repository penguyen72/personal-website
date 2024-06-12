'use client'

import { ExperienceListItem } from '@/lib/types'
import { ExperienceList } from '../ui/experience-list'

export function InternshipExperienceSection() {
  const experiences: ExperienceListItem[] = [
    {
      company: 'Meta',
      location: 'Fremont, CA',
      position: 'Software Engineer Intern',
      date: 'May 2022 - July 2022',
      description: (
        <p>
          During my internship at Meta on the Human Ops Experience team as a
          full stack software engineer, I developed a web application used to
          train content reviewers for Facebook and Instagram. The application
          offered consolidated courses and awarded badges and certificates upon
          completion.
        </p>
      ),
    },
    {
      company: 'Tarsier',
      location: 'Atlanta, GA (Remote)',
      position: 'Software Engineer Intern',
      date: 'Feb 2022 - April 2022',
      description: (
        <p>
          I interned at Tarsier as a backend engineer, where I developed REST
          API endpoints using Flask for data acquisition, preprocessing, and
          inference to support the company&apos;s drone detection systems.
          Moreover, I set up and debugged multiple Docker containers to
          streamline and enhance these systems.
        </p>
      ),
    },
    {
      company: 'Kimberly-Clark Corporation',
      location: 'Atlanta, GA (Remote)',
      position: 'Data Engineer Intern',
      date: 'Nov 2020 - Aug 2021',
      description: (
        <p>
          I previously interned at Kimberly-Clark Corporation as a data
          engineer, where I developed ETL processes to monitor data reliability
          across multiple data sources. Additionally, I created machine learning
          models to detect outliers and abnormalities in the data, supporting a
          data migration project.
        </p>
      ),
    },
    {
      company: 'Eye South Partners',
      location: 'Atlanta, GA (Hybrid)',
      position: 'Data Analyst Intern',
      date: 'June 2020 - July 2020',
      description: (
        <p>
          During my internship as a data analyst at Eye South Partners, I
          automated the creation of dashboards through a series of ETL
          processes. This helped visualize key performance indicators (KPIs),
          which created opportunities to expand partnership network and reduce
          cost.
        </p>
      ),
    },
  ]

  return (
    <section id="internship" className="space-y-2">
      <p className="text-2xl font-bold">Internship Experience</p>
      <ExperienceList experiences={experiences} />
    </section>
  )
}

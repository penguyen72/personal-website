'use client'

import { ExperienceListItem } from '@/lib/types'
import { ExperienceList } from '../ui/experience-list'

export function WorkExperienceSection() {
  const experiences: ExperienceListItem[] = [
    {
      company: 'Tesla',
      location: 'Fremont, CA',
      position: 'Software Engineer',
      date: 'Jan 2023 - Present',
      description: (
        <p className="text-sm">
          I am a full stack software engineer for Tesla's Supply Chain
          Automation team. I build web applications for high level executives
          and global supply managers at Tesla to help assist in company wide
          cost reduction oppurtunities. I was previously an intern on the same
          team and converted to a full time engineer in May. My team has saved a
          lot of money.
        </p>
      ),
    },
  ]

  return (
    <section id="work" className="space-y-2">
      <p className="text-2xl font-bold">Work Experience</p>
      <ExperienceList experiences={experiences} />
    </section>
  )
}

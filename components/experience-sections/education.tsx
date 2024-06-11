'use client'

import { Separator } from '@radix-ui/react-dropdown-menu'
import { Fragment } from 'react'

export function EducationSection() {
  const degrees = [
    {
      degree: 'Master of Science in Computer Science',
      concentration: 'Machine Learning',
      date: 'August 2023 - Present',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      concentration: 'Intelligence and Information Internetworks',
      date: 'August 2021 - May 2023',
    },
    {
      degree: 'Bachelor of Science in Industrial Engineering',
      concentration: 'Analytics and Data Science',
      date: 'May 2018 - August 2021',
    },
  ]

  return (
    <section id="education" className="space-y-2">
      <p className="text-2xl font-bold">Education</p>
      <p className="font-medium">Georgia Institute of Technology</p>
      {degrees.map((item, index) => {
        return (
          <Fragment key={index}>
            <section>
              <div className="flex w-full justify-between mb-1">
                <p className="font-medium text-sm">{item.degree}</p>
                <p className="font-medium text-sm">{item.date}</p>
              </div>
              <p className="text-sm italic">
                Concentration: {item.concentration}
              </p>
            </section>
            {index !== degrees.length - 1 ? (
              <Separator className="my-2" />
            ) : null}
          </Fragment>
        )
      })}
    </section>
  )
}

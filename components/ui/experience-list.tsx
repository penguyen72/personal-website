import { Fragment } from 'react'
import { Separator } from './separator'
import { ExperienceListItem } from '@/lib/types'

interface Props {
  experiences: ExperienceListItem[]
}

export function ExperienceList({ experiences }: Props) {
  return experiences.map((item, index) => {
    return (
      <section key={index}>
        <div>
          <div className="flex w-full items-end justify-between mb-1">
            <p className="font-medium">{item.company}</p>
            <p className="font-medium text-sm">{item.location}</p>
          </div>

          <div className="flex w-full justify-between mb-1">
            <p className="font-medium text-sm">{item.position}</p>
            <p className="font-medium text-sm">{item.date}</p>
          </div>
          <p className="text-sm">{item.description}</p>
        </div>
        {index !== experiences.length - 1 ? (
          <Separator className="my-4" />
        ) : null}
      </section>
    )
  })
}

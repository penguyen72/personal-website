import { ReactNode } from 'react'

export type ExperienceListItem = {
  company: string
  location: string
  position: string
  date: string
  description: ReactNode
}

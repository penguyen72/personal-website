import { EducationSection } from '@/components/experience-sections/education'
import { InternshipExperienceSection } from '@/components/experience-sections/internship'
import { WorkExperienceSection } from '@/components/experience-sections/work'

export default function Home() {
  return (
    <div className="flex flex-col gap-8 my-4">
      <WorkExperienceSection />
      <InternshipExperienceSection />
      <EducationSection />
    </div>
  )
}

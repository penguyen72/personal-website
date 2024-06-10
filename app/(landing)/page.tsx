import { LeetcodeCalendar } from '@/components/leetcode-calendar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-8 my-4">
      <section id="about-me" className="space-y-2">
        <p className="text-2xl font-semibold">About Me</p>
        <div className="space-y-3">
          <Image
            className="ml-4 float-right rounded-full"
            alt="profile"
            src="/profile-pic.jpeg"
            width={200}
            height={200}
          />
          <p>
            Hello! I am Peyton Nguyen, and I am currently a Software Engineer at{' '}
            <Link
              className="hover:underline font-semibold"
              href="https://www.tesla.com/"
            >
              Tesla
            </Link>
            . I graduated{' '}
            <Link
              className="hover:underline font-semibold"
              href="https://www.gatech.edu/"
            >
              Georgia Tech
            </Link>{' '}
            in 2023 with dual bachelor's degrees in Industrial Engineering and
            Computer Science. As of 2023, I am pursing a Master's degree in
            Computer Science at{' '}
            <Link
              className="hover:underline font-semibold"
              href="https://www.gatech.edu/"
            >
              Georgia Tech
            </Link>
            .
          </p>
          <p>
            As an undergraduate, I focused on Analytics and Data Science in my
            Industrial Engineering major and Intelligence and Information
            Internetworks in my Computer Science major. Now, in my graduate
            studies, I am shifting my focus towards Machine Learning.
          </p>
          <p>
            In my free time, I love baking with my mom, playing badminton
            competitively with my girlfriend, and going to the gym to skip leg
            day. I am also passionate about developing my skills as a software
            engineer by seeking out new challenges, working on personal
            projects, and leetcoding daily.
          </p>
          <p>
            I am passionate about gaining new experiences, from tasting
            different foods to trying new activities. As an adrenaline junkie,
            I'm always up for thrilling activities like riding roller coasters
            and white water rafting. One day, I hope to go skydiving and force
            my girlfriend to come with me. I also love to travel and dream of
            visiting the{' '}
            <Link
              className="hover:underline font-semibold"
              href="https://www.gardensbythebay.com.sg/"
            >
              Gardens by the Bay
            </Link>{' '}
            in Singapore and{' '}
            <Link
              className="hover:underline font-semibold"
              href="https://www.tokyodisneyresort.jp/en/tdl/"
            >
              Tokyo Disneyland
            </Link>{' '}
            in Japan.
          </p>
          <p>Fun Fact: I use the same picture for everything</p>
        </div>
      </section>
      <section id="stats" className="space-y-2">
        <p className="text-2xl font-semibold">Leetcode Stats</p>
        <LeetcodeCalendar />
      </section>
    </div>
  )
}

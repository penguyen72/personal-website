'use client'

import {
  CURRENT_YEAR,
  END_OF_CURRENT_YEAR,
  MAX_CALENDAR_LEVEL,
  TEST_CALENDAR_DATA,
} from '@/lib/constants'
import { format } from 'date-fns'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ActivityCalendar, { Activity } from 'react-activity-calendar'

type SubmissionRecord = Record<string, number>

export function LeetcodeCalendar() {
  const [loading, setLoading] = useState<boolean>(true)
  const [calendarData, setCalendarData] = useState<Array<Activity>>([])
  const { theme, systemTheme } = useTheme()

  const colorScheme =
    theme === 'dark' || theme === 'light' ? theme : systemTheme

  useEffect(() => {
    getReflectionQuestions()
  }, [])

  const getReflectionQuestions = async () => {
    try {
      // const response = await axios.get('/api/leetcode/calendar')

      const submissionCalendar: SubmissionRecord = TEST_CALENDAR_DATA
      // response.data.submissionCalendar

      const maxCount = Math.max(...Object.values(submissionCalendar))

      const submissionCalendarData = Object.keys(submissionCalendar)
        .filter(
          (date) => new Date(Number(date) * 1000).getFullYear() === CURRENT_YEAR
        )
        .map((date) => {
          return {
            date: format(new Date(Number(date) * 1000), 'yyyy-MM-dd'),
            count: submissionCalendar[date],
            level: Math.ceil(
              (submissionCalendar[date] / maxCount) * MAX_CALENDAR_LEVEL
            ),
          }
        })

      submissionCalendarData.push({
        date: END_OF_CURRENT_YEAR,
        count: 0,
        level: 0,
      })

      setCalendarData(submissionCalendarData)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ActivityCalendar
      data={calendarData}
      maxLevel={MAX_CALENDAR_LEVEL}
      colorScheme={colorScheme}
      theme={{
        light: ['hsl(0, 0%, 92%)', '#6cc644'],
        dark: ['#333', '#6cc644'],
      }}
      loading={loading}
    />
  )
}

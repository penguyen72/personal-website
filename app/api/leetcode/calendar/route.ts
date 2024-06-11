import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await axios.get(
      'https://alfa-leetcode-api.onrender.com/peynguyen/calendar'
    )
    return NextResponse.json({
      submissionCalendar: JSON.parse(response.data.submissionCalendar),
    })
  } catch (error) {
    console.log(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

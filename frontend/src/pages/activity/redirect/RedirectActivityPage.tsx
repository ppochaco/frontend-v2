import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query'

import { activityQueries, semesterQueries } from '@/service/api'

import { ActivityHero } from '../components'

export default function RedirectActivityPage() {
  const navigate = useNavigate()
  const params = useParams()

  const semesterId = Number(params.semesterId)
  const { data: semesters } = useSuspenseQuery(semesterQueries.list())

  const results = useSuspenseQueries({
    queries: activityQueries.listAll({
      semesterIds: semesters.map((s) => s.semesterId),
    }),
  })

  useEffect(() => {
    const index =
      semesterId === -1
        ? semesters.length - 1
        : semesters.findIndex((s) => s.semesterId === semesterId)

    if (index === -1 || !results[index]) return

    const activities = results[index].data
    const targetSemesterId = semesters[index].semesterId

    if (activities.length === 0) {
      navigate(`/activity/${targetSemesterId}/-1`)
      return
    }

    navigate(`/activity/${targetSemesterId}/${activities[0].activityId}`)
  }, [results, semesters, navigate, semesterId])

  if (semesters.length === 0)
    return <div>학기가 없습니다. 해구르르에 문의해주세요.</div>

  return (
    <div className="w-full">
      <ActivityHero />
    </div>
  )
}

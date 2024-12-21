'use client'

import { semesterQueries } from '@/servicetest/api/semester'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import {
  ActivitySemesterSkeleton,
  SemesterPagination,
} from '@/components/feature'
import { Button } from '@/components/ui'
import { useMyInfoStore } from '@/store/myInfo'

import { ActivityBoardList, ActivityHero, ActivityList } from './_components'

type ActivityPageParams = {
  params: {
    semesterName: string
    activityId: string
  }
}

const ActivityPage = ({ params }: ActivityPageParams) => {
  const pathName = usePathname()
  const router = useRouter()

  const { role } = useMyInfoStore((state) => state.getMyInfo())

  const { data: semesters, status } = useQuery(semesterQueries.list())

  if (status === 'pending') return <ActivitiyPageSkeleton />

  if (!semesters) return <div>학기가 없습니다.</div>

  const semester = semesters?.find(
    (semester) => semester.semesterName === params.semesterName,
  )
  if (!semester) return <ActivitiyPageSkeleton />

  return (
    <div className="flex flex-col items-center gap-2">
      <ActivityHero />
      <SemesterPagination
        semesterName={semester.semesterName}
        semesters={semesters}
      />
      <div className="flex w-full flex-col items-center gap-6">
        <ActivityList
          semesterId={semester.semesterId}
          activityId={Number(params.activityId)}
        />
        <ActivityBoardList activityId={Number(params.activityId)} />
        <div className="mb-20 flex w-full justify-end">
          <Button
            className="max-w-fit"
            onClick={() => router.push(`${pathName}/create-board`)}
            disabled={!(role === '해구르르' || role === '팀장')}
          >
            게시판 생성하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ActivityPage

const ActivitiyPageSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <ActivityHero />
      <ActivitySemesterSkeleton />
    </div>
  )
}

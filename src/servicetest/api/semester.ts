import { Semesters } from '@/models'
import convertSemesterFormat from '@/utils/convert-semester'
import { queryOptions } from '@tanstack/react-query'

import { BACKEND_API } from '../config'

const getSemesters = async () => {
  const semesterApi = new Semesters(BACKEND_API)
  const response = await semesterApi.getSemesters()

  return convertSemesterFormat(response.data)
}

const getSemester = async (semesterId: number) => {
  const semesterApi = new Semesters(BACKEND_API)
  const response = await semesterApi.getSemester(semesterId)

  return convertSemesterFormat([response.data])[0]
}

export const semesterQueries = {
  all: () => ['semesters'],
  list: () =>
    queryOptions({
      queryKey: [...semesterQueries.all()],
      queryFn: async () => getSemesters(),
    }),
  details: () => [...semesterQueries.all(), 'detail'],
  detail: (semesterId: number) =>
    queryOptions({
      queryKey: [...semesterQueries.details(), semesterId],
      queryFn: () => getSemester(semesterId),
    }),
}

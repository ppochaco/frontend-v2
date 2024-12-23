import { queryOptions, skipToken } from '@tanstack/react-query'

import { BACKEND_API } from '../config'
import { Semesters } from '../models'

const getActivities = async (semesterId: number) => {
  const semesterApi = new Semesters(BACKEND_API)
  const response = await semesterApi.getActivities(semesterId)

  return response.data
}

export const activityQueries = {
  all: () => ['activities'],
  lists: () => [...activityQueries.all(), 'list'],
  list: (semesterId?: number) =>
    queryOptions({
      queryKey: [...activityQueries.lists(), semesterId],
      queryFn: semesterId ? () => getActivities(semesterId) : skipToken,
    }),
}

import { queryOptions } from '@tanstack/react-query'

import { BACKEND_API } from '@/service/config'
import {
  GetActivitiesRequest,
  GetActivityDetailRequest,
  Semesters,
} from '@/service/model'

const getActivities = async ({ semesterId }: GetActivitiesRequest) => {
  const semesterClient = new Semesters(BACKEND_API)
  const response = await semesterClient.getActivities(semesterId)

  return response.data
}

const getActivityDetail = async ({
  semesterId,
  activityId,
}: GetActivityDetailRequest) => {
  const semesterClient = new Semesters(BACKEND_API)
  const response = await semesterClient.getActivity(semesterId, activityId)

  return response.data
}

export const activityQueries = {
  all: () => ['activities'],
  lists: ({ semesterId }: GetActivitiesRequest) => [
    ...activityQueries.all(),
    'list',
    semesterId,
  ],
  list: ({ semesterId }: GetActivitiesRequest) =>
    queryOptions({
      queryKey: [...activityQueries.lists({ semesterId })],
      queryFn: async () => getActivities({ semesterId }),
      enabled: !!semesterId,
    }),
  listAll: ({ semesterIds }: { semesterIds: number[] }) =>
    semesterIds.map((semesterId) => ({
      queryKey: activityQueries.lists({ semesterId }),
      queryFn: () => getActivities({ semesterId }),
      enabled: !!semesterId,
    })),
  details: () => [...activityQueries.all(), 'detail'],
  detail: ({ semesterId, activityId }: GetActivityDetailRequest) =>
    queryOptions({
      queryKey: [...activityQueries.details(), semesterId, activityId],
      queryFn: async () => getActivityDetail({ semesterId, activityId }),
      enabled: !!semesterId,
    }),
}

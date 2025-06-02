import { useParams } from 'react-router'

import {
  ActivityPostListSection,
  BoardHero,
  CreatePostButton,
} from './components'

export default function ActivityBoardPage() {
  const params = useParams()

  return (
    <div className="flex w-full flex-col gap-10">
      <BoardHero
        activityId={Number(params.activityId)}
        boardId={Number(params.boardId)}
      />
      <ActivityPostListSection boardId={Number(params.boardId)} />
      <CreatePostButton />
    </div>
  )
}

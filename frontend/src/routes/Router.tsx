import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

import {
  ActivityBoardPage,
  ActivityPage,
  ActivityPostPage,
  ActivityRedirectPage,
  AdminMemberPage,
  AdminSemesterPage,
  CreateActivityPostPage,
  CreateBoardPage,
  CreateNoticePostPage,
  EditActivityPostPage,
  EditBoardPage,
  EditNoticePostPage,
  LoginPage,
  MainPage,
  MemberPage,
  MyPage,
  NotFoundPage,
  NoticePage,
  NoticePostPage,
  RecruitPage,
  SemesterRedirectPage,
  SignupPage,
} from '@/pages'

// import RecruitCommingSoonPage from '@/pages/recruit/CommingSoonPage'

import {
  ActivityRoute,
  AdminActivityPostRoute,
  AdminBoardRoute,
  AdminNoticeRoute,
  AdminRoute,
  AuthRoute,
  MyPageRoute,
  NoticeRoute,
} from './custom-route'
import { MainRoute } from './custom-route/main'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        <Route path="/admin" element={<AdminRoute />}>
          <Route path="member" element={<AdminMemberPage />} />
          <Route path="semester" element={<AdminSemesterPage />} />
        </Route>

        <Route element={<MainRoute />}>
          <Route path="/activity" element={<ActivityRoute />}>
            <Route index element={<SemesterRedirectPage />} />
            <Route path=":semesterId" element={<ActivityRedirectPage />} />
            <Route path=":semesterId/:activityId">
              <Route index element={<ActivityPage />} />
              <Route path="create-board" element={<CreateBoardPage />} />
              <Route path="boards/:boardId">
                <Route index element={<ActivityBoardPage />} />
                <Route element={<AdminBoardRoute />}>
                  <Route path="edit-board" element={<EditBoardPage />} />
                </Route>
                <Route path="posts/:postId">
                  <Route index element={<ActivityPostPage />} />
                  <Route element={<AdminActivityPostRoute />}>
                    <Route path="edit" element={<EditActivityPostPage />} />
                  </Route>
                </Route>
                <Route
                  path="create-post"
                  element={<CreateActivityPostPage />}
                />
              </Route>
            </Route>
          </Route>

          <Route path="/notice" element={<NoticeRoute />}>
            <Route index element={<NoticePage />} />
            <Route path="posts/:postId" element={<NoticePostPage />} />
            <Route element={<AdminNoticeRoute />}>
              <Route
                path="posts/:postId/edit"
                element={<EditNoticePostPage />}
              />
              <Route path="create-post" element={<CreateNoticePostPage />} />
            </Route>
          </Route>

          <Route path="/mypage" element={<MyPageRoute />}>
            <Route index element={<MyPage />} />
          </Route>

          <Route
            path="/member"
            element={
              <Suspense>
                <MemberPage />
              </Suspense>
            }
          />
        </Route>

        <Route path="/" element={<MainPage />} />
        <Route path="/recruit">
          <Route index element={<RecruitPage />} />
          {/* <Route index element={<RecruitCommingSoonPage />} /> */}
          <Route path="2025-1" element={<RecruitPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

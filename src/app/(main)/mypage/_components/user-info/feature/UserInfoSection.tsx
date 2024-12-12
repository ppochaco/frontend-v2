import { SOCIAL_DATA } from '../../../data'
import { SocialInfo, WriteInfo } from '../common'

const UserInfoSection = () => {
  return (
    <section className="mt-10 flex h-full w-full flex-col space-y-5">
      <WriteInfo
        title="한 줄 소개"
        description="멤버 페이지에서 보이는 정보입니다."
        division
      >
        <div className="text-md">아자아자 화이팅!</div>
      </WriteInfo>
      <WriteInfo
        title="소셜 정보"
        description="멤버 페이지에서 보이는 정보입니다."
        division
      >
        <div className="text-md flex gap-5 md:text-lg">
          {SOCIAL_DATA.map((info, index) => (
            <SocialInfo key={index} icon={info.icon} label={info.label} />
          ))}
        </div>
      </WriteInfo>
      <WriteInfo
        title="회원 탈퇴"
        description="탈퇴 시 작성한 게시글 및 댓글이 모두 삭제되며 복구되지 않습니다."
        actionText="탈퇴하기"
        actionColor="text-red-500"
        onActionClick={() => console.log('회원 탈퇴')}
      />
    </section>
  )
}

export default UserInfoSection

const UserImgSection = () => {
  return (
    <section className="flex h-full w-full flex-col md:flex-row md:space-x-8">
      <div className="space-y-5">
        <div className="md:h-35 md:w-35 mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gray-300">
          이미지
        </div>
        <div className="flex w-full flex-col gap-3 text-center md:flex-col">
          <div className="mx-auto rounded-sm bg-yellow-400 px-3 py-1 md:px-5 md:py-2">
            <div className="font-bold text-white">이미지 업로드</div>
          </div>
          <div className="mx-auto font-bold">이미지 제거</div>
        </div>
      </div>
      <div className="mb-5 mt-10 border-t border-border md:hidden" />
      <div className="mt-5 space-y-3">
        <div className="flex flex-row items-center gap-3 md:gap-5">
          <div className="text-2xl font-bold md:text-3xl">호반우</div>
          <div className="text-md rounded-full border border-primary px-3 py-1 text-primary md:text-xl">
            해구르르
          </div>
        </div>
        <div className="text-xl">2099111222</div>
      </div>
    </section>
  )
}

export default UserImgSection

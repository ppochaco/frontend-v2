import Image from 'next/image'

export const Instagram = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center border-t-2 border-t-slate-100 px-12 pb-20 pt-8">
      <p className="text-semibold pointer text-xl leading-10">Instagram</p>
      <p className="mb-8 text-primary">
        해달 인스타그램을 팔로우하고 다양한 소식을 접하실 수 있어요!
      </p>
      <div className="grid w-full grid-cols-3 items-center justify-center gap-2 sm:grid-cols-4 md:grid-cols-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex aspect-square w-full items-center justify-center border border-gray-200 bg-slate-50"
          >
            <Image src="" alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

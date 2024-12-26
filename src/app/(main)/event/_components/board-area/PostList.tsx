'use client'

export const PostList = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div>게시글이 없습니다.</div>
    </div>
  )

  /*
  return (
    <div className="flex flex-col gap-6">
      <PostTable
        posts={data.posts}
        pageNumber={page}
        pageSize={data.pageInfo.pageSize}
      />
      <PaginationButtons data={data} />
    </div>
  )
  */
}

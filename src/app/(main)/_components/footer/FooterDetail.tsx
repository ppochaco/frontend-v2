type FooterDetailData = {
  id: number
  label: string
  content: string
}

export const FooterDetail = () => {
  return (
    <div className="flex flex-col justify-start gap-6 text-sm sm:flex-col sm:gap-2">
      {footerDetailData.map((detail) => (
        <div key={detail.id} className="flex flex-row gap-4">
          <div className="font-semibold">{detail.label}</div>
          <div>{detail.content}</div>
        </div>
      ))}
    </div>
  )
}

const footerDetailData: FooterDetailData[] = [
  {
    id: 0,
    label: '주소',
    content:
      '대구광역시 북구 대학로 80 (산격동, 경북대학교) IT대학 1호관 108A (41566)',
  },
  {
    id: 1,
    label: '대표 연락처',
    content: 'tfer2442@gmail.com',
  },
]

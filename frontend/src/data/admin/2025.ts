import { Admin, BasePosition } from '@/types'

export type Position2025 =
  | BasePosition
  | '트랙조직위원장'
  | '홍보부장'
  | '기술관리부장'

export const admins2025: Admin<Position2025>[] = [
  {
    position: '회장',
    userId: 'haedal2025',
  },
  {
    position: '부회장',
    userId: 'ezzkim1',
  },
  {
    position: '총무',
    userId: 'song123',
  },
  {
    position: '교육운영진장',
    userId: 'churaly',
  },
  {
    position: '트랙조직위원장',
    userId: 'ysh0702',
  },
  {
    position: '홍보부장',
    userId: 'pigmal1',
  },
  {
    position: '기술관리부장',
    userId: 'rnjs5540',
  },
]

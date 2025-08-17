export type Semester = {
  index?: number
  semesterId: number
  semesterName: string
}

export type Role =
  | 'ROLE_WEB_MASTER'
  | 'ROLE_ADMIN'
  | 'ROLE_TEAM_LEADER'
  | 'ROLE_MEMBER'

export type SemesterCode =
  | 'SEMESTER_2024_1'
  | 'SEMESTER_2024_2'
  | 'SEMESTER_2025_1'
  | 'SEMESTER_2025_2'
  | 'SEMESTER_2026_1'
  | 'SEMESTER_2026_2'
  | 'SEMESTER_2027_1'
  | 'SEMESTER_2027_2'
  | 'SEMESTER_2028_1'
  | 'SEMESTER_2028_2'
  | 'SEMESTER_2029_1'
  | 'SEMESTER_2029_2'
  | undefined

type BasePosition = '회장' | '부회장' | '총무' | '교육운영진장'
type Position2025 =
  | BasePosition
  | '트랙조직위원장'
  | '홍보부장'
  | '기술관리부장'

type Admin = { position: BasePosition; userId: string }
export type Admin2025 = Omit<Admin, 'position'> & { position: Position2025 }

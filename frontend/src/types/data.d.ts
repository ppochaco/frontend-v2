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

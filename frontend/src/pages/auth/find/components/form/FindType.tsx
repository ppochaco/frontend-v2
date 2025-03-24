import { Input, Label } from '@/components/ui'

interface FindTypeProps {
  onChange: (value: 'id' | 'password') => void
}

export const FindType = ({ onChange }: FindTypeProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as 'id' | 'password')
  }

  return (
    <div className="mb-4 flex w-full items-center gap-4">
      <div className="flex gap-0.5">
        <Input
          className="size-4"
          type="radio"
          id="id"
          name="findType"
          value="id"
          defaultChecked
          onChange={handleChange}
        />
        <Label className="hover:cursor-pointer" htmlFor="id">
          아이디 찾기
        </Label>
      </div>
      <div className="flex gap-0.5">
        <Input
          className="size-4"
          type="radio"
          id="password"
          name="findType"
          value="password"
          onChange={handleChange}
        />
        <Label className="hover:cursor-pointer" htmlFor="password">
          비밀번호 찾기
        </Label>
      </div>
    </div>
  )
}

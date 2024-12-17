import { useState } from 'react'

type UseEditableFieldProps<T> = {
  initialValue: T
}

export const useEditProfileIntro = <T>({
  initialValue,
}: UseEditableFieldProps<T>) => {
  const [value, setValue] = useState<T>(initialValue)
  const [isEditing, setIsEditing] = useState(false)
  const [tempValue, setTempValue] = useState<T>(initialValue)

  const editProfileIntro = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isEditing) {
      setValue(tempValue)
      setIsEditing(false)
    } else {
      setTempValue(value)
      setIsEditing(true)
    }
  }

  const keyDownEditProfileIntro = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      setValue(tempValue)
      setIsEditing(false)
    }
  }

  return {
    value,
    isEditing,
    tempValue,
    setTempValue,
    editProfileIntro,
    keyDownEditProfileIntro,
  }
}

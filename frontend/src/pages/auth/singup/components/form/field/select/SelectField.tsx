import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui'

interface SignupSelectFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  formLabel: string
  placeholder?: string
  formDescription?: string
  selectItem?: Record<string, string>
}

export const SignupSelectField = ({
  name,
  formLabel,
  formDescription,
  placeholder,
  selectItem,
}: SignupSelectFieldProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{formLabel}</FormLabel>
            <FormControl>
              <div className="flex gap-2">
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {selectItem &&
                      Object.entries(selectItem).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </FormControl>
            {formDescription && (
              <FormDescription className="pl-2">
                {formDescription}
              </FormDescription>
            )}
            <FormMessage className="pl-2" />
          </FormItem>
        )
      }}
    />
  )
}

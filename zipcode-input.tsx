import { forwardRef } from 'react'
import { cn } from '@psychplus-v2/utils'
import { Box, TextFieldInput } from '@radix-ui/themes'
import { PatternFormat } from 'react-number-format'

interface ZipcodeInputProps
  extends React.ComponentProps<typeof TextFieldInput> {
  value?: string
  defaultValue?: string
  loading?: boolean
}

const ZipcodeInput = forwardRef<HTMLInputElement, ZipcodeInputProps>(
  ({ type, className, loading, ...rest }, ref) => (
    <Box
      className={cn('relative', {
        'loading hide-default-select-icon': loading,
      })}
    >
      <PatternFormat
        size="3"
        type="text"
        inputMode="numeric"
        format="#####"
        placeholder="Zip"
        customInput={TextFieldInput}
        getInputRef={ref}
        className={className}
        {...rest}
      />
    </Box>
  ),
)

ZipcodeInput.displayName = 'ZipcodeInput'

export { ZipcodeInput }

import React from 'react'
import { Box, Flex, Label, Checkbox, Input, Text } from 'theme-ui'
import { capitalize } from 'lodash'

const Field = React.forwardRef(
  (
    {
      as: Control = Input,
      type = 'text',
      label,
      name,
      desc,
      half = false,
      sx = {},
      ...props
    },
    ref
  ) => {
    return (
      <Box
        sx={{ gridColumn: [null, half ? 'span 1' : 'span 2'], ...sx }}
        onClick={type === 'checkbox' ? props.onChange : null}
      >
        {type === 'checkbox' ? (
          <Flex sx={{ alignItems: 'center' }}>
            <Checkbox ref={ref} id={name} name={name} type={type} {...props} />
            <Label htmlFor={name} sx={{ ml: 1, lineHeight: 'heading' }}>
              {label || capitalize(name)}
            </Label>
          </Flex>
        ) : (
          <>
            <Label htmlFor={name}>{label || capitalize(name)}</Label>
            <Control
              ref={ref}
              id={name}
              name={name}
              type={type}
              {...props}
              sx={{ bg: 'border' }}
            />
          </>
        )}
        {desc && (
          <Text sx={{ fontSize: 1, mt: 1 }} variant="caption">
            {desc}
          </Text>
        )}
      </Box>
    )
  }
)

export default Field
import React, { useEffect } from 'react'
import { classes } from '../utils'

export interface RadioProps {
  value?: any
  defaultValue?: any
  onChange?: (checkedValue: any, e: React.MouseEvent) => any
  vertical?: boolean
  radioStyle?: 'radio' | 'button'
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface RadioState {
  checkedValue: any
}

export interface OptionProps {
  value: any
  checkedValue?: any
  onClick?: (checkedValue: any, e: React.MouseEvent) => any
  radioStyle?: 'radio' | 'button'
  disabled?: boolean
  vertical?: boolean
  className?: string
  style?: React.CSSProperties
  RadioState: RadioState
}

const componentName = 'Radio'


const Radio: React.FC<RadioProps> = (props) => {

  const getDerivedStateFromProps = (
    nextProps: RadioProps,
    prevState: RadioState
  ) => {
    const { value } = nextProps
    const { checkedValue } = prevState
    if ('value' in nextProps && value !== checkedValue) {
      return { checkedValue: value }
    }
    return null
  }

  useEffect(() => {
    const { defaultValue } = props
    if (!('value' in props) && 'defaultValue' in props) {
      let checkedValue = defaultValue
    }
  })

/*   const renderChildren = () => {
    const { radioStyle, vertical, children } = props
    const { checkedValue } = props
    return React.Children.map(
      children,
      (child: React.ReactElement<OptionProps>) => {
        return React.cloneElement(child, {
          onClick: handleClick,
          checkedValue,
          radioStyle,
          vertical
        })
      }
    )
  } */

  const handleClick: (checkedValue: any, e: React.MouseEvent) => any = (
    checkedValue,
    e
  ) => {
    if (checkedValue !== checkedValue) {
      if (props.onChange) {
        props.onChange(checkedValue, e)
      }
    }
  }
  const { vertical, className, style } = props
  const cn = componentName

  return (
    <div className={classes(cn, '', [className], { vertical })} style={style}>
      {/* {renderChildren()} */}
    </div>
  )
}

export default Radio

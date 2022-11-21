import React from 'react'
import { classes } from '../utils'

export interface Option {
  span: number
  offset?: number
}

export interface IColProps {
  gutter?: number
  span?: number
  offset?: number
  children?: React.ReactNode
  sma?: Option
  md?: Option
  lg?: Option
  xl?: Option
  className?: string
  style?: React.CSSProperties
}
const componentName = 'Col'
const Col: React.FC<IColProps> = (props) => {

  const cn = componentName
  const {
    span,
    offset,
    sma,
    md,
    lg,
    xl,
    className,
    style,
    children,
    ...rest
  } = props

  let gutter = props.gutter
  if (!gutter) {
    gutter = 0
  }

  const getColClassName = () => {
    const {
      gutter,
      span,
      offset = 0,
      children,
      className,
      style,
      ...options
    } = props

    const classNameArr = [`col-span-${span}`, `col-offset-${offset}`]
    Object.keys(options).forEach(key => {
      if (options[key]) {
        const { span: optionSpan, offset: optionOffset = 0 } = options[key]
        classNameArr.push(`${key}-col-span-${optionSpan}`)
        classNameArr.push(`${key}-col-offset-${optionOffset}`)
      }
      if (className) {
        classNameArr.push(className)
      }
      console.log('classNameArr', classNameArr);
      return classNameArr
    })
  }

  return (
    <div
      className={classes(cn, '', getColClassName())}
      {...rest}
      style={{
        paddingLeft: `${gutter! / 2}px`,
        paddingRight: `${gutter! / 2}px`,
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default Col

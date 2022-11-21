import React from 'react'
import { classes } from '../utils'
import './index.less'

export interface RowProps {
  children?: React.ReactNode
  gutter?: number
  className?: string
  style?: React.CSSProperties
}

export interface Option {
  span: number
  offset?: number
}

export interface IColProps {
  gutter?: number
  span?: number
  offset?: number
  sma: Option
  md?: Option
  lg?: Option
  xl?: Option
  className?: string
  style?: React.CSSProperties
}

const Row: React.FC<RowProps> = (props) => {
  const cn = 'row'
  const { gutter, className, style, children, ...rest } = props

  return (
    <div
      className={classes(cn, '', [className])}
      {...rest}
      style={{
        marginLeft: `${-gutter! / 2}px`,
        marginRight: `${-gutter! / 2}px`,
        ...style
      }}
    >
      {
        React.Children.map(children, child => {
          return (
            React.cloneElement(child as React.ReactElement<IColProps>, {
              gutter
            })
          )
        })
      }
    </div>
  )
}

export default Row

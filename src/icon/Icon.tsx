import * as React from 'react'
import { classes } from '../utils'
import '../utils/svg.js'
import './style/index.less'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
  size?: number
  className?: string
  style?: React.CSSProperties
}

const componentName = 'Icon'

const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, size, style, name, children, ...rest } = props
  return (
    <>
      <svg className={classes(componentName, '', [className])} aria-hidden="true"
        style={Object.assign({}, style, {
          width: size + 'px',
          height: size + 'px'
        })}>
          <path fill="#333333" d="M988.555176 812.816513h-85.098853V448.190298c0-199.587399-149.699109-364.181089-342.95203-387.68143a49.705674 49.705674 0 1 0-97.014519 0.091308C270.145545 84.488575 120.49209 249.321949 120.49209 449.057722v363.758791H35.393237a34.240418 34.240418 0 0 0-34.240418 34.240418 34.240418 34.240418 0 0 0 34.240418 34.240419h332.931001a145.076653 145.076653 0 0 0 290.107651 0h330.123287a34.240418 34.240418 0 0 0 34.240418-34.240419 34.240418 34.240418 0 0 0-34.240418-34.240418zM188.972927 449.057722a322.693116 322.693116 0 0 1 323.00128-323.001279h0.913078a321.768625 321.768625 0 0 1 322.088201 322.133855v363.530522h-646.002559z m324.405137 506.461441a76.67571 76.67571 0 0 1-76.550162-74.187573h153.100324a76.67571 76.67571 0 0 1-76.550162 74.187573z" />
      </svg>
    </>
  )
}

Icon.displayName = componentName

Icon.defaultProps = {
  size: 16
}

export default Icon

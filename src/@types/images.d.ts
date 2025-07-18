declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react'
  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>

  const src: string | FunctionComponent<SVGProps<SVGSVGElement>>
  export default src
}

declare module '*.jpg'

declare module '*.webp'

declare module '*.png'

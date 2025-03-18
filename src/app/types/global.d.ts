declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare module '*.svg' {
    import React from 'react'

    export const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
}

declare const __API__: string

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>
      }
    : T

type OptionsRecord<K extends keyof any, T> = {
    [P in K]?: T
}

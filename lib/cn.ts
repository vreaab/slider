import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type Cn = Parameters<typeof clsx>

export const cn = (...args: Cn) => {
    return twMerge(clsx(...args))
}


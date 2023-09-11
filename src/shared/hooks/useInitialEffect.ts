import { useEffect } from 'react'

export const useInitialEffect = (cb: () => void, deps: any[]) => {
    useEffect(() => {
        if (_PROJECT_ !== 'storybook') {
            cb()
        }
        // eslint-disable-next-line
    }, deps)
}

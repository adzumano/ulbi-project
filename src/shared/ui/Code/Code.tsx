import classNames from 'classnames'
import { type FC, memo, useCallback } from 'react'
import CopyIcon from 'shared/assets/icons/copy.svg'
import { Button } from 'shared/ui/Button/Button'

import styles from './Code.module.scss'

interface CodeProps {
    className?: string
    text: string
}

export const Code: FC<CodeProps> = memo((props) => {
    const { className, text } = props

    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(text)
    }, [text])
    return (
        <pre className={classNames(styles.code, className)}>
            <Button className={styles.copyBtn} variant={'clear'} onClick={onCopy}>
                <CopyIcon className={styles.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    )
})

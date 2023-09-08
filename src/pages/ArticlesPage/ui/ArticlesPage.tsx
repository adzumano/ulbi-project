import classNames from 'classnames'
import { type FC, memo } from 'react'

import styles from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = memo(({ className }) => {
    return <div className={classNames(styles.page, className)}>Articles Page</div>
})
export default ArticlesPage

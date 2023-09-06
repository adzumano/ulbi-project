import classNames from 'classnames'
import { type FC } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import styles from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
}
export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    return (
        <div className={classNames(styles.card, className)}>
            <div className={styles.header}>
                <Text title={'profile'} />
                <Button className={styles.editBtn} variant={'outline'}>
                    Edit
                </Button>
            </div>
            <div className={styles.data}>
                <Input className={styles.input} value={data?.firstname} placeholder={'first name'} />
                <Input className={styles.input} value={data?.lastname} placeholder={'last name'} />
            </div>
        </div>
    )
}

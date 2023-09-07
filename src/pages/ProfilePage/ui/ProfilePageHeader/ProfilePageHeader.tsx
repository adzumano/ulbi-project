import { getProfileIsReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'

import styles from './ProfilePageHeader.module.scss'

export const ProfilePageHeader = memo(() => {
    const readOnly = useSelector(getProfileIsReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        void dispatch(updateProfileData())
    }, [dispatch])
    return (
        <div className={styles.header}>
            <Text title={'profile'} />
            <div>
                {readOnly ? (
                    <Button className={styles.editBtn} variant={'outline'} onClick={onEdit}>
                        Редактировать
                    </Button>
                ) : (
                    <>
                        <Button variant={'outlineRed'} onClick={onCancelEdit}>
                            Отменить
                        </Button>
                        <Button className={styles.saveBtn} variant={'outline'} onClick={onSave}>
                            Сохранить
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
})

import classNames from 'classnames'
import { CountrySelect } from 'entities/Country'
import { CurrencySelect } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { type FC } from 'react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Label } from 'shared/ui/Label/Label'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text } from 'shared/ui/Text/Text'

import styles from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUserName?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCountry?: (value: string) => void
    onChangeCurrency?: (value: string) => void
}
export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUserName,
        onChangeCurrency,
        onChangeCountry,
    } = props

    if (isLoading) {
        return (
            <div className={classNames(styles.card, className, styles.loading)}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(styles.card, className, styles.error)}>
                <Text
                    variant={'error'}
                    title={'Произошла ошибка при загрузке профиля'}
                    text={'Попробуйте перезагрузить страницу'}
                    align={'center'}
                />
            </div>
        )
    }
    return (
        <div className={classNames(styles.card, className, { [styles.edit]: !readonly })}>
            <div className={styles.data}>
                {data?.avatar ? (
                    <div className={styles.avatarWrapper}>
                        <Avatar src={data?.avatar} alt={'avatar'} objectFit={'cover'} />
                    </div>
                ) : null}
                <div className={styles.field}>
                    <Label htmlFor={'firstname'} className={styles.label}>
                        First Name:
                    </Label>
                    <Input
                        id={'firstname'}
                        value={data?.firstname}
                        placeholder={'first name'}
                        readOnly={readonly}
                        onChange={(e) => {
                            onChangeFirstName?.(e.target.value)
                        }}
                    />
                </div>
                <div className={styles.field}>
                    <Label htmlFor={'lastname'} className={styles.label}>
                        Last Name:
                    </Label>
                    <Input
                        id={'lastname'}
                        className={styles.input}
                        value={data?.lastname}
                        placeholder={'last name'}
                        readOnly={readonly}
                        onChange={(e) => {
                            onChangeLastName?.(e.target.value)
                        }}
                    />
                </div>
                <div className={styles.field}>
                    <Label htmlFor={'age'} className={styles.label}>
                        Age:
                    </Label>
                    <Input
                        id={'age'}
                        type={'number'}
                        className={styles.input}
                        value={data?.age}
                        placeholder={'age'}
                        readOnly={readonly}
                        onChange={(e) => {
                            onChangeAge?.(e.target.value)
                        }}
                    />
                </div>
                <div className={styles.field}>
                    <Label htmlFor={'city'} className={styles.label}>
                        City:
                    </Label>
                    <Input
                        id={'city'}
                        className={styles.input}
                        value={data?.city}
                        placeholder={'city'}
                        readOnly={readonly}
                        onChange={(e) => {
                            onChangeCity?.(e.target.value)
                        }}
                    />
                </div>
                <div className={styles.field}>
                    <Label htmlFor={'username'} className={styles.label}>
                        Username:
                    </Label>
                    <Input
                        id={'username'}
                        className={styles.input}
                        value={data?.username}
                        placeholder={'username'}
                        readOnly={readonly}
                        onChange={(e) => {
                            onChangeUserName?.(e.target.value)
                        }}
                    />
                </div>
                <div className={styles.field}>
                    <Label htmlFor={'avatar'} className={styles.label}>
                        Avatar:
                    </Label>
                    <Input
                        id={'avatar'}
                        className={styles.input}
                        value={data?.avatar}
                        placeholder={'avatar'}
                        readOnly={readonly}
                        onChange={(e) => {
                            onChangeAvatar?.(e.target.value)
                        }}
                    />
                </div>
                <div className={styles.field}>
                    <Label htmlFor={'country'} className={styles.label}>
                        Country:
                    </Label>
                    <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
                </div>
                <div className={styles.field}>
                    <Label htmlFor={'currency'} className={styles.label}>
                        Currency:
                    </Label>
                    <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
                </div>
            </div>
        </div>
    )
}

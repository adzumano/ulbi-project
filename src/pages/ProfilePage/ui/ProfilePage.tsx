import {
    ProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileIsReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from 'entities/Profile'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { Text } from 'shared/ui/Text/Text'

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
    profile: profileReducer,
}
const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileIsReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    const onChangeFirstName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ firstname: value }))
        },
        [dispatch],
    )

    const onChangeLastName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value }))
        },
        [dispatch],
    )

    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
        },
        [dispatch],
    )

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value }))
        },
        [dispatch],
    )

    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value }))
        },
        [dispatch],
    )

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value }))
        },
        [dispatch],
    )

    const onChangeCountry = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ country: value }))
        },
        [dispatch],
    )

    const onChangeCurrency = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ currency: value }))
        },
        [dispatch],
    )

    useDynamicModuleLoader({ reducers })
    useInitialEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])
    return (
        <div>
            <ProfilePageHeader />
            {validateErrors?.length > 0
                ? validateErrors.map((err) => <Text key={err} variant={'error'} text={err} />)
                : null}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUserName={onChangeUserName}
                onChangeAvatar={onChangeAvatar}
                onChangeCountry={onChangeCountry}
                onChangeCurrency={onChangeCurrency}
            />
        </div>
    )
}

export default ProfilePage

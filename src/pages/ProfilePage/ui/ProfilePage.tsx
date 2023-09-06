import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'

const reducers: ReducersList = {
    profile: profileReducer,
}
const ProfilePage = () => {
    const dispatch = useAppDispatch()
    useDynamicModuleLoader({ reducers })

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])
    return (
        <div>
            <ProfileCard />
        </div>
    )
}

export default ProfilePage

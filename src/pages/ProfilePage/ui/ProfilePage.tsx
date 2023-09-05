import { profileReducer } from 'entities/Profile'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'

const reducers: ReducersList = {
    profile: profileReducer,
}
const ProfilePage = () => {
    useDynamicModuleLoader({ reducers })
    return <div>ProfilePage</div>
}

export default ProfilePage

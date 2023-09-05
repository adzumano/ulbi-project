import classNames from 'classnames'
import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}
const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    useDynamicModuleLoader({ reducers: initialReducers })

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(loginByUsername({ username, password }))
        if (res.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, username, password, onSuccess])
    return (
        <div className={classNames(styles.loginForm, className)}>
            <Text title={'Форма авторизации'} />
            {error ? <Text variant={'error'} text={error} /> : null}
            <Input
                type="text"
                className={styles.input}
                value={username}
                onChange={(e) => {
                    onChangeUsername(e.target.value)
                }}
            />
            <Input
                type="text"
                className={styles.input}
                value={password}
                onChange={(e) => {
                    onChangePassword(e.target.value)
                }}
            />
            <Button
                className={styles.loginBtn}
                variant={'outline'}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('logIn')}
            </Button>
        </div>
    )
})

export default LoginForm

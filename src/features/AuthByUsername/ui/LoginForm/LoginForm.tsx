import classNames from 'classnames'
import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}
export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

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

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])
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

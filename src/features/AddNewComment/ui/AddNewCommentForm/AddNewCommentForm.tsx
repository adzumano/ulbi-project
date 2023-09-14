import classNames from 'classnames'
import { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import { getNewCommentText } from '../../model/selectors/addNewCommentSelectors'
import { addNewCommentActions, addNewCommentReducer } from '../../model/slice/addNewCommentSlice'
import styles from './AddNewCommentForm.module.scss'

interface AddNewCommentFormProps {
    className?: string
    onSendComment: (value: string) => void
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
}

const AddNewCommentForm: FC<AddNewCommentFormProps> = memo((props) => {
    const { className, onSendComment } = props
    const text = useSelector(getNewCommentText)
    // const error = useSelector(getNewCommentError)
    // const isLoading = useSelector(getNewCommentIsLoading)
    const dispatch = useAppDispatch()

    useDynamicModuleLoader({ reducers })

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value))
        },
        [dispatch],
    )

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text ?? '')
        onCommentTextChange('')
    }, [text, onSendComment, onCommentTextChange])
    return (
        <div className={classNames(styles.form, className)}>
            <Input
                className={styles.input}
                placeholder={'Введите текст комментарии'}
                value={text}
                onChange={(e) => {
                    onCommentTextChange(e.target.value)
                }}
            />
            <Button variant={'outline'} size={'small'} onClick={onSendCommentHandler}>
                Отправить
            </Button>
        </div>
    )
})

export default AddNewCommentForm

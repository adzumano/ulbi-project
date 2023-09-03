import { type StoryObj } from '@storybook/react'
import { type FC, Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'
import { Loader } from 'shared/ui/Loader/Loader'

export const TranslationDecorator = (Story: FC<StoryObj>) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback={<Loader />}>
            <Story />
        </Suspense>
    </I18nextProvider>
)

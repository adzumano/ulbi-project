import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import { ThemeProvider } from 'shared/config/theme'

import App from './app/App'
import './app/styles/index.scss'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
)

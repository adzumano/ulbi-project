import './styles/index.scss'
import classNames from "classnames";
import {useTheme} from "shared/config/theme";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>toggle</button>
        </div>
    );
};

export default App;
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Switch} from 'react-router-dom';
import Settings from './components/Settings/Settings'
import News from './components/News/News'

// Single Responsibility ( S in SOLID )
// DRY - don't repeat yourself
// KISS - keep it simple stupid

const links = [
    {href: '/profile', name: 'profile'},
    {href: '/dialogs', name: 'dialogs'},
    {href: '/news', name: 'news'},
    {href: '/settings', name: 'settings'},
]
const components = {
    profile: Profile,
    dialogs: Dialogs,
    news: News,
    settings: Settings,
}

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar links={links}/>
            <div className="app-wrapper-content">
                <Switch>
                    <Routes links={links}/>
                </Switch>
            </div>
        </div>
    )
}

export default App

const Routes = ({links}) => {
    return links.map( link => <Route path={link.href} component={components[link.name]}/>)
}

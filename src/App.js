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




function App (props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar links={props.links}/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route path='/profile' component={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs' component={() => <Dialogs/>}/>
                    <Route path='/news' component={() => <News/>}/>
                    <Route path='/settings' component={() => <Settings/>}/>
                </Switch>
            </div>
        </div>
    )
}

export default App


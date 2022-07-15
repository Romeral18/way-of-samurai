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
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </Switch>
            </div>
        </div>
    )
}

export default App


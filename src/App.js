import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebur}/>
                <div className="app-wrapper-content">
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage} addPost={props.addPost}
                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs'
                           component={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}
                                                     updateNewMessageText={props.updateNewMessageText}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

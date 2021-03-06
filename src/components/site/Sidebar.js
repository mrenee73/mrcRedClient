import {
    Route,
    Link,
    Switch   
} from 'react-router-dom';
import {Button} from 'reactstrap';
import CreateEntry from '../Entry/Entry'
import ContactForm from '../ContactUs/ContactUs';
import EntryIndex from '../Entry/EntryIndex';
import CommunityIndex from '../Community/Community';





const Sidebar = (props) => {
    console.log(props);
    return(
        <div className= 'sidebar'>
            <div className='sidebar-list-styling'>
                 <ul className='sidebar-list list-unstyled'>
                    <li><Button><Link to ='/entry'>Log a Beer</Link></Button></li>
                    <br/>
                    <li><Button><Link to ='/entryindex'>My Beers</Link></Button></li>
                    <br/>
                    <li><Button><Link to ='/community'>View Other Hoppers' Beers</Link></Button></li>
                    <br/>
                    <li><Button><Link to ='/contactus'>Contact Us</Link></Button></li>
                    <br/>
                    <li><Button><Link to ='/'onClick={props.clearToken}>Log Out</Link></Button></li>
                </ul> 
            </div> 
             <div className='sidebar-route'>
                <Switch> 
                     <Route exact path='/'><CommunityIndex /></Route>
                    <Route exact path='/entry'><CreateEntry token ={props.token}/></Route>
                    <Route exact path='/contactus'><ContactForm /></Route>
                    <Route exact path='/entryindex'><EntryIndex token ={props.token}/></Route>
                    <Route exact path='/community'><CommunityIndex /></Route>
                </Switch> 
         </div>
        </div>
    );
};

export default Sidebar;
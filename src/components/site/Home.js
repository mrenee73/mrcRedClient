import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import APIURL from "../../helpers/environment";


const Home = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]  = useState('');
    const [email, setEmail]  = useState('');
    const [password, setPassword]  = useState('');
       const [login, setLogin] = useState(true);
    
       
    const title = () => {
        return login ? 'Hop to It! Login' : 'Hop to It! Register';
            }
    const buttonText = () => {
        return login ? 'Woah! Not a Hopper Yet? Register Now!' : 'Already a Hopper? Sign In!!';
            }
    const loginToggle = (event) => {
        event.preventDefault();
        
        setLogin(!login);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
console.log("submit");
        let reqBody = login ?
        {
            email: email,
            password: password,
            
        } : {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,            
        }

        let url = login ? `${APIURL}/user/login` : `${APIURL}/user/register`;

        fetch(url,{
            method: 'POST',
            body: JSON.stringify({user: reqBody}), 
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then((response) => response.json())
        .then((result) =>{
            console.log(result);
            props.updateToken(result.sessionToken);
        }).catch(err => console.log(err));
        
    }

    const signupFields = () => !login ? 
    (
        <div>
            <FormGroup>
            <Label htmlFor='firstName'>First Name</Label>
            
            <Input type="text" id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} />
           </FormGroup>    
            
            <FormGroup>
            <Label htmlFor='lastName'>Last Name</Label>
            
            <Input type="text" id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} />
            </FormGroup>
           
        </div>
    ) : null;
    
    


    return(
        <div className= 'mainOne'>
            <div className= 'mainDiv'>
                <p>Welcome to</p>
                <h1 className= "whiteHeading"> Hop to It!</h1>
                <br/>
                <br/>
                <br/>
                <h4 className= "whiteHeadingOne">Welcome to our beer lover's web site. <br/>
                Once you register you can log in  and keep track of your favorite  <br/>(or least favorite) beers as well as find out what is happening with your fellow beer lovers. </h4>

               
                <br/>
               
                <Button onClick={loginToggle}>{buttonText()}</Button>
            
                <br />
                <br/>
                <div className="position-relative">
                <Container>
                <h1>{title()}</h1>  
                <Form>
                    {signupFields()}
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type= "password" name="password" value = {password} 
                    onChange={(e) => setPassword(e.target.value)}/>                  
                </FormGroup>
                         
                <Button type="submit" disabled={(password.length >= 5 )? false : true} onClick={handleSubmit}>Submit</Button>
                                                
                </Form>

                </Container>
                </div>
            </div>
        </div>
    );
};
// cartoon PNG Designed By 588ku from <a href="https://pngtree.com"> Pngtree.com</a>
export default Home;
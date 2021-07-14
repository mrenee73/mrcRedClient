import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Entry.css'
import APIURL from '../../helpers/environment';

const CreateEntry = (props) => {
    const[nameOfBeer, setNameOfBeer] = useState('');
    const[nameOfBrewery, setNameOfBrewery] = useState('');
    const[nameTheStyle, setNameTheStyle] = useState('');
    const[nameTheABV, setNameTheABV] = useState('');
    const[nameTheIBU, setNameTheIBU] = useState('');
    const[nameTheRating, setNameTheRating] = useState('');
    const[nameTheDescription, setNameTheDescription] = useState('');
    console.log(props.token);
    const postEntry = e => {
        e.preventDefault();

        let url = `${APIURL}/log/`;
        // console.log(e);
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({log:{nameOfBeer: nameOfBeer, brewery: nameOfBrewery, style: nameTheStyle , abv: nameTheABV, ibu: nameTheIBU, rating: nameTheRating, description: nameTheDescription}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        })
        .then((response) => response.json())
        .then((result) =>{
        console.log(result);
            setNameOfBeer('');
            setNameOfBrewery('');
            setNameTheStyle('');
            setNameTheABV('');
            setNameTheIBU('');
            setNameTheRating('');
            setNameTheDescription('');
    }).catch(err => console.log(err));

    }

    return(
        <div className = "main">
            <div className = "mainDiv">
            <h1 className= "whiteHeading">New Beer</h1>
                <Form onSubmit={postEntry}>
                    <FormGroup>
                        <Label htmlFor="nameOfBeer">Name Of Beer</Label>
                        <Input name="nameOfBeer" value={nameOfBeer} onChange={(e) => setNameOfBeer(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nameOfBrewery">Brewery</Label>
                        <Input  name="nameOfBrewery" value={nameOfBrewery} onChange={(e) => setNameOfBrewery(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nameTheStyle">Style</Label>
                        <Input  name="nameTheStyle" value={nameTheStyle} onChange={(e) => setNameTheStyle(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nameTheABV">ABV (Alcohol By Volume)</Label>
                        <Input name="nameTheABV" value = {nameTheABV} onChange={(e) => setNameTheABV(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nameTheIBU">IBU (International Bitterness Units)</Label>
                        <Input name="nameTheIBU" value = {nameTheIBU} onChange={(e) => setNameTheIBU(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nameTheDescription">Description </Label>
                        <Input name="nameTheDescription" value = {nameTheDescription} onChange={(e) => setNameTheDescription(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nameTheRating">Rating</Label>
                        <Input type="select" name="nameTheRating" value={nameTheRating} onChange={(e) => setNameTheRating(e.target.value)}>
                        <option></option>
                        <option value = "1: Would Never Drink It Again">1: Would Never Drink It Again</option>
                        <option value = "2: Would Drink if its free">2: Would Drink if its free</option>
                        <option value = "3: Will finish this beer">3: Will finish this beer</option>
                        <option value = "4: Would Drink More than One">4: Would Drink More than One</option>
                        <option value = "5: Will Always Have This On Hand">5: Will Always Have This On Hand</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Enter</Button>
                </Form>
        </div>
        </div>
    )
    
}

export default CreateEntry;
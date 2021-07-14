import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';


const AdminUpdateEntry = (props) => {
    const[editNameOfBeer, setEditNameOfBeer] = useState(props.entryToUpdate.title);
    const[editNameOfBrewery, setEditNameOfBrewery] = useState(props.entryToUpdate.description);
    const[editNameTheStyle, setEditNameTheStyle] = useState(props.entryToUpdate.category);
    const[editNameTheABV, setEditNameTheABV] = useState(props.entryToUpdate.status);
    const[editNameTheIBU, setEditNameTheIBU] = useState(props.entryToUpdate.status);
    const[editNameTheDescription, setEditNameTheDescription] = useState(props.entryToUpdate.status);
    const[editNameTheRating, setEditNameTheRating] = useState(props.entryToUpdate.status);


    

    console.log(props.entryToUpdate);
    const editEntry = e => {
        e.preventDefault();


        fetch(`${APIURL}/log/admin/update/${props.entryToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log:{nameOfBeer: editNameOfBeer, brewery: editNameOfBrewery ,style: editNameTheStyle, abv: editNameTheABV, ibu: editNameTheIBU, description: editNameTheDescription, rating: editNameTheRating }}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        })
        .then((response) => response.json())
        .then((result) =>{
        console.log(result);
        
    }).then(() => props.fetchEntries())
    .then(()=> props.updateOff())
    
    .catch(err => console.log(err));

    }

    return(
        <div>
            <h1>Update Beer Info</h1>
                <Form onSubmit={editEntry}>
                    <FormGroup>
                        <Label htmlFor="editNameOfBeer">Name of Beer </Label>
                        <Input name="editNameOfBeer" value={editNameOfBeer} onChange={(e) => setEditNameOfBeer(e.target.value)}/>
                    </FormGroup>                   
                    <FormGroup>
                        <Label htmlFor="editNameOfBrewery">Brewery</Label>
                        <Input type="select" name="editNameOfBrewery" value={editNameOfBrewery} onChange={(e) => setEditNameOfBrewery(e.target.value)}>
                                                
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editNameTheStyle">Style</Label>
                        <Input type="select" name="editNameTheStyle" value={editNameTheStyle} onChange={(e) => setEditNameTheStyle(e.target.value)}>
                                                
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editNameTheABV">ABV (Alcohol By Volume)</Label>
                        <Input type="select" name="editNameTheABV" value={editNameTheABV} onChange={(e) => setEditNameTheABV(e.target.value)}>
                                                
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editNameTheIBU">IBU (International Bitterness Units)</Label>
                        <Input type="select" name="editNameTheIBU" value={editNameTheIBU} onChange={(e) => setEditNameTheIBU(e.target.value)}>
                                                
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editNameTheDescription">Description</Label>
                        <Input type="select" name="editNameTheDescription" value={editNameTheDescription} onChange={(e) => setEditNameTheDescription(e.target.value)}>
                                                
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editNameTheRating">Rating:</Label>
                        <Input type="select" name="editNameTheRating" value={editNameTheRating} onChange={(e) => setEditNameTheRating(e.target.value)}>
                        <option></option>
                        <option value = "1: Would Never Drink It Again">1: Would Never Drink It Again</option>
                        <option value = "2: Would Drink if its free">2: Would Drink if its free</option>
                        <option value = "3: Will finish this beer">3: Will finish this beer</option>
                        <option value = "4: Would Drink More than One">4: Would Drink More than One</option>
                        <option value = "5: Will Always Have This On Hand">5: Will Always Have This On Hand</option>                        
                        </Input>
                    </FormGroup>                   
                    <Button type="submit">Post</Button>
                </Form>
        </div>
    )
    
}

export default AdminUpdateEntry;
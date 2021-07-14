import React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';


const EntryTable = (props) => {
    const deleteEntry = (entry) => {
        fetch(`${APIURL}/log/${entry.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchEntries())
    }

    const entryMapper = () => {
        console.log(props.entries);
        return props.entries.map((entry,index) =>{
           
            return(
                <tr key={index}>
                    <th scope="row">{entry.id}</th>
                    <td>{entry.nameOfBeer}</td>               
                    <td>{entry.brewery}</td>
                    <td>{entry.style}</td>
                    <td>{entry.abv}</td>
                    <td>{entry.ibu}</td>
                    <td>{entry.description}</td>
                    <td>{entry.rating}</td>
                    <td>
                        <Button  onClick={() => {props.editUpdateEntry(entry); props.updateOn()}}>Update</Button>
                        <Button  onClick={() => {deleteEntry(entry)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h1 className= "whiteHeading">All My Beer</h1>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Beer</th>
                    <th>Brewery</th>
                    <th>Style</th>
                    <th>ABV</th>
                    <th>IBU</th>
                    <th>Description</th>
                    <th>Rating</th>

                </tr>
            </thead>
            <tbody>
                {entryMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default EntryTable;
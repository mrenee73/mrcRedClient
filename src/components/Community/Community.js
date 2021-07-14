import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import APIURL from '../../helpers/environment';

const CommunityIndex = () => {
    const [community, setCommunity] = useState([])

    const fetchCommunityEntries = () => {
    fetch(`${APIURL}/log/userInfo/`,{
        method: 'GET',
        headers: new Headers ({
            'Content-Type' : 'application/json',           
        })
    }).then ((res) => res.json())
    .then ((logData) => {
        setCommunity(logData.posts);
        console.log(logData); 
    })
}
console.log(community);
useEffect(() => {
    fetchCommunityEntries();
}, [])




const communityMapper = () => {
    return community.map((posts,index) => {
       
        return(
            <tr key={index}>
                <th scope="row">{posts.user.firstName} {posts.user.lastName}</th>
                <td>{posts.nameOfBeer}</td>               
                <td>{posts.brewery}</td>                
                <td>{posts.style}</td>                
                <td>{posts.abv}</td>
                <td>{posts.ibu}</td>
                <td>{posts.description}</td>
                <td>{posts.rating}</td>
            </tr>
        )
    })
};

return(
    <div className = "main">
        <div className = "mainDiv">
    <h1 className= "whiteHeading">What Your Fellow Hoppers Are Saying</h1>
    <hr/>
    
    <Table striped>
        <thead>
            <tr>
                <th>Hopper</th>
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
            {communityMapper()}
        </tbody>
    </Table>
    </div>
    </div>
)
}

export default CommunityIndex;
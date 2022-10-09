import React, {useEffect, useState} from 'react';
import {Container} from '../Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Listings = () => {

const [products, setProducts] = useState([]);
useEffect(() => {
  fetch("/getListings", {
    method: "GET",
  }).then(async (response) => {
  let res = await response.json()
  setProducts(res)
})
}, []) //, change to just }) this help with live update -> but it's also run non stop in background

return (	
	<div
	style={{
		display: 'block',
		justifyContent: 'Left',
		alignItems: 'Left',
		height: '100vh',
		padding: '2%'
	}}
	>
	<h1>Viewing Your Current Listings</h1>
	<div class="d-flex">
      {products.map(product => 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="primary">Edit</Button>
		<Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
       )}
    </div>
	<Container triggerText={'Add Product'} onSubmit={onSubmit}/>
	</div>
);
};

const onSubmit= (event) => {
	event.preventDefault(event);
	console.log(event.target.name.value)
	let obj = event.target;
	const json = {
		name:obj.name.value,
		category:obj.category.value,
		description:obj.description.value,
		price:obj.price.value
	};
	let body = JSON.stringify(json);

	console.log(body)
	fetch("/addListing", {
		method:"POST",
		headers: { "Content-Type": "application/json" },
		body,
	}).then(async(response) =>{
		let res = await response.json()
	})
}

export default Listings;

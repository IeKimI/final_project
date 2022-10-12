
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import gompei from '../../public/gompei.png';
import Popup from '../components/DetailPopup';

const Shop = (props) => {

const [products, setProducts] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  props.getUser()
  if (!props.user.name) {
    navigate('/login');
  }
  else {
    fetch("/getAllProducts", {
      method: "GET",
    }).then(async (response) => {
    let res = await response.json()
    setProducts(res)
  }).then(fetch("/shop", {
    method:"GET"
  }))
  }
  
}, [])

//Popup stuff
const [isOpen, setIsOpen] = useState(false);
const [product, setProduct] = useState([]);

function togglePopup(product) {
  setIsOpen(!isOpen);
  setProduct(product);
};

  return (
    <div
      style={{
        display: 'block',
        justifyContent: 'Left',
        alignItems: 'Left',
        padding: '2%'
      }}>

      <h1>The GoataShop</h1>
      <div class="d-flex" style={{overflowY: 'scroll', overflowX: 'scroll'}}>

      <Row m={1} md={3} className="g-4">
      {products.map(product => 
      <Col>
      <Card style={{ width: '18rem' }} onClick = {() => togglePopup(product)}>
        <Row>
          <Col>
      <Card.Img variant="top" src={gompei} />
      </Col>
      <Col>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
    </Col>
    
       )}    </Row>

    </div>
    </div>
  );
};

export default Shop;
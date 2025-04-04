import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



function Product_page() {
  let [product, setproduct] = useState([]);
  useEffect(() => {
    let getproducts = async () => {
      let productdata = await fetch("http://localhost:3000/products");
      let records = await productdata.json();

      console.log(records);
      
      setproduct(records);
    }
    getproducts();
  }, [setproduct]);
  return (
    <Container>
      <Row className="justify-content-md-center">
        {product.map((v,i)=>{
          return(
            <Col md="auto">
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={v.image} height={"300px"} />
            <Card.Body>
              <Card.Title>{v.title.slice(0,20)}</Card.Title>
              <Card.Text>
                {v.description.slice(0,100)}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
          )
        })}
        
      </Row>
    </Container>
  );
}

export default Product_page;

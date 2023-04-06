import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../App.css'
const ProductComp = () => {
    const products = useSelector((product) => product.allProducts.products)
    
  return (
      <Container>
        <Row >
        {
            products && products.map((product) =>{
                const {id,title,description,category,image} = product
                return (

                            <Col key={id} sm={3}>
                                <div>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={image} width={100} height={320} />
                                        <Card.Body>
                                            <Card.Title>{title}</Card.Title>
                                            <Link to={`product/${id}`}>Go somewhere</Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                )
            })
        }
        </Row>
    </Container>
  )
}

export default ProductComp
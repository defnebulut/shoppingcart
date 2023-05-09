import products from "../data/products.json"
import {Col, Row} from "react-bootstrap"
import {StoreItem} from "../components/StoreItem"

export function ProductList(){
    return <>
    <h1>Products</h1>
    <Row md={2} lg={3} className="g-3">
        {products.map(item=>(
        <Col key={item.id}>
            <StoreItem {...item}/>
            </Col>
            ))}
    </Row>
    </>
}
import products from "../data/products.json"
import {Col, Row} from "react-bootstrap"
import {StoreItem} from "../components/StoreItem"
import { useLocation, useParams } from 'react-router-dom';

export function Details() {
    const {id} = useParams();
    const location = useLocation();
    const productId = id ?? "";
    const selectedItem = products.find(item => item.id === parseInt(productId));
    if (!selectedItem) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <Col key={selectedItem.id}>
            <StoreItem {...selectedItem}/>
            </Col>
        </div>
    );
}
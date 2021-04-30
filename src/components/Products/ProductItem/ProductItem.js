import { useContext } from 'react';

import Thumbnail from "../../Thumbnail";
import { Container, Row, Col } from "../../Grid";
import ProductItemForm from './ProductItemForm';
import classes from './ProductItem.module.css';
import CartContext from '../../../store/cart-context';

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
cartCtx.addItem({
   
    id: props.id,
    name: props.name,
    amount: amount,
    price: props.price,
    thumbnail: props.thumbnail
});
    };

return (
    <li className={classes.strain}>
        <Container>
            <Row>
            <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
    <div><h3>{props.name}</h3>
    <div className={classes.description}>{props.description}</div>
    <div className={classes.price}>{price}</div>
    </div>
    
    <div>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
    <hr></hr>
    </Col>
    </Row>
    </Container>
</li>
);
};

export default ProductItem;
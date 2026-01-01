import { useRef, useState } from "react";
import Counter from "../components/counter";
import CartProductCard from "../components/cartproductcard";

const Cart = () => {
    return (
        <div className="container">
            <div className="row p-4">
                <div className="col">
                    <h4 className="text-muted">Product</h4>
                    <hr />
                    <CartProductCard product={{
                        "id": 1,
                        "name": "my first product",
                        "description": "description",
                        "image_url": "demo",
                        "mrp": 10000
                    }} />

                </div>
                <div className="col-3">
                    <h4 className="text-muted">Summary</h4>
                    <hr />
                    <p>Total :</p>
                    <p>Discount :</p>
                    <p>Shipping Charges :</p>
                    <hr />
                    <p>Grand Total :</p>
                    <hr />
                    <button className="btn btn-dark w-100">CheckOut</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
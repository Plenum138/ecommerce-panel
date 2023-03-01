import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.scss";
import {
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} from "../../Redux/slice/Cart/CartSlice";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import { toast } from "react-toastify";

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  //calculate total price
  const totalPrice = products.cart.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );



  if (products.cart.length === 0) {
    return <EmptyCart />;
  }
  console.log("🚀 ~ file: Checkout.js:26 ~ Checkout ~ products:", products)

  

  return (
    <div className="container py-5 mt-4">
      <h2 className="py-3 text-center">Checkout Page</h2>
      <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {products.cart.length} items</h5>
          </div>
          <div className="">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {products?.cart.length > 0 && products.cart.map((product) => {
                return <>
  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
{product.title}  
              <span>
              {product.quantity} X ${product.price}  
                </span>
              </li>
                </>
              } )
            }
            
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>${totalPrice}</strong>
                </span>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p>
              <strong>Expected shipping delivery</strong>
            </p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p>
              <strong>We accept</strong>
            </p>
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa"
            />
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express"
            />
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard"
            />
         
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>

    </div>
  );
};

export default Checkout;

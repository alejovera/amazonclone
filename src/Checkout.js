import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket }] = useStateValue()
    
    return (
        <div className="checkout">
            <div className="checkout__left"> 
                <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/shazam/US-GC-EN-Birthday-House-Ads-1940x500--CB445346298--yJoV4._V445556804_.jpg" />
                {basket?.length === 0 ? (
                    <div>
                        <h3>Your Shopping Basket is empty</h3>
                        <p>You have no items in your basket. To
                        buy click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket: </h2>
                        {/* Lista de productos del carrito */}
                        {basket?.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right"> 
                    <h1>Hola</h1>
                    <Subtotal />    
                </div>
            )}
        </div>
    )
}   

export default Checkout

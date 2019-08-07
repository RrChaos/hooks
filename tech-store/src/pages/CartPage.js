import React from 'react'
import CartSection from "../components/CartP/Cart";
import Hero from "../components/Hero";
import Bcg from "../images/storeBcg.jpeg";

export default function CartPage() {
	return (
		<>
			<Hero img={Bcg}/>
			<CartSection />
		</>
	)
}

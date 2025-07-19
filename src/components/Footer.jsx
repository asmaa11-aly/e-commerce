import { Link } from 'react-router-dom'
import logo from '../assets/images/freshcart-logo.svg'

export default function Footer() {
  return <>
  
 <footer className=" rounded-lg shadow-sm m-4">
      
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
       
        <div>
          <h2 className="text-2xl font-bold mb-4">E-Shop</h2>
          <p className="text-sm text-green-900 leading-relaxed">
            Find your next favorite product at unbeatable prices. Safe shopping, fast shipping, and reliable service.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-green-100">
            <li><a href="#" className="hover:text-white transition">All Products</a></li>
            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition">Offers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-green-100">
            <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-green-900 mb-4">
            Get updates about new products and exclusive discounts.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md bg-green-600 text-white placeholder-green-200 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md font-semibold text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

     
      <div className="border-t border-green-600 mt-10 pt-5 text-center text-sm text-green-900">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>


    </footer>

  </>
   
  
}

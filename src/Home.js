import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img 
            className='home_image'
            src='https://www.xmple.com/wallpaper/gradient-purple-green-linear-1366x768-c2-008080-9932cc-a-15-f-14.svg'
            alt=''
        />
                                   
        <div className='home_row'>   {/* ROW 1 */}
            <Product 
                title='Apple iPhone 13 Pro Max (256GB) - Sierra Blue'
                price={132000}
                image='https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg'
                rating={5}
            />
            
            <Product 
                title='ASUS ROG Zephyrus G14 (2021) 14-inch (35.56 cms) QHD 120Hz, AMD Ryzen 9 5900HS'
                price={139000}
                image='https://m.media-amazon.com/images/I/81rOuSWZtvL._SX522_.jpg'
                rating={5}
            />
            
        </div>

        <div className='home_row'>   {/* ROW 2 */}
            <Product 
                title='Marshall Kilburn 2 Portable Bluetooth Speaker'
                price={29000}
                image='https://m.media-amazon.com/images/I/81obBPE+90L._AC_SX522_.jpg'
                rating={5}
            />
            
            <Product 
                title='Samsung Galaxy Watch 3 45mm SM-R845FZKAINS'
                price={22000}
                image='https://m.media-amazon.com/images/I/71VItIYqybL._SY679_.jpg'
                rating={5}
            />

            <Product 
                title='APPLE Airpods Pro With Wireless Charging Case (Pearl White, True Wireless)'
                price={20000}
                image='https://m.media-amazon.com/images/I/4102rMO9sXL._SX522_.jpg'
                rating={5}
            />
            
        </div>

        <div className='home_row'>   {/* ROW 3 */}

            <Product 
                title='DJI MAVIC 2 Pro With Smart Controller, DJMAVIC2PSC'
                price={241000}
                image='https://m.media-amazon.com/images/I/61j4acmknmL._AC_SL1500_.jpg'
                rating={5}
            />

             <Product 
                title='2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Purple'
                price={52000}
                image='https://m.media-amazon.com/images/I/61k05QwLuML._SX679_.jpg'
                rating={5}
            />  

        </div>

      </div>
    </div>
  )
}

export default Home






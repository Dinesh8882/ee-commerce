// Categories
import category_1 from './category-thumb-2.jpg'
import category_2 from './category-thumb-4.jpg'
import category_3 from './category-thumb-5.jpg'
import category_4 from './category-thumb-6.jpg'
import category_5 from './category-thumb-7.jpg'
import category_6 from './category-thumb-8.jpg'


// Products images 
import product_1 from './product-1-1.jpg'
import product_1_2 from './product-1-2.jpg'
import product_2 from './product-2-1.jpg'
import product_2_2 from './product-2-2.jpg'
import product_3 from './product-3-1.jpg'
import product_3_2 from './product-3-2.jpg'
import product_4 from './product-4-1.jpg'
import product_4_2 from './product-4-2.jpg'
import product_5 from './product-5-1.jpg'
import product_5_2 from './product-5-2.jpg'
import product_6 from './product-6-1.jpg'
import product_6_2 from './product-6-2.jpg'
import product_7 from './product-7-1.jpg'
import product_7_2 from './product-7-2.jpg'
import product_8 from './product-8-1.jpg'
import product_8_2 from './product-8-2.jpg'


// Deal of the day 
import banner_4 from './menu-banner-7.jpg'
import banner_5 from './menu-banner-8.jpg'

// Banner image
import banner_1 from './banner-1.png'
import banner_2 from './banner-2.png'
import banner_3 from './banner-3.png'

// Products data
const products = [
  {
    id: 1,
    tag: {
      name: "Hot",
      bgColor: "#ff75a0"
    },
    category: "Clothing",
    title: "Flowers Sleeve Lapel Shirt",
    rating: {
      stars: "⭐⭐⭐⭐☆",
      percentage: "90%"
    },
    price: {
      current: 238.85,
      original: 245.80
    },
    isDiscounted: true,
    imageUrl: {
      front_img: product_1,
      back_img: product_1_2
    },
    inCart: false,
    inWishList: false,
    quantity: 1,
    subTotale: 1,
    cartSubTotale: 1

  },
  {
    id: 2,
    tag: {
      name: "New",
      bgColor: "#99bbad"
    },
    category: "Clothing",
    title: "Plain Color Pocket Shirts",
    rating: {
      stars: "⭐⭐⭐⭐☆",
      percentage: "50%"
    },
    price: {
      current: 138.85,
      original: 255.80
    },
    isDiscounted: true,
    imageUrl: {
      front_img: product_2,
      back_img: product_2_2
    },
    inCart: false,
    inWishList: false,
    quantity: 1,
    subTotale: 1,
    cartSubTotale: 1

  },
  {
    id: 3,
    tag: {
      name: "Best Sell",
      bgColor: "#ffab73"
    },
    category: "Shirts",
    title: "Vintage Floral Oil Shirts",
    rating: {
      stars: "⭐⭐⭐⭐☆",
      percentage: "90%"
    },
    price: {
      current: 338.85,
      original: 455.80
    },
    isDiscounted: true,
    imageUrl: {
      front_img: product_3,
      back_img: product_3_2
    },
    inCart: false,
    inWishList: false,
    quantity: 1,
    subTotale: 1,
    cartSubTotale: 1

  },
  {
    id: 4,
    tag: {
      name: "Sale",
      bgColor: "#a1cae2"
    },
    category: "Shirt",
    title: "Flowers Sleeve Lapel Shirt",
    rating: {
      stars: "⭐⭐⭐⭐☆",
      percentage: "70%"
    },
    price: {
      current: 123.85,
      original: 235.8
    },
    isDiscounted: true,
    imageUrl: {
      front_img: product_4,
      back_img: product_4_2
    },
    inCart: false,
    inWishList: false,
    quantity: 1,
    subTotale: 1,
    cartSubTotale: 1

  },
  {
    id: 5,
    tag: {
      name: "-30%",
      bgColor: "#ff75a0"
    },
    category: "Clothing",
    title: "Colorful Hawaiian Shirts",
    rating: {
      stars: "⭐⭐⭐☆☆",
      percentage: "90%"
    },
    price: {
      current: 123.85,
      original: 235.8
    },
    isDiscounted: true,
    imageUrl: {
      front_img: product_5,
      back_img: product_5_2
    },
    inCart: false,
    inWishList: false,
    quantity: 1,
    subTotale: 1,
    cartSubTotale: 1

  },
  {
    id: 6,
    tag: {
      name: "-22%",
      bgColor: "#ff75a0"
    },
    category: "Clothing",
    title: "Ethnic Floral Casual Shirts",
    rating: {
      stars: "⭐⭐⭐☆☆",
      percentage: "70%"
    },
    price: {
      current: 238.85,
      original: 245.8
    },
    isDiscounted: true,
    imageUrl: {
      front_img: product_6,
      back_img: product_6_2
    },
    inCart: false,
    inWishList: false,
    quantity: 1,
    subTotale: 1,
    cartSubTotale: 1

  },
  {
    id: 7,
    tag: {
      name: "New",
      bgColor: "#ffab73"
    },
    category: "Shoes",
    title: "Stitching Hole Sandals",
    rating: {
      stars: "⭐⭐⭐☆☆",
      percentage: "98%"
    },
    price: {
      current: 1275.85,
      original: null
    },
    isDiscounted: true,
    imageUrl: {
      front_img: product_7,
      back_img: product_7_2
    },
    inCart: false,
    inWishList: false,
    quantity: 1,
    subTotale: 1,
    cartSubTotale: 1

  },
  {
    id: 8,
    tag: {
      name: undefined,
      bgColor: undefined
    },
    category: "Shirt",
    title: "Mens Porcelain Shirt",
    rating: {
      stars: "⭐⭐⭐☆☆",
      percentage: "70%"
    },
    price: {
      current: 238.85,
      original: 245.8
    },
    isDiscounted: true,
    imageUrl: {
      front_img: product_8,
      back_img: product_8_2
    },
    inCart: false,
    inWishList: false,
    quantity: 1,
    subTotale: 1,
    cartSubTotale: 1

  },
]

// Categries Data 
const categories = [
  {
    category: "Bags",
    img: category_1
  },
  {
    category: "Sandan",
    img: product_7_2
  },
  {
    category: "Scarf Cap",
    img: category_2
  },
  {
    category: "Shoes",
    img: category_3
  },
  {
    category: "Pillowcase",
    img: category_4
  },
  {
    category: "Jumpsuits",
    img: category_5
  },
  {
    category: "Hats",
    img: category_6
  },
  {
    category: "T-Shirt",
    img: product_1
  }
]

// Banner data
const banners = [
  {
    tag: "Smart Offer",
    title: "Save 20% on Woman Bag",
    banner: banner_1
  },
  {
    tag: "Sale off",
    title: "Great Summer Collection",
    banner: banner_2
  },
  {
    tag: "New Arrivals",
    title: "Shop Today’s Deals & Offers",
    banner: banner_3
  }
]

const dealOfTheDay = [
  {
    title: "Deal of the Day",
    subtitle: "Limited quantities.",
    productTitle: "Summer Collection New Morden Design",
    currentPrice: 139.0,
    oldPrice: 168.99,
    offerText: "Hurry Up! Offer End In:",
    countdown: {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    },
    buttonText: "Shop Now",
    image: banner_4, // Replace with your actual image path
  },

  {
    title: "Men Clothing",
    subtitle: "Shirt & Bag",
    productTitle: "Try something new on vacation",
    currentPrice: 178.00,
    oldPrice: 256.99,
    offerText: "Hurry Up! Offer End In:",
    offerEndTime: new Date().getTime() + 5 * 24 * 60 * 60 * 1000,
    buttonText: "Shop Now",
    image: banner_5, // Replace with your actual image path
  }

];


export {
  products,
  categories,
  banners,
  dealOfTheDay
}
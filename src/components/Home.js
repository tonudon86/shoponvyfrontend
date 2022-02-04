import React, { Fragment, useState,useEffect } from 'react';
import MetaData from './layouts/MetaData';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../action/productAction'
import ProductItem from './product/ProductItem';
import Loader from './layouts/Loader';
import { useAlert } from 'react-alert';
import Slider  from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useParams} from "react-router-dom";
import Pagination from 'react-js-pagination'
const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = () => {
  
let { keyword } = useParams();
  const [currentPage, setcurrentPage] = useState(1)
  const [price, setPrice] = useState([1,100000]) 
    const [category, setCategory] = useState('')
    const [ratings, setRatings] = useState(0)
    const categories=[
      "Electronic",
      'Camera',
      'Laptop',
      'Accessories',
      'Headphone',
      'Food',
      'Cloths/Shoes',
      'Beauty/Health',
      'Sports',
      'Outdoor',
      'Home'
    ]
const alert=useAlert()
//  console.log(keyword)
  const dispatch = useDispatch()

  const { loading, products, error, productsCount ,resPerPage} = useSelector(state => state.products)
//  console.log(products)
  useEffect(() => {
 if (error) {
   return alert.error(error)
 }
 
    dispatch(getProducts(keyword,currentPage,price,category,ratings ))
 
  }, [dispatch,alert,error,keyword,currentPage,price, category,ratings])


function setCurrentPageNo(pageNumber) {
  setcurrentPage(pageNumber)
}
  if(!products){
    console.log('no pro')
  }
  else{
    console.log(products)
  }
  console.log(category)
  return (
    <Fragment  >

      {loading ? <Loader/> :

        <Fragment >
          <MetaData title={'Buy Best Product Online'} />
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">

            <div className="row">

                {keyword?(
                  <Fragment>
                    <div className="col-6 col-md-3 mt-5 mb-5">
                    <div className="px-2">
                      <Range
                      marks={{
                        1:`INR1`,
                        100000:`INR100000`
                      }}
                      min={1}
                      max={100000}
                      defaultValue={[1,100000]}
                      tipFormatter={value=>`INR${value}`}
                      titProps={{
                        placement: 'top',
                        visible:true
                      }}
                      value={price}
                      onChange={price=>setPrice(price)}


                      
                      />

                      <hr className="my-2" />
                      <div className="mt-3">
                        <h4 className="mb-2" >
                          Categories
                        </h4> 
                        <ul className="pl-0">
                      {categories.map(categorya=>(
                        <li style={{cursor:"pointer",
                            listStyleType:'none'
                          }}    key={categorya}
                          onClick={()=>setCategory(categorya)}> 
                        {categorya}
                        </li>
                      ))}
                        </ul>
                      </div>

                      
                      <hr className="my-3" />
                      <div className="mt-5">
                        <h4 className="mb-3" >
                          Ratings
                        </h4> 
                        <ul className="pl-0">
                      {[5,4,3,2,1].map(star=>(
                        <li style={{cursor:"pointer",
                            listStyleType:'none'
                          }}    key={star}
                          onClick={()=>setRatings(star)}> 
                        <div className="rating-outer">
                          <div className="rating-inner"
                          style={{width:`${star*20}%`}}
                          >

                          </div>
                        </div>
                        </li>
                      ))}
                        </ul>
                      </div>
                    </div>
                    </div>

                    <div className="col-6 col-md-9">
                      <div className="row">
                        { products.map(product =>(
                    <ProductItem key={product.id} product={product} col={4}/>))}
                      </div>
                    </div>
                    </Fragment>
                ):(
                    products.map(product =>(
                    <ProductItem key={product.id} product={product} col={3}/>))
                )}
    

    



            </div> 
            </section>
                    {resPerPage<=productsCount &&(
                      <div className="d-flex justify-content-center mt-5">
                      <Pagination 
                      activePage={currentPage}
                      itemsCountPerPage={resPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText={'Next'}
                      prevPageText={'Prev'}
                      firstPageText={'First'}
                      lastPageText={'Last'}
                      itemClass="page-item"
                      linkClass="page-link"                 
                      />                   
                    </div>
                    )}
                                
        </Fragment>
      }


    </Fragment>
  )
}

export default Home

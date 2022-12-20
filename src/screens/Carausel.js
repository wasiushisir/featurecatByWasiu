import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Carausel.css'

import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { createList } from '../actions/caraoselAction';
import img1 from '../imgs/babies&toys-612x612.jpg'
import img2 from '../imgs/electronic_accesories.png'
import img3 from '../imgs/electronic_device-removebg-preview.png'
import img4 from '../imgs/health_beauty.png'
import img5 from '../imgs/home_lifestyle-1269761486-612x612.jpg'
import img6 from '../imgs/mens_fashaion-155392321-612x612.jpg'
import img7 from '../imgs/car_motor-170643648-612x612.jpg'
import img8 from '../imgs/pets-1349349263-612x612.jpg'
import img9 from '../imgs/sports_outdoor-1062855462-612x612.jpg'
import img10 from '../imgs/tv_home1305796425-612x612.jpg'
import img11 from '../imgs/watch-1135934992-612x612.jpg'
import img12 from '../imgs/women_fashion-1337843680-612x612.jpg'


let slidesToShow=6
function SampleNextArrow({onClick,slideCount,currentSlide}) {
  
    return (
     <>{currentSlide!==slideCount-slidesToShow&&<div className='arrow arrow-right' onClick={onClick}>
        <BsArrowRight/>
       
      </div>}
      </> 
    );
  }
  
  
  function SamplePrevArrow({onClick,currentSlide}) {
    
    return (
     <> {currentSlide!==0&&<div className='arrow arrow-left' onClick={onClick}>
        
        <BsArrowLeft/>
      </div>}
      </>
    );
  }


  

const Carausel = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  

   
      

      var settings = {
       
        infinite: false,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 3,
         
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
         
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      const dispatch=useDispatch()

      useEffect(()=>{
        dispatch(createList())

      },[])
     
     

      const state =useSelector((state)=>state)
      console.log(state);
      const p=state.list.toString()
      console.log(p);

      let content=state?.list.map((l)=><>
      <p className='vv'>{l}</p>
      </>)
     
    return (
        <div className='container'>
           
        <div className='slider'>
        <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>

         

            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Babies%20&%20Toys'}  rel="noopener noreferrer">
                <img src={img1} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Electronic%20Accessories'}  rel="noopener noreferrer">
                <img src={img2} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Electronic%20Devices'}  rel="noopener noreferrer">
                <img src={img3} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Health%20&%20Beauty'}  rel="noopener noreferrer">
                <img src={img4} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Home%20&%20lifestyle'}  rel="noopener noreferrer">
                <img src={img5} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={"https://brandatoz.com/search/category/Men's%20Fashion"}  rel="noopener noreferrer">
                <img src={img6} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Motorbikes%20and%20Automobiles'}  rel="noopener noreferrer">
                <img src={img7} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Pets'}  rel="noopener noreferrer">
                <img src={img8} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Sports%20&%20Outdoor'}  rel="noopener noreferrer">
                <img src={img9} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/TV%20&%20Home%20Appliances'}  rel="noopener noreferrer">
                <img src={img10} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={'https://brandatoz.com/search/category/Watches%20&%20Accessories'}  rel="noopener noreferrer">
                <img src={img11} alt="" />

              </a>

            </div>
            <div className='slide' >
              <a href={"https://brandatoz.com/search/category/Women's%20Fashion"}  rel="noopener noreferrer">
                <img src={img12} alt="" />

              </a>

            </div>
            


         

           
          
         
        </Slider>

        <Slider   asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        slidesToScroll={3}
        speed={1000}
        swipeToSlide={true}
        focusOnSelect={true}>
        {content}
          
        </Slider>
        
          
        
        
        </div>
            
        </div>
    );
};

export default Carausel;

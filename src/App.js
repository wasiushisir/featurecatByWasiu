import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createList } from './actions/caraoselAction';
import Carausel from './screens/Carausel';

// function SampleNextArrow({onClick}) {
  
//   return (
//     <div className='arrow arrow-right' onClick={onClick}>
//       <BsArrowLeft/>
//     </div>
//   );
// }


// function SamplePrevArrow({onClick}) {
  
//   return (
//     <div className='arrow arrow-left' onClick={onClick}>
//       <BsArrowRight/>
//     </div>
//   );
// }







function App() {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
     
  //   initialSlide: 0,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
    
     
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  // const dispatch=useDispatch()

  // useEffect(()=>{
  //   dispatch(createList())

  // },[])


  // const state =useSelector((state)=>state)
  // console.log(state);
  return (
    <div className="">
      {/* <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
       */}
       <Carausel></Carausel>
    </div>
  );
}

export default App;

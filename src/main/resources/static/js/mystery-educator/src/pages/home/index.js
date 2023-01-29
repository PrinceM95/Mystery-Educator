import React from 'react';
import style from './style.module.scss';
import star from '../../assets/mag-glass.png';
import logo from '../../assets/logo_purple.gif';

const HomePage = () => {
// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;

// function Slideshow() {
//     const [index, setIndex] = React.useState(0);
  
//     React.useEffect(() => {
//       setTimeout(
//         () =>
//           setIndex((prevIndex) =>
//             prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//           ),
//         delay
//       );

//       return () => {};
//     }, [index]);

    return (
        <div className={style.home}>
         {/* <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      ></div>
      </div>
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))} */}
            {/* <div id={style.page_title}> Jac's Mystery Educator! </div> */}
            <div id={style.page_quote}> "Vincit Qui Se Vincit" </div>
            <img src={star} className={style.star_img} alt="shooting star"></img>
            <img src={logo} className={style.logo} alt="logo"></img>
        </div>  
    ); 
}

export default HomePage;
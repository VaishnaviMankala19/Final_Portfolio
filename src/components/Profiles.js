import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../Assets/img/color-sharp.png';

export const Profiles = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="profile" id="profiles">
      <style>
        {`
          .profile .container {
            text-align: center;
          }
          .profile a {
            text-decoration: none;
            color: inherit;
          }
          .profile .item img {
            width: 100px;
            height: 100px;
            border-radius: 5px;
            object-fit: cover;
          }
          .profile .item h5 {
            margin-top: 10px;
          }
          .profile .profile-bx {
            position: relative;
            padding: 50px 0;
          }
          .profile .background-image-left {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: -1;
            width: 100%;
            height: auto;
          }
        `}
      </style>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="profile-bx wow zoomIn">
              <h2>Profiles</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme profile-slider">
                <div className="item">
                  <a href="https://leetcode.com/u/vaishu_1904/" target="_blank" rel="noopener noreferrer">
                    <img src="https://repository-images.githubusercontent.com/408927712/1c5ce46e-266f-43f0-b543-75bf341239b5" alt="Leetcode" />
                    <h5>Leetcode</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.codechef.com/users/vaishu2004" target="_blank" rel="noopener noreferrer">
                    <img src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb" alt="Codechef" />
                    <h5>Codechef</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.geeksforgeeks.org/user/mankalavaishnavi2004/" target="_blank" rel="noopener noreferrer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg4MmFn0o84AVvomIb7ryxCwakjuqetI4ag&s" alt="GeeksforGeeks" />
                    <h5>GeeksforGeeks</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.hackerrank.com/profile/mankalavaishnav1" target="_blank" rel="noopener noreferrer">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/354785340/GA/BS/CK/63475444/hackerrank-software.png" alt="Hackerrank" />
                    <h5>Hackerrank</h5>
                  </a>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}

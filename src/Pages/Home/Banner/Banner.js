import React from 'react';
import { Carousel } from 'react-carousel-minimal';


const Banner = () => {
    const data = [
        {
          image: "https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-white-tshirt-standing-with-arms-picture-id1392528328?b=1&k=20&m=1392528328&s=170667a&w=0&h=yByOSgpC3nsJVJWAdvxGfsUo0p9f3gNWNYo-_iLVpac=",
          caption: "Great specialist with enormous experience!"
        },
        {
          image: "https://media.istockphoto.com/photos/attractive-man-feeling-cheerful-picture-id1365223878?b=1&k=20&m=1365223878&s=170667a&w=0&h=kb0Ow5MJq0n5spA-BIEGLL18GugMqaBh7pnX-IyCfwY=",
          caption: "The best doctor I have ever met!"
        },
        {
          image: "https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?b=1&k=20&m=1364917563&s=170667a&w=0&h=8CrUeKtC9df9I5c0E_H86tc1vkB5FBt5gEr2nVqttP4=",
          caption: "Very nice and kind person!"
        },
        
        {
          image: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg",
          caption: "Great specialist with enormous experience!"
        },
        
        
        {
          image: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg",
          caption: "The best doctor I have ever met!"
        },
        {
          image: "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571__340.jpg",
          caption: "Great specialist with enormous experience!"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
       <div>
            <div style={{ textAlign: "center" }}>
        
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="1000px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1000px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
       </div>
    );
};

export default Banner;
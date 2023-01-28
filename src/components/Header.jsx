import React from 'react';
import image from './assets/imgs1.jpg';

const Header = ({ headerExpanded }) => {
    return (
        <>
            {/* <div className="img-container" >
            <img className="img"src={image} alt="headerImage"/>
            </div>
           <div className="heading">
           <h1>Domain Search!</h1>
           </div> */}

            <div className="head-container">
                <img src={image}
                    className={`head-image ${headerExpanded ?
                        'head-image-expanded' : 'head-image-contracted'}`}
                    alt="headerImage" />
                <h1 className="head-text">Domain Name!</h1>
            </div>

        </>
    );
}

export default Header;
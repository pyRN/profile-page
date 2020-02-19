import React, { Component } from 'react';

class AboutPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="pageComponentStyle">
                <h2>About</h2>
                <div className="row">
                    <div className="col">
                        <img src={require('../media/self_img.jpeg')} className="aboutImgStyle rounded-circle" alt="self_img.jpeg"/>
                    </div>
                    <div className="col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quibusdam? Libero reprehenderit sint vero, minima voluptatem eligendi sit neque nostrum nulla maiores adipisci atque? Nostrum veniam voluptates reiciendis dolore? Rem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt sequi, animi atque, porro ex ipsum possimus voluptas maiores reiciendis aliquam a iste architecto placeat velit. Accusamus tenetur quia incidunt?
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
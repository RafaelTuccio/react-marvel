import { useEffect, useState } from "react";

const HeroImg = (props) => {
    let { img, extension } = props




    return(
        <div className="img-hero">
            
                <img src={img + extension} alt=""/>
               
          
        </div>
    );

}

export default HeroImg;
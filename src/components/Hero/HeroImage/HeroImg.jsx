import { useEffect, useState } from "react";

const HeroImg = (props) => {
    let { img, extension, title } = props




    return(
        <div className="img-hero">
            
                <img src={img + extension} alt={title}/>
               
          
        </div>
    );

}

export default HeroImg;
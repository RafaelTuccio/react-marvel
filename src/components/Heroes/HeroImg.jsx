const HeroImg = (props) => {
    let { hero } = props
    return(
        <div className="img-hero">
            
                <img src={hero.thumbnail.path +"."+ hero.thumbnail.extension} alt=""/>
               
          
        </div>
    );

}

export default HeroImg;
import Heroes from '../Heroes/Heroes';

const HomeMain = (props) => {
    let { heroes } = props;
    return(
        <div className="container-home">
                <Heroes heroes={heroes}/>
        </div>
    );
}

export default HomeMain;
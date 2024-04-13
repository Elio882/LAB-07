export const  RandomComponent = props =>{
    const { urlImg } = props; 
    const { text } =props;
    return(
        <div>
            <img src={urlImg} width="250" height="250"/>
            <center>
                <h3>{text}</h3>
            </center>
        </div>
    )
}

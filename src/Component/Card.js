export default function Card(props){
    return(
        
        <div className="card">
            <img className="aee" src={props.img} height='200px' width="200px"/>
            <div className="honey" style={{textAlign:"center"}}>
                <h2 className="dis1">{props.cloth}</h2>
                <h1 className="dis2">{props.offer}</h1>
                <h2>Price:{props.price}</h2>
                <h2 className="dis11">Shop Now</h2>
            </div>
        </div>
    )
}

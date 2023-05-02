function Heading(props){
    return(
        <div className="heading">
        <div className="title"><h1>{props.title}</h1></div>
        <div className="pattern">
            <div className="dot"></div>
            <div className="hr"><hr/></div>
        </div>
        </div>
    )
}
export default Heading;
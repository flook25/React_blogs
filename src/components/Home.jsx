import home from "../images/home.svg"

export default function Home(){
    return (
        <div className="container" style={{}}>
            <h2>Fist Page</h2>
            <img src={home} alt="home" style={{ width: "300px", height: "auto" }}/>
        </div>
    )
}
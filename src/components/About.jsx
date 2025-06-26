import about from "../images/about.svg"

export default function About(){
    return (
        <div className="container" style={{}}>
            <h2 className="title">About This Page</h2>
            <img src={about} alt="about" style={{ width: "300px", height: "auto" }} />
        </div>
    )
}
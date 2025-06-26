import notfound from "../images/notfound.svg"

export default function NotFound() {
    return (
        <div className="conatainer" style={{}}>
        <h3>Not found the web that you search  404 Not found 🥲</h3>
         <img src={notfound} alt="notfound" style={{ width: "300px", height: "auto" }}/>
        </div>
    )
}
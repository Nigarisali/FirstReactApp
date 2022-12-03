import "./style.css";

function Box() {
    return (
        <div className="item">
            <div className="item-images">
                <img height="100px" src="https://picsum.photos/200/200"/>
            </div>
            <div className="item-text">
                text for image and description
            </div>
        </div>
    )
}
export default Box;
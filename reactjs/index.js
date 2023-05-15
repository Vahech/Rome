//ReactDOM.render(React.createElement('input',{
//    placeholder: "Help Text",
//    onClick: () => console.log("Clicked"),
//    onMouseEnter: () => console.log("Mouse Over"),
//}), document.getElementById("app"))

const inputClick = () => console.log("Clicked")
const mouseOver  = () => console.log("Mouse Over")

const element = <input placeholder="Help Text"
    onClick={inputClick} onMouseEnter={mouseOver}/>

const app = document.getElementById("app")

ReactDOM.render(element, app)
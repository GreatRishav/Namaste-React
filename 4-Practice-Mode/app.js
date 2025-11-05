import React from "react"
import ReactDOM from "react-dom/client"
import { Camera,Chromium,User,Search } from 'lucide-react';

//<div class = "title">
//<h1>This is Heading 1</h1>
//<h2>This is Heading 2</h2>
//<h3>This is Heading 3</h3>
// </div>

//element in React
const title = React.createElement('div',{class:'tile'},
    [React.createElement('h1',{},'This is Heading 1'),
        React.createElement('h2',{},'This is Heading 2'),
        React.createElement('h3',{},'This is Heading 3')]  
);

//Functional Component in React
const Title = ()=> (
    <div className="title" style={{color:"red"}}>
        <h1>This is Heading 1</h1>
        <h2>This is Heading 2</h2>
        <h3>This is Heading 3</h3>
    </div>
)

const Heading = ()=>
(
    <div className="Heading">
        Heading 1
        {Title()}
    </div>
)

const Navbar = ()=>
{
    return (
        <>
            <div className="Outer-Container">
                <div className="left"><Chromium /></div>
                <div className="middle">
                    <input type="text" placeholder="Search"></input>
                    <div className="search-bar" ><Search /></div>
                    </div>
                <div className="right"><User /></div>
            </div>
        </>
    )
}



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Navbar/>);

import React from "react"
import ReactDOM from 'react-dom/client'

//element in react
const heading = (<div>
                        <h1>This is a element in react js</h1>
                </div>)
const Heading = ()=>{
        return (

        <div>
                <h1>This is a functional component in react js</h1>
        </div>)}

ReactDOM.createRoot(document.getElementById('root')).render(<Heading/>);



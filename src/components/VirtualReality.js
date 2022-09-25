import { useState } from "react";
import './VirtualReality.css'
import {Link} from 'react-router-dom'

function VirtualReality() {
    const [boughtItems, setBoughtItems] = useState([])
    // filter: invert(58%) sepia(49%) saturate(6323%) hue-rotate(93deg) brightness(130%) contrast(119%);
    const [table1, setTable1] = useState({width: "40vh", left: "4vw", top: "40vh"})
    const [table2, setTable2] = useState({width: "33vh", left: "18vw", top: "27vh"})
    const [chair1, setChair1] = useState({width: "10vh", right: "32vw", top: "18vh"})
    const [chair2, setChair2] = useState({width: "10vh", right: "36vw", top: "18vh"})
    const [rug, setRug] = useState({width: "30vh", right: "42.5vw", top: "30vh"})
    const doit1 = () => { setTable1({width: "40vh", left: "4vw", top: "40vh", opacity: "1.0", filter: "none"}); setBoughtItems([...boughtItems, "$100 Table"]) }
    const doit2 = () => { setTable2({width: "33vh", left: "18vw", top: "27vh", opacity: "1.0", filter: "none"}); setBoughtItems([...boughtItems, "$100 Table"])}
    const doit3 = () => { setChair1({width: "10vh", right: "32vw", top: "18vh", opacity: "1.0", filter: "none"}); setBoughtItems([...boughtItems, "$50 Chair"]) }
    const doit4 = () => { setChair2({width: "10vh", right: "36vw", top: "18vh", opacity: "1.0", filter: "none"}); setBoughtItems([...boughtItems, "$50 Chair"]) }
    const doit5 = () => { setRug({width: "30vh", right: "42.5vw", top: "30vh", opacity: "1.0", filter: "none"}); setBoughtItems([...boughtItems, "$200 Rug"]) }
    return(
    <div>
    <div className="boughtTitle">
        Donation List
    </div>
    <div className="bought">
        {boughtItems.map(item => {return (<p>{item}</p>)})}
    </div>
    <img className="object" style={table1} onClick={doit1} src="table1.png" alt="dw"></img>
    <img className="object" style={{width: "18vh", left: "10vw", top: "35vh"}} src="chair1.png" alt="dw"></img>
    <img className="object" style={{width: "18vh", left: "17vw", top: "36vh"}} src="chair1.png" alt="dw"></img>

    <img className="object" style={table2} onClick={doit2} src="table1.png" alt="dw"></img>
    <img className="object" style={{width: "14vh", left: "23vw", top: "23vh"}} src="chair1.png" alt="dw"></img>
    <img className="object" style={{width: "14vh", left: "28vw", top: "24vh", filter: "grayscale(100%)"}} src="chair1.png" alt="dw"></img>

    <img className="object" style={{width: "22vh", left: "30vw", top: "20vh"}} src="table1.png" alt="dw"></img>
    <img className="object" style={{width: "10vh", left: "32vw", top: "18vh"}} src="chair1.png" alt="dw"></img>
    <img className="object" style={{width: "10vh", left: "36vw", top: "18vh"}} src="chair1.png" alt="dw"></img>

    <img className="object" style={{width: "15vh", left: "38vw", top: "15vh"}} src="table1.png" alt="dw"></img>
    <img className="object" style={{width: "6vh", left: "39vw", top: "14vh"}} src="chair1.png" alt="dw"></img>
    <img className="object" style={{width: "6vh", left: "42vw", top: "14vh"}} src="chair1.png" alt="dw"></img>


    

    <img className="object" style={{width: "40vh", right: "4vw", top: "40vh"}} src="table2.png" alt="dw"></img>
    <img className="object" style={{width: "18vh", right: "10vw", top: "35vh"}} src="chair2.png" alt="dw"></img>
    <img className="object" style={{width: "18vh", right: "17vw", top: "36vh"}} src="chair2.png" alt="dw"></img>

    <img className="object" style={{width: "33vh", right: "18vw", top: "27vh"}} src="table2.png" alt="dw"></img>
    <img className="object" style={{width: "14vh", right: "23vw", top: "23vh"}} src="chair2.png" alt="dw"></img>
    <img className="object" style={{width: "14vh", right: "28vw", top: "24vh"}} src="chair2.png" alt="dw"></img>

    <img className="object" style={{width: "22vh", right: "30vw", top: "20vh"}} src="table2.png" alt="dw"></img>
    <img className="object" style={chair1} onClick={doit3} src="chair2.png" alt="dw"></img>
    <img className="object" style={chair2} onClick={doit4} src="chair2.png" alt="dw"></img>

    <img className="object" style={{width: "15vh", right: "38vw", top: "15vh"}} src="table2.png" alt="dw"></img>
    <img className="object" style={{width: "6vh", right: "39vw", top: "14vh"}} src="chair2.png" alt="dw"></img>
    <img className="object" style={{width: "6vh", right: "42vw", top: "14vh"}} src="chair2.png" alt="dw"></img>





    <img className="object" style={rug} onClick={doit5} src="rug.png" alt="dw"></img>


        <Link to={'../Campaigns'}>
            <button className="goBack" onClick>Back</button>
        </Link>
    
    </div>
    )
}

export default VirtualReality;
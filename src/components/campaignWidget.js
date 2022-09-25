<<<<<<< HEAD
// import './CampaignWidget.css'
// function CampaignWidget({campaignImg, progress, campaignText, campaignTitle}) {
//     return (
//         <>
//         <div className="campaignWidgetBorder">
//             <div className='campaignWidgetImageBorder'>
//             <img className="campaignWidgetImage" src={campaignImg} alt="dw"></img>
//             </div>
//             <div className="progressBar"><div className="progress" style={{width: progress}}></div></div>
//             <h1>{campaignTitle}</h1>
//             <p className="campaignWidgetText">{campaignText}</p>
//         </div>
//         </>
//     )
// }
=======
import './CampaignWidget.css'
import {Link} from 'react-router-dom'
function CampaignWidget({campaignImg, progress, campaignText}) {
    return (
        <>
        <Link to={'/virtualReality'}>
            <div href="/virtualReality" className="campaignWidgetBorder">
                <div className='campaignWidgetImageBorder'>
                <img className="campaignWidgetImage" src={campaignImg} alt="dw"></img>
                </div>
                <div className="progressBar"><div className="progress" style={{width: progress}}></div></div>
                <p className="campaignWidgetText">{campaignText}</p>
            </div>
        </Link>
        </>
    )
}
>>>>>>> 407417341a25903496744dfdd7eb512c5343866d

// export default CampaignWidget;



import React from "react";

// import Background from "./Background";
import CardIcon from "./CardIcon";

function Card(props){
    return(
  <div>

    <div className="card">
      <div className="thumbnail">
        <img className="left" src={props.card.image} alt="" />
      </div>
      <div className="right">
        <h1>{props.card.title}</h1>
        <div className="author">
          <img src={props.card.peopleImage} alt="" />
          <h2>{props.card.name}</h2>
        </div>
        <div className="separator" />
        <p>{props.card.text}</p>
      </div>
      <h5>{props.card.day}</h5>
      <h6>{props.card.month}</h6>
      <CardIcon />
    </div>
  </div>)
};

export default Card;
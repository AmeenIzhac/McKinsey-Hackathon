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

export default CampaignWidget;
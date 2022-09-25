import './CampaignWidget.css'
function CampaignWidget({campaignImg, progress, campaignText}) {
    return (
        <>
        <div className="campaignWidgetBorder">
            <div className='campaignWidgetImageBorder'>
            <img className="campaignWidgetImage" src={campaignImg} alt="dw"></img>
            </div>
            <div className="progressBar"><div className="progress" style={{width: progress}}></div></div>
            <p className="campaignWidgetText">{campaignText}</p>
        </div>
        </>
    )
}

export default CampaignWidget;
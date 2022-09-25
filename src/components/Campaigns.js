import CampaignWidget from './campaignWidget'
import './Campaigns.css'

function Campaigns() {
    return (
        <>
            <nav className="navbar">   
                {/* <div className="brand">Brand Name</div>  */}
                <div className="navbar-links">
                    <ul>
                        <li> <a href='/'>Brand Name</a></li>
                        <span className='gap'></span>
                        <li> <a href='/'>Campaigns</a></li>
                        <span className='gap'></span>
                        <li> <a href='/campaigns'>Account</a></li>
                    </ul>
                </div>
            </nav>
            <h2>Your Funding These Projects!</h2>
            <div className="projectsBox">
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
            </div>
            <h2>Your Complete Projects!</h2>
            <div className="projectsBox">
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img1.png"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
            </div>
        </>
    )
}

export default Campaigns;
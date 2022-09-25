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
            <h2 className="lilTitle">Your Funding These Projects!</h2>
            <div className="projectsBox">
                <CampaignWidget campaignImg={"img1.png"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img2.jpg"} progress={"60%"} campaignText={"Here is a group of young children learning how to problem solve through the use of product design! They are forming teams and working together to solve problems."}/>
                <CampaignWidget campaignImg={"img3.jpg"} progress={"60%"} campaignText={"In India, education is taken very seriously and you see here a group of young children learning in a school currently being build as part of a HPF project!"}/>
                <CampaignWidget campaignImg={"img4.jpg"} progress={"60%"} campaignText={"Geography lessons are always some childrens favourite lesson. "}/>
                <CampaignWidget campaignImg={"img5.png"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img6.jpg"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img7.jpg"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
            </div>
            <h2 className="lilTitle">Your Complete Projects!</h2>
            <div className="projectsBox">
                <CampaignWidget campaignImg={"img8.jpg"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img9.png"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img10.jpg"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img11.jpg"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img12.png"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img13.jpg"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
                <CampaignWidget campaignImg={"img14.jpg"} progress={"60%"} campaignText={"These guys are 60% way towards there fundraising goal. They are running the distance of a human colon in miles to build a disabled children school in Africa!"}/>
            </div>
        </>
    )
}

export default Campaigns;
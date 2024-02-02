import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className='widgets_header'>
      <h2>LinkedIn News</h2>
      <InfoIcon />
    </div>
    {newsArticle("Tech Startup Raises $10M", "Our startup secures $10 million in funding for groundbreaking projects.")}
    {newsArticle("Top Workplace Recognition", "Honored to be named one of the top workplaces in recent surveys.")}
    {newsArticle("Welcome New Team Members!", "Excited to welcome talented professionals to our growing team.")}
    {newsArticle("Innovation Spotlight", "Celebrating Shubham's impactful contributions to our latest projects.s")}
    {newsArticle("Thought Leadership Webinars", "Join experts discussing trends in our upcoming webinar series.")}
    </div>
  )
}

export default Widgets

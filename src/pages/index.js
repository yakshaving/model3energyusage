import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'

const IndexPage = () => (

  
  <Layout>
  	<img src="http://yakshaving.s3.amazonaws.com/energy-usage.jpg"/>
    <p>Thank you for your help with optimizing energy usage - I'll publish these results on r/TeslaMotors and the corresponding FB groups that data was collected from.  Questions or ideas for improvement? <a href="http://twitter.com/ashbhoopathy">Message me here</a></p>
    <iframe className="airtable-embed" src="https://airtable.com/embed/shragCKg9uB4Xiz7Z?backgroundColor=red" frameBorder="0" onMouseWheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #eee"}} ></iframe>
  </Layout>
)

export default IndexPage

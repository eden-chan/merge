import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"
import { Card } from "./Card"
import { guides } from "./data/cards"

export const TOTAL_CARDS = 4

export default (() => {
  function LandingComponent() {
    return (
      <div>
        <div class="header-section">
          <h1 class="landing-header">Microgrant Guide</h1>
          <p class="page-subhead">
            Your one-stop-shop to learn about microgrant programs, figure out which ones are most
            relevant for you, and find the best tips for applications and interviews.
          </p>
          <a href="https://airtable.com/appHaOk5VRk50CpcF/pagLXf1OzDFSnyykG/form" class="cta-button">
            Explore Microgrants
          </a>
        </div>

        <div class="content-container">
          <div class="issue-container">
            {Object.entries(guides).map(([key, data], index) => (
              <Card
                key={key}
                title={data.title}
                subhead={data.subhead}
                links={data.links}
                cardNumber={index + 1}
                href={data.href}
              />
            ))}
            {Array(TOTAL_CARDS - Object.keys(guides).length)
              .fill(0)
              .map((_, i) => (
                <div key={`coming-${i}`} class="card card-coming">
                  <p class="card-title">Coming Soon</p>
                  <p class="card-subhead">Issue XXX</p>
                </div>
              ))}
          </div>
          <div class="mission-section">
            <h2 class="mission-title">Why This Guide Matters</h2>
            <div class="mission-content">
              <p>The Microgrant Guide was created to democratize access to non-dilutive funding for ambitious young builders. Our comprehensive guide breaks down the complexities of microgrant programs, making them accessible and understandable for everyone.</p>
              <p>Through extensive research and community feedback, this guide has become the go-to resource for understanding microgrant opportunities. We've compiled detailed information about application processes, eligibility criteria, and success stories to help you navigate the microgrant landscape effectively.</p>
              <p>What sets our Microgrant Guide apart is its focus on practical, actionable advice. We don't just list opportunities—we provide strategic insights on how to craft compelling applications, prepare for interviews, and maximize your chances of securing funding.</p>
            </div>
          </div>
          <div class="benefits-section">
            <h2>Guide Benefits</h2>
            <div class="benefit-card">
              <h3>Expert Guidance</h3>
              <p>Access curated microgrant opportunities and detailed application strategies from successful grant recipients and program administrators.</p>
            </div>
            
            <div class="benefit-card">
              <h3>Community Support</h3>
              <p>Connect with fellow grant seekers and recipients who share insights, provide feedback, and celebrate funding successes together.</p>
            </div>
            
            <div class="benefit-card">
              <h3>Resource Hub</h3>
              <p>Find everything you need in one place: program deadlines, application templates, interview tips, and success stories from the microgrant community.</p>
            </div>
          </div>
        </div>   

       
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor

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
          <p class="landing-header">Microgrant Guide</p>
          <p class="page-subhead">
            Your one-stop-shop to learn about microgrant programs, figure out which ones are most
            relevant for you, and find the best tips for applications and interviews.
          </p>
          <a href="https://airtable.com/appHaOk5VRk50CpcF/pagLXf1OzDFSnyykG/form" class="cta-button">
            Looking for Grants
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
            <h2 class="mission-title">Our Goal</h2>
            <div class="mission-content">
              <p>Our mission with this Microgrant Guide and Merge Club is to put more non-dilutive capital into the hands of ambitious young builders. To achieve this, we believe three key steps are essential: raising awareness, improving the quality and availability of information, and growing the number of existing microgrant programs.</p>
              <p>The Microgrant Guide addresses the first two challenges. It helps you discover and apply to programs offering non-dilutive funding by raising awareness of alternative opportunities and providing a centralized hub for all microgrant and non-dilutive capital information.</p>
            </div>
          </div>
          <div class="benefits-section">
            <div class="benefit-card">
              <h3>Be Ambitious Together</h3>
              <p>Make friends working on a wide range of projects ranging from software startups to drones and non-invasive bioimaging.</p>
            </div>
            
            <div class="benefit-card">
              <h3>Give and Get Support</h3>
              <p>Mergers help each other with feedback, knowledge, and introductions—then celebrate wins together.</p>
            </div>
            
            <div class="benefit-card">
              <h3>Find Projects & Collaborators</h3>
              <p>Discover what others are working on and how you can get involved.</p>
            </div>
          </div>
        </div>   

       
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor

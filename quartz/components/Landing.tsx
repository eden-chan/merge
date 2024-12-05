import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"

export const TOTAL_CARDS = 4
export const CARDS = {
  basics: (
    <a href={"/basics"} style={{ display: 'contents' }}>
      <div class="card card-1">
        <p class="card-title">General Grants</p>
        <p class="card-subhead">$100-$50k</p>
        <ul class="unstyled-list">
          <li><a href="https://merge.club/program/emergentventures" class="white-text">Emergent Ventures ($1k-$50k)</a></li>
          <li><a href="https://merge.club/program/1517fund" class="white-text">1517 Fund's Medici Project ($1k)</a></li>
          <li><a href="https://merge.club/program/mergegrant" class="white-text">Merge Grant ($100-$999)</a></li>
          <li><a href="https://merge.club/program/formidablefund" class="white-text">Formidable Fund ($1000)</a></li>
          <li><a href="https://merge.club/program/bagelfund" class="white-text">Bagel Fund ($100-$500)</a></li>
        </ul>
      </div>
    </a>
  ),
  "fellowships": (
    <a href={"/fellowships"} style={{ display: 'contents' }}>
      <div class="card card-2">
        <p class="card-title">Fellowship Programs</p>
        <p class="card-subhead">$10k-$100k</p>
        <ul class="unstyled-list">
          <li><a href="https://merge.club/program/zfellows" class="white-text">ZFellows ($10k)</a></li>
          <li><a href="https://merge.club/program/osv" class="white-text">OSV ($100k)</a></li>
          <li><a href="https://merge.club/program/776" class="white-text">776 Foundation ($100k)</a></li>
          <li><a href="https://merge.club/program/nontrivial" class="white-text">Non-Trivial ($15k-$30k)</a></li>
        </ul>
      </div>
    </a>
  ),
  "sector-grants": (
    <a href={"/sector-grants"} style={{ display: 'contents' }}>
      <div class="card card-3">
        <p class="card-title">Sector/Geo Grants</p>
        <p class="card-subhead">Specialized Programs</p>
        <ul class="unstyled-list">
          <li><a href="https://merge.club/program/solana" class="white-text">Solana Grants ($2k-$10k)</a></li>
          <li><a href="https://merge.club/program/protostars" class="white-text">Protostars ($1k)</a></li>
          <li><a href="https://merge.club/program/535fund" class="white-text">535 Fund ($100-$500)</a></li>
        </ul>
      </div>
    </a>
  ),
  "resources": (
    <a href={"/resources"} style={{ display: 'contents' }}>
      <div class="card card-4">
        <p class="card-title">Resources</p>
        <p class="card-subhead">Helpful Links</p>
        <ul class="unstyled-list">
          <li><a href="https://docs.google.com/spreadsheets/d/1JTNfDeRXZKR5hEF3WYIBpi2Wu8QAeghFwJvJ53DrJWo/edit#gid=0" class="white-text">1517 Fund's Grant Database</a></li>
          <li><a href="https://airtable.com/appHaOk5VRk50CpcF/pagCmtU8o3Zgl5Lzs/form" class="white-text">Merge's LFG Form</a></li>
          <li><a href="https://open.spotify.com/show/5WQQ5YvTnhDYUQcPc2TOsY" class="white-text">Merge Podcast</a></li>
        </ul>
      </div>
    </a>
  ),
}

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
            {Object.values(CARDS)}
            {Array(TOTAL_CARDS - Object.keys(CARDS).length)
              .fill(0)
              .map(() => (
                <div class="card card-coming">
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
        </div>   

        <div class="footer-section-wrapper">
          <div class="footer-grid">
            <div class="footer-brand-column">
              <div class="footer-brand">
                <img 
                  src="https://merge.club/pics/Slope Logo Design favicon (3).png"
                  alt="Merge Club Logo"
                  class="footer-logo"
                />
                <h3 class="footer-brand-name">Merge Club</h3>
                <p class="footer-location">San Francisco, USA</p>
              </div>
              
            
            </div>

            <div class="footer-column">
              <h3 class="footer-heading">Community</h3>
              <ul>
                <li><a href="https://joinodf.com/">ODF</a></li>
                <li><a href="https://builderswho.run/">Builders Who Run</a></li>
                <li><a href="https://landing.club/">Landing Club</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3 class="footer-heading">Resources</h3>
              <ul>
                <li><a href="https://merge.club/guide">Microgrant Guide</a></li>
                <li><a href="https://youtube.com/@mergedotclub/">Podcast</a></li>
                <li><a href="https://mergeclub.substack.com/">Newsletter</a></li>
                <li><a href="https://airtable.com/appHaOk5VRk50CpcF/pagLXf1OzDFSnyykG/form">Looking For Grants</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3 class="footer-heading">Get involved</h3>
              <ul>
                <li><a href="https://airtable.com/appHaOk5VRk50CpcF/pagCmtU8o3Zgl5Lzs/form">Apply to Merge</a></li>
                <li><a href="mailto:aridutilh@beondeck.com?subject=I%20want%20to%20start%20a%20microgrant%20program">Start your own microgrant</a></li>
                <li><a href="https://airtable.com/appHaOk5VRk50CpcF/pagLXf1OzDFSnyykG/form">Looking for Grants</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor

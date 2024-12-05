import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

export default (() => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    
    return (
      <footer class={`footer-section ${displayClass ?? ""}`}>
        <div class="footer-content">
          <div class="footer-brand-section">
            <div class="footer-logo-group">
              <img 
                src="/static/merge-logo.png" 
                alt="Merge Club Logo" 
                class="footer-logo"
              />
              <div class="brand-text">
                <h2 class="footer-title">Merge Club</h2>
              </div>
            </div>
            
            <div class="footer-microgrants">
              <h3 class="footer-heading">Microgrants</h3>
              <div class="microgrants-grid">
                <a href="/program/mergegrant">Merge Grant</a>
                <a href="/program/bagelfund">Bagel Fund</a>
                <a href="/program/emergentventures">Emergent Ventures</a>
                <a href="/program/zfellows">ZFellows</a>
                <a href="/program/1517fund">1517 Fund Medici Grant</a>
                <a href="/program/osv">OSV</a>
              </div>
            </div>
          </div>

          <div class="footer-links-section">
            <div class="footer-column">
              <h3 class="footer-heading">Community</h3>
              <ul>
                <li><a href="https://joinodf.com">ODF</a></li>
                <li><a href="https://builderswho.run">Builders Who Run</a></li>
                <li><a href="https://landing.club">Landing Club</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3 class="footer-heading">Resources</h3>
              <ul>
                <li><a href="/guide">Microgrant Guide</a></li>
                <li><a href="https://youtube.com/@mergedotclub">Podcast</a></li>
                <li><a href="https://mergeclub.substack.com">Newsletter</a></li>
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
        
        <div class="footer-bottom">
          <p>© {year} Merge Club. All rights reserved.</p>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

export default (() => {
  function Footer({ displayClass }: QuartzComponentProps) {
    return (
      <footer class={`footer-container ${displayClass ?? ""}`}>
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <img 
                src="https://merge.club/pics/Slope Logo Design favicon (3).png" 
                alt="Merge Club Logo" 
                width="80" 
                height="80" 
              />
              <h3 class="footer-title">Merge Club</h3>
              <p class="footer-location">San Francisco, USA</p>
            </div>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Community</h3>
            <ul>
              <li><a href="https://joinodf.com/">ODF</a></li>
              <li><a href="https://builderswho.run/">Builders Who Run</a></li>
              <li><a href="https://landing.club/">Landing Club</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Resources</h3>
            <ul>
              <li><a href="https://merge.club/guide">Microgrant Guide</a></li>
              <li><a href="https://youtube.com/@mergedotclub/">Podcast</a></li>
              <li><a href="https://mergeclub.substack.com/">Newsletter</a></li>
              <li><a href="https://airtable.com/appHaOk5VRk50CpcF/pagLXf1OzDFSnyykG/form">Looking For Grants</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Get involved</h3>
            <ul>
              <li><a href="https://airtable.com/appHaOk5VRk50CpcF/pagCmtU8o3Zgl5Lzs/form">Apply to Merge</a></li>
              <li><a href="mailto:aridutilh@beondeck.com?subject=I%20want%20to%20start%20a%20microgrant%20program&body=tell%20me%20what%20you're%20thinking%20and%20we'll%20help%20out!%20">Start your own microgrant</a></li>
              <li><a href="https://airtable.com/appHaOk5VRk50CpcF/pagLXf1OzDFSnyykG/form">Looking for Grants</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">Microgrants</h3>
            <ul>
              <li><a href="https://merge.club/program/mergegrant">Merge Grant</a></li>
              <li><a href="https://merge.club/program/emergentventures">Emergent Ventures</a></li>
              <li><a href="https://merge.club/program/1517fund">1517 Fund Medici Grant</a></li>
              <li><a href="https://merge.club/program/bagelfund">Bagel Fund</a></li>
              <li><a href="https://merge.club/program/zfellows">ZFellows</a></li>
              <li><a href="https://merge.club/program/osv">OSV</a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

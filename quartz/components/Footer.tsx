import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

export default (() => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    
    return (
      <footer class={`footer-section ${displayClass ?? ""}`}>
        <div class="footer-content">
          <div class="footer-brand-column">
            <div class="footer-brand-header">
              <div class="footer-logo-group">
                <img 
                  src="/static/merge-logo.png" 
                  alt="Merge Club Logo" 
                  class="footer-logo"
                />
                <h2 class="footer-title">Merge Club</h2>
              </div>
            </div>

            <div class="footer-microgrants">
              <h3 class="footer-heading">Microgrants</h3>
              <ul>
                <li><a href="/general/merge-grant">Merge Grant</a></li>
                <li><a href="/general/bagel-fund">Bagel Fund</a></li>
                <li><a href="/general/emergent-ventures">Emergent Ventures</a></li>
                <li><a href="/general/1517-medici-project">1517 Fund Medici Grant</a></li>
              </ul>
            </div>
          </div>

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
        
        <div class="footer-socials-wrapper">
          <div class="footer-socials">
            <a 
              href="https://x.com/mergedotclub" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-link"
              aria-label="Follow us on X (Twitter)"
              data-platform="twitter"
              itemProp="sameAs"
            >
              <img 
                src="/static/x-logo.png" 
                alt="X (Twitter)" 
                class="social-icon"
                width="20"
                height="20"
                loading="lazy"
              />
            </a>
            <a 
              href="https://www.linkedin.com/company/merge-club" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-link"
              aria-label="Connect with us on LinkedIn"
              data-platform="linkedin"
              itemProp="sameAs"
            >
              <img 
                src="/static/linkedin-logo.png" 
                alt="LinkedIn" 
                class="social-icon"
                width="20" 
                height="20"
                loading="lazy"
              />
            </a>
            <a
              href="https://discord.gg/SSD4aHgd"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Join our Discord"
              data-platform="discord"
              itemProp="sameAs"
            >
              <img
                src="/static/discord-logo.png"
                alt="Discord"
                class="social-icon"
                width="20"
                height="20"
                loading="lazy"
              />
            </a>
            <a
              href="https://github.com/on-deck/merge"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Follow us on GitHub"
              data-platform="github"
              itemProp="sameAs"
            >
              <img
                src="/static/github-logo.png"
                alt="GitHub"
                class="social-icon"
                width="20"
                height="20"
                loading="lazy"
              />
            </a>
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

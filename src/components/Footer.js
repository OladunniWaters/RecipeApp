import './Footer.scss'
import { BsTwitter } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { FaGithub , FaLinkedinIn} from 'react-icons/fa';




function Footer() {

  return (
 <>  
   <div class="footer-basic">
          <footer class='container footer'>
          <p  class="copyright">Designed & Developed by Me</p>
              <div  class="social">
                  <a href="https://github.com/OladunniWaters"><FaGithub/></a>
                  <a href="https://twitter.com/OladunniCath?t=E_aahJv7o2kv2D8U6Kvf9Q&s=09"><BsTwitter/></a>
                  <a href="https://www.linkedin.com/mwlite/profile/me"><FaLinkedinIn  /></a>
                  <a href="https://www.linkedin.com/mwlite/profile/me"><SiGmail/></a>
              </div>
              
          </footer>
      </div>
  </>  
  )
}

export default Footer
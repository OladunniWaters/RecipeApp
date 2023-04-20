import './Footer.scss'
import { FaTwitter,FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoLogoWhatsapp} from 'react-icons/io';




function Footer() {

  return (
 <>  
   <div class="footer-basic">
          <footer class='container footer'>
          <p  class="copyright">Designed & Developed by Me</p>
              <div  class="social">
                  <a href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer"><FaGithub/></a>
                  <a href="https://twitter.com/OladunniCath?t=E_aahJv7o2kv2D8U6Kvf9Q&s=09" target="_blank" rel="noreferrer"><FaTwitter/></a>
                  <a href="https://www.linkedin.com/in/oladunni-waters-851b201b0" target="_blank" rel="noreferrer" ><FaLinkedinIn  /></a>
                  <a href="https://wa.me/message/F6VY6KSDRRP4J1" target="_blank" rel="noreferrer" ><IoLogoWhatsapp/></a>
              </div>
              
          </footer>
      </div>
  </>  
  )
}

export default Footer
import { useState } from 'react';
import './Menu.css';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Menu = () => {
  
  const [openServices, setOpenServices] = useState(false)
  const [openResources, setOpenResources] = useState(false)

  const handleOpenServices = () => {
    setOpenServices(!openServices)
  }
  const handleOpenResources=()=>{
    setOpenResources(!openResources)
  }
  return (
    <>
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__item" onClick={handleOpenServices}>
            <span className="menu__link">Services</span>
            <RiArrowDropRightLine />
          </li>
          <li className="menu__item">
            <span className="menu__link">Projects</span>
          </li>
          <li className="menu__item">
            <span className="menu__link">Dedicated team</span>
          </li>
          <li className="menu__item">
            <span className="menu__link">Pricing</span>
          </li>
          <li className="menu__item" onClick={handleOpenResources}>
            <span className="menu__link">Resources</span>
            <RiArrowDropRightLine />
          </li>
        </ul>
      </div>

      {
        openServices &&
        <div className="service-list">
          <div className="service-list__back" onClick={() => setOpenServices(false)}>Back <RiArrowDropLeftLine size={28} /></div>
          <div className="service-list__separator"></div>
          <div className="service-list__sections">
            <div className="service-list__group">
              <h4 className="service-list__heading">DESIGN</h4>
              <div className="service-list__items">
                <div className="service-list__items__first">
                  <div className="service-list__item" >UI/UX design</div>
                  <div className="service-list__item" >Product audit</div>
                  <div className="service-list__item" >Branding</div>
                  <div className="service-list__item" >Rebranding</div>
                </div>
                <div className="service-list__items__second">
                  <div className="service-list__item" >Web design</div>
                  <div className="service-list__item" >Landing page design</div>
                  <div className="service-list__item" >Mobile app design</div>
                  <div className="service-list__item" >Pitch deck design</div>
                </div>
              </div>
            </div>
            <div className="service-list__group">
              <h4 className="service-list__heading">DEVELOPMENT</h4>
              <div className="service-list__items">
                <div className="service-list__items__first">
                  <div className="service-list__item" >Web development</div>
                  <div className="service-list__item" >Webflow development</div>
                  <div className="service-list__item" >MVP development</div>
                  <div className="service-list__item" >CMS development</div>
                </div>
                <div className="service-list__items__second">
                  <div className="service-list__item" >Software development</div>
                  <div className="service-list__item" >Mobile app development</div>
                  <div className="service-list__item" >Chatbot development</div>
                  <div className="service-list__item" >Cloud app development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {
        openResources &&
        <div className="resources-list">
          <div className="resources-list__back" onClick={() => setOpenResources(false)}>Back <RiArrowDropLeftLine size={28} /></div>
          <div className="resources-list__separator"></div>
          <div className="resources-list__sections">
            <div className="resources-list__group">
              <div className="resources-list__items">
                  <div className="resources-list__item" >Our Blog</div>
                  <div className="resources-list__item" >Open Source</div>
                </div>
                
              </div>
            </div>
            
        </div>
      }
    </>


  )
}

export default Menu;

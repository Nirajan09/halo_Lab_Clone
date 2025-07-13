import "./ServiceList.css";
import { RiArrowDropLeftLine } from "react-icons/ri";

const designServices = [
    "UI/UX design",
    "Product audit",
    "Branding",
    "Rebranding",
    "Web design",
    "Landing page design",
    "Mobile app design",
    "Pitch deck design",
];

const developmentServices = [
    "Web development",
    "Webflow development",
    "MVP development",
    "Software development",
    "Mobile app development",
    "Chatbot development",
];

const MobileServiceList = () => {
    return (

        <div className="service-list">
            <div className="service-list__back">Back <RiArrowDropLeftLine size={28}/></div>
            <div className="service-list__separator"></div>
            <div className="service-list__sections">
                <div className="service-list__group">
                    <h4 className="service-list__heading">DESIGN</h4>
                    <div className="service-list__items">
                        {designServices.map((service, idx) => (
                            <div className="service-list__item" key={idx}>
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="service-list__group">
                    <h4 className="service-list__heading">DEVELOPMENT</h4>
                    <div className="service-list__items">
                        {developmentServices.map((service, idx) => (
                            <div className="service-list__item" key={idx}>
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MobileServiceList;

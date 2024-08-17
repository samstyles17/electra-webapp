import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar";
import Header from '../components/Header/Header';
import ProjectRow from '../components/ProjectRow/ProjectRow';
import "./AllProjects.css";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer";
import image1601 from '../assets/img/image1601.jpg';
import kia8 from '../assets/img/kia_changaramkulam.jpeg'
import kia7 from '../assets/img/kia_edappalli.png'
import kia6 from '../assets/img/kia_vadanappally.png';
import kia3 from '../assets/img/kia_thrissur.png';
import kia2 from '../assets/img/kia_nettoor_ev_charging_station.png';
import kia4 from '../assets/img/kia_palakkad.png';
import kia5 from '../assets/img/kia_kayamkulam.png';
import kia1 from '../assets/img/kia_nettoor.png';
import tata from '../assets/img/tata1.png'
import tata1 from '../assets/img/luxon_palarivattom.png';
import tata2 from '../assets/img/luxon_irumpanam.png';
import tata3 from '../assets/img/luxon_mattancherry.png';
import tata4 from '../assets/img/luxon_nedumkandam.png';
import tata5 from '../assets/img/luxon_konni.png';
import tata6 from '../assets/img/luxon_munduparamb.png';
import tata7 from '../assets/img/luxon_areekod.png';
import toyota from '../assets/img/toyota1.png';
import toyota1 from '../assets/img/nippon_ernakulam.png';
import toyota2 from '../assets/img/nippon_enchakkal.png';
import toyota3 from '../assets/img/nippon_kayamkulam.png';
import toyota4 from '../assets/img/nippon_kazhakootam.png';
import toyota5 from '../assets/img/nippon_kochuveli.png';
import hhys1 from '../assets/img/hhys1.png';
import hhys2 from '../assets/img/hhys2.png';
import hhys3 from '../assets/img/hhys3.png';
import hhys4 from '../assets/img/hhys4.png';
import hhys5 from '../assets/img/hhys5.png';
import hhys6 from '../assets/img/hhys6.png';
import hhys7 from '../assets/img/hhys7.png';
import hhys8 from '../assets/img/hhys8.png';
import app1 from '../assets/img/app1.png';
import app2 from '../assets/img/app2.png';
import app3 from '../assets/img/app3.png';
import app4 from '../assets/img/app4.png';
import app5 from '../assets/img/app5.png';
import app6 from '../assets/img/app6.png';
import app7 from '../assets/img/app7.png';
import ip1 from '../assets/img/ip1.png';
import ip2 from '../assets/img/ip2.png';
import ip3 from '../assets/img/ip3.png';
import ip4 from '../assets/img/ip4.png';
import ip5 from '../assets/img/ip5.png';
import ip6 from '../assets/img/ip6.png';
import ip7 from '../assets/img/ip7.png';
import cp1 from '../assets/img/cp1.png';
import cp2 from '../assets/img/cp2.png';
import cp3 from '../assets/img/cp3.png';
import cp4 from '../assets/img/cp4.png';
import cp5 from '../assets/img/cp5.png';
import cp6 from '../assets/img/cp6.png';
import cp7 from '../assets/img/cp7.png';
import cp8 from '../assets/img/cp8.png';
import cp9 from '../assets/img/cp9.png';
import cp10 from '../assets/img/cp10.png';
import cp11 from '../assets/img/cp11.png';
import cp12 from '../assets/img/cp12.png';
import cp20 from '../assets/img/cp20.jpeg';
import cp21 from '../assets/img/cp21.jpeg';
import lh1 from '../assets/img/lh1.png';
import lh2 from '../assets/img/lh2.png';
import lh3 from '../assets/img/lh3.png';
import lh4 from '../assets/img/lh4.png';
import lh5 from '../assets/img/lh5.png';
import lh6 from '../assets/img/lh6.png';
import lh7 from '../assets/img/lh7.png';

const data = [
    {
        title: "Incheon Motors Pvt, Ltd ",
        img: image1601,
        images: [  
            {
                title: "Incheon Kia Showroom, Nettoor",
                image_url: kia1,
            },
            {
                title: "Incheon Kia EV Charging Station, Nettoor",
                image_url: kia2,
            },
            {
                title: "Incheon Kia Showroom, Thrissur",
                image_url: kia3,
            },
            {
                title: "Incheon Kia Showroom, Palakkad",
                image_url: kia4,
            },
            {
                title: "Incheon Kia Showroom, Kayamkulam",
                image_url: kia5,
            },
            {
                title: "Incheon Kia Showroom, Vadanappally",
                image_url: kia6,
            },
            {
                title:'Incheon Kia Showroom, Edappally',
                image_url:kia7
            }
        ]
    },
    {
        title: "Luxon Motos Pvt. Ltd.",
        img: tata,
        images: [
            {
                title: "Luxon Tata Showroom, Palarivattom",
                image_url: tata1,
            },
            {
                title: "Luxon Tata Showroom, Irumpanam",
                image_url: tata2,
            },
            {
                title: "Luxon Tata Showroom, Mattanchery",
                image_url: tata3,
            },
            {
                title: "Luxon Tata Showroom, Nedumkandam",
                image_url: tata4,
            },
            {
                title: "Luxon Tata Showroom, Konni",
                image_url: tata5,
            },
            {
                title: "Luxon Tata Showroom, Munduparambu",
                image_url: tata6,
            },
            {
                title: "Luxon Tata Showroom, Areekkode",
                image_url: tata7
            },
            ,
            {
                title:'Luxon Tata Showroom, Changaramkulam',
                image_url:kia8
            }
        ]
    },
    {
        title: "Nippon Toyota",
        img: toyota,
        images: [
            {
                title: "Nippon Toyota Showroom, Ernakulam",
                image_url: toyota1,
            },
            {
                title: "Nippon Toyota Showroom, Enchakkal",
                image_url: toyota2,
            },
            {
                title: "Nippon Toyota Showroom, Kayamkulam",
                image_url: toyota3,
            },
            {
                title: "Nippon Toyota Showroom, Kazhakkoottam",
                image_url: toyota4,
            },
            {
                title:"Nippon Toyota Showroom, Kochuveli",
                image_url: toyota5
            }

        ]
    },
    {
        title: "HHYS Infamart",
        img: hhys1,
        images: [
            {
                title: "HHYS Inframart Showroom, Prathangamood",
                image_url: hhys2
            },
            {
                title: "HHYS Inframart Showroom, Kayamkulam",
                image_url: hhys7,
            },
            // {
            //     title: "Mukkavala, Kayamkulam",
            //     image_url: hhys3,
            // },
            {
                title: "HHYS Inframart Showroom, Kollam-1",
                image_url: hhys4,
            },
            // {
            //     title: "Nettor",
            //     image_url: hhys5,
            // },
            {
                title: "HHYS Inframart Showroom, Kollam-2",
                image_url: hhys6,
            },
            
            // {
            //     title: "Nettor",
            //     image_url: hhys8,
            // },

        ]
    },
    {
        title: "Appartment",
        img: app1,
        images: [
            {
                title: "RDS Legacy, Panampilly Nagar",
                image_url: app2,
            },
            {
                title: "Napier Horitage, Fortkochi",
                image_url: app3,
            },
            {
                title: "AC Samridhi, Vyttilya",
                image_url: app6,
            },
            {
                title: "Bindu Sen Apartment, Muvattupuzh",
                image_url: app4,
            },
            {
                title: "Tristar Excellency, Kakkanad",
                image_url: app7,
            },
            {
                title: "Tristar Presidency, Panampilly Nagar",
                image_url: app5,
            }           
            


        ]
    },
    {
        title: "Industrial Projects",
        img: ip1,
        images: [
            {
                title: "Eastern Contiments, Kothamanglam",
                image_url: ip3,
            },
            {
                title: "Eastern Contiments, Adimaly",
                image_url: ip2,
            },
            {
                title: "VKL Seasoning, Kuthiyathodu",
                image_url: ip6,
            },
            {
                title: "VKL Seasoning, Alappuzha",
                image_url: ip7,
            },

            
            // {
            //     title: "Nettor",
            //     image_url: ip4,
            // },
            {
                title: "Travancore Coco Tuft, Cherthala",
                image_url: ip5,
            },
            

        ]
    },
    {
        title: "Commercial Projects",
        img: cp1,
        images: [
            {
                title: "St. Joseph Bhavan, Chalakkudy",
                image_url: cp2,
            },
            {
                title: "Ather Showroom, Aluva",
                image_url: cp3,
            },
            {
                title: "Motorspot Showroom, Ernakulam",
                image_url: cp7,
            },
            {
                title: "Prince Square, M.G Road, Ernakulam",
                image_url: cp9,
            },
            {
                title: "Utsav, M.G. Road, Ernakulam",
                image_url: cp12,
            },
            {
                title: "Meigma Portico, Vyttila",
                image_url: cp5,
            },
            {
                title: "St. Mary's Tower, Ernakulam",
                image_url: cp11,
            },
            
            {
                title: "ABS Arcade, Muvattupuzha",
                image_url: cp4,
            },
            {
                title: "PUCBank, Thripunithura",
                image_url: cp8,
            },
            
            {
                title: "Finsyz Vacation Homes, Angamaly",
                image_url: cp6,
            },           

            
            {
                title: "Salafi Masjid, Vyttila",
                image_url: cp10,
            },
            {
                title:'Catholic Syrian Bank, Ernakulam',
                image_url: cp20
            },
            {
                title:'Chungath Jewellery, M.G Road, Ernakulam',
                image_url: cp21
            }

        ]
    },
    {
        title: "Labs and Hospitals",
        img: lh1,
        images: [
            {
                title: "DIY Imaging, Padivattom",
                image_url: lh2,
            },
            {
                title: "Kinder Women Hospital, Ernakulam",
                image_url: lh3,
            },
            {
                title: "Kinder Women Hospital, Chertala",
                image_url: lh4,
            },
            {
                title: "PS Mission Hospital, Maradu",
                image_url: lh5,
            },
            {
                title: "Assisi Mission Hospital, Parappukara",
                image_url: lh6,
            },
            {
                title: "SH Hospital, Thodupuzha",
                image_url: lh7,
            },
        ]
    }
    
]

const AllProjects = () => {
    return (
        <>
        <Helmet>
            <title>All Projects | Electrapower Engineering | Complete Project Showcase</title>
            <meta name='description' content="View all of Electrapower Engineering's completed projects, demonstrating our commitment to quality, innovation, and client satisfaction. Get inspired by our electrical engineering expertise."/>
            <link rel='canonical' href={window.location.href}/>
        </Helmet>
        <Navbar />
        <div className="allprojects">
           
            <Header />
            <div className="wrapper">
                <ProjectRow data={data} />
            </div>
            <Connect />
            <Footer />
        </div>
        </>
    );
}

export default AllProjects;



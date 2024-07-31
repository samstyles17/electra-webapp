import React from 'react';
import Navbar from "../components/Navbar";
import Header from '../components/Header/Header';
import ProjectRow from '../components/ProjectRow/ProjectRow';
import "./AllProjects.css";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer";
import image1601 from '../assets/img/image1601.jpg';
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
                title: "Nettor",
                image_url: kia1,
            },
            {
                title: "Nettor EV Chargin Station",
                image_url: kia2,
            },
            {
                title: "Thrissur",
                image_url: kia3,
            },
            {
                title: "Palakkad",
                image_url: kia4,
            },
            {
                title: "Kayamkulam",
                image_url: kia5,
            },
            {
                title: "Vadanappally",
                image_url: kia6,
            },
            {
                title:'Edappalli',
                image_url:kia7
            }
        ]
    },
    {
        title: "Luxon Motos Pvt. Ltd.",
        img: tata,
        images: [
            {
                title: "Palarivattom",
                image_url: tata1,
            },
            {
                title: "Irumpanam",
                image_url: tata2,
            },
            {
                title: "Mattancherry",
                image_url: tata3,
            },
            {
                title: "Nedumkandam",
                image_url: tata4,
            },
            {
                title: "Konni, Pathanamathitta",
                image_url: tata5,
            },
            {
                title: "Munduparambu, Malappuram",
                image_url: tata6,
            },
            {
                title: "Areekkode",
                image_url: tata7
            }
        ]
    },
    {
        title: "Nippon Toyota",
        img: toyota,
        images: [
            {
                title: "Ernakulum",
                image_url: toyota1,
            },
            {
                title: "Enchakkal",
                image_url: toyota2,
            },
            {
                title: "Kayamkulam",
                image_url: toyota3,
            },
            {
                title: "Kazhakkottam",
                image_url: toyota4,
            },
            {
                title:"Kochuveli",
                image_url: toyota5
            }

        ]
    },
    {
        title: "HHYS Infamart",
        img: hhys1,
        images: [
            {
                title: "Pranthangamood, Kayamkulam",
                image_url: hhys2
            },
            {
                title: "Mukkavala, Kayamkulam",
                image_url: hhys7,
            },
            // {
            //     title: "Mukkavala, Kayamkulam",
            //     image_url: hhys3,
            // },
            {
                title: "Kollam",
                image_url: hhys4,
            },
            // {
            //     title: "Nettor",
            //     image_url: hhys5,
            // },
            {
                title: "Kollam",
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
                title: "RDS Realities",
                image_url: app2,
            },
            {
                title: "Napier Horitage, Fortkochi",
                image_url: app3,
            },
            {
                title: "AC Samridhi, Vytilya",
                image_url: app6,
            },
            {
                title: "Bindu Sen Apartment, Muvattupuzha",
                image_url: app4,
            },
            {
                title: "Tristar Excellency",
                image_url: app7,
            },
            {
                title: "Tristar Presidency",
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
                title: "Travancore Coco, Cherthala",
                image_url: ip5,
            },
            

        ]
    },
    {
        title: "Commercial Projects",
        img: cp1,
        images: [
            {
                title: "ST Joseph Bhavan, Hospital, Chalakkudy",
                image_url: cp2,
            },
            {
                title: "Ather Showroom, Aluva",
                image_url: cp3,
            },
            {
                title: "Motorspot Pre Owned Cars, Ernakulam",
                image_url: cp7,
            },
            {
                title: "Prince Jwellery, Ernakulam",
                image_url: cp9,
            },
            {
                title: "UTSAV, MG Road, Ernakulam",
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
                title: "Chungath Jwellery, Ernakulam",
                image_url: cp8,
            },
            
            {
                title: "Finsyz Vacation Homes, Angamaly",
                image_url: cp6,
            },
            
            
            
            {
                title: "Salafi Masjid, Vytila",
                image_url: cp10,
            },
            

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



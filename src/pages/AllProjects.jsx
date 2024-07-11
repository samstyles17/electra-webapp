import React from 'react';
import Navbar from "../components/Navbar";
import Header from '../components/Header/Header';
import ProjectRow from '../components/ProjectRow/ProjectRow';
import "./AllProjects.css";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer";
import image1601 from '../assets/img/image1601.jpg';
import kia6 from '../assets/img/kia6.png';
import kia3 from '../assets/img/kia3.png';
import kia2 from '../assets/img/kia2.png';
import kia4 from '../assets/img/kia4.png';
import kia5 from '../assets/img/kia5.png';
import kia1 from '../assets/img/kia1.png';
import tata1 from '../assets/img/tata1.png';
import tata2 from '../assets/img/tata2.png';
import tata3 from '../assets/img/tata3.png';
import tata4 from '../assets/img/tata4.png';
import tata5 from '../assets/img/tata5.png';
import tata6 from '../assets/img/tata6.png';
import tata7 from '../assets/img/tata7.png';
import toyota1 from '../assets/img/toyota1.png';
import toyota2 from '../assets/img/toyota2.png';
import toyota3 from '../assets/img/toyota3.png';
import toyota4 from '../assets/img/toyota4.png';
import toyota5 from '../assets/img/toyota5.png';
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
                image_url: kia6,
            },
            {
                title: "Nettor EV Chargin Station",
                image_url: kia3,
            },
            {
                title: "Kayamkulam",
                image_url: kia2,
            },
            {
                title: "Edappali",
                image_url: kia4,
            },
            {
                title: "Nettor",
                image_url: kia5,
            },
            {
                title: "Nettor",
                image_url: kia1,
            },
        ]
    },
    {
        title: "Luxon Motos Pvt. Ltd.",
        img: tata1,
        images: [
            {
                title: "Palarivattom",
                image_url: tata2,
            },
            {
                title: "Irumpanam",
                image_url: tata3,
            },
            {
                title: "Nettor",
                image_url: tata4,
            },
            {
                title: "Nettor",
                image_url: tata5,
            },
            {
                title: "Nettor",
                image_url: tata6,
            },
            {
                title: "Nettor",
                image_url: tata7,
            }
        ]
    },
    {
        title: "Nippon Toyota",
        img: toyota1,
        images: [
            {
                title: "Ernakulum",
                image_url: toyota2,
            },
            {
                title: "Enchakkal",
                image_url: toyota3,
            },
            {
                title: "Nettor",
                image_url: toyota4,
            },
            {
                title: "Nettor",
                image_url: toyota5,
            },

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
                image_url: hhys3,
            },
            {
                title: "Nettor",
                image_url: hhys4,
            },
            {
                title: "Nettor",
                image_url: hhys5,
            },
            {
                title: "Nettor",
                image_url: hhys6,
            },
            {
                title: "Nettor",
                image_url: hhys7,
            },
            {
                title: "Nettor",
                image_url: hhys8,
            },

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
                title: "Nettor",
                image_url: app4,
            },
            {
                title: "Nettor",
                image_url: app5,
            },
            {
                title: "Nettor",
                image_url: app6,
            },
            {
                title: "Nettor",
                image_url: app7,
            },


        ]
    },
    {
        title: "Industrial Projects",
        img: ip1,
        images: [
            {
                title: "Eastern Contiments, Kothamanglam",
                image_url: ip2,
            },
            {
                title: "Eastern Contiments, Adimaly",
                image_url: ip3,
            },
            {
                title: "Nettor",
                image_url: ip4,
            },
            {
                title: "Nettor",
                image_url: ip5,
            },
            {
                title: "Nettor",
                image_url: ip6,
            },
            {
                title: "Nettor",
                image_url: ip7,
            },


        ]
    },
    {
        title: "Commercial Projects",
        img: cp1,
        images: [
            {
                title: "ST Joseph Bhavan, hospital, Chalakkudy",
                image_url: cp2,
            },
            {
                title: "Ather Showroom, Aluva",
                image_url: cp3,
            },
            {
                title: "Nettor",
                image_url: cp4,
            },
            {
                title: "Nettor",
                image_url: cp5,
            },
            {
                title: "Nettor",
                image_url: cp6,
            },
            {
                title: "Nettor",
                image_url: cp7,
            },
            {
                title: "Nettor",
                image_url: cp8,
            },
            {
                title: "Nettor",
                image_url: cp9,
            },
            {
                title: "Nettor",
                image_url: cp10,
            },
            {
                title: "Nettor",
                image_url: cp11,
            },
            {
                title: "Nettor",
                image_url: cp12,
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
                title: "Nettor",
                image_url: lh4,
            },
            {
                title: "Nettor",
                image_url: lh5,
            },
            {
                title: "Nettor",
                image_url: lh6,
            },
            {
                title: "Nettor",
                image_url: lh7,
            },
        ]
    }
]

const AllProjects = () => {
    return (
        <div className="allprojects">
            <Navbar />
            <Header />
            <div className="wrapper">
                <ProjectRow data={data} />
            </div>
            <Connect />
            <Footer />
        </div>
    );
}

export default AllProjects;



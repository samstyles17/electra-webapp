import React from 'react';
import Navbar from "../components/Navbar";
import Header from '../components/Header/Header';
import ProjectRow from '../components/ProjectRow/ProjectRow';
import "./AllProjects.css";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer";
const data = [
    {
        title: "Incheon Motors Pvt, Ltd ",
        img: "src/assets/img/image1601.jpg",
        images: [
            {
                title: "Nettor",
                image_url: "src/assets/img/kia6.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/kia3.png",
            },
            {
                title: "Kayamkulam",
                image_url: "src/assets/img/kia2.png",
            },
            {
                title: "Edappali",
                image_url: "src/assets/img/kia4.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/kia5.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/kia1.png",
            },
        ]
    },
    {
        title: "Luxon Motos Pvt. Ltd.",
        img: "src/assets/img/tata1.png",
        images: [
            {
                title: "Palarivattom",
                image_url: "src/assets/img/tata2.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/tata3.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/tata4.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/tata5.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/tata6.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/tata7.png",
            }
        ]
    },
    {
        title: "Nippon Toyota",
        img: "src/assets/img/toyota1.png",
        images: [
            {
                title: "Ernakulum",
                image_url: "src/assets/img/toyota2.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/toyota3.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/toyota4.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/toyota5.png",
            },

        ]
    },
    {
        title: "HHYS Infamart",
        img: "src/assets/img/hhys1.png",
        images: [
            {
                title: "Ernakulum",
                image_url: "src/assets/img/hhys2.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/hhys3.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/hhys4.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/hhys5.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/hhys6.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/hhys7.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/hhys8.png",
            },

        ]
    },
    {
        title: "Appartment",
        img: "src/assets/img/app1.png",
        images: [
            {
                title: "Ernakulum",
                image_url: "src/assets/img/app2.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/app3.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/app4.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/app5.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/app6.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/app7.png",
            },


        ]
    },
    {
        title: "Industrial Projects",
        img: "src/assets/img/ip1.png",
        images: [
            {
                title: "Ernakulum",
                image_url: "src/assets/img/ip2.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/ip3.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/ip4.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/ip5.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/ip6.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/ip7.png",
            },


        ]
    },
    {
        title: "Commercial Projects",
        img: "src/assets/img/cp1.png",
        images: [
            {
                title: "Ernakulum",
                image_url: "src/assets/img/cp2.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp3.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp4.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp5.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp6.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp7.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp8.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp9.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp10.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp11.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/cp12.png",
            },

        ]
    },
    {
        title: "Labs and Hospitals",
        img: "src/assets/img/lh1.png",
        images: [
            {
                title: "Ernakulum",
                image_url: "src/assets/img/lh2.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/lh3.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/lh4.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/lh5.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/lh6.png",
            },
            {
                title: "Nettor",
                image_url: "src/assets/img/lh7.png",
            },
        ]
    }
]

const AllProjects = () => {
    console.log(data)
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



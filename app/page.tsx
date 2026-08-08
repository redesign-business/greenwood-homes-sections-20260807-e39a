"use client";

import { Navbar15 } from "@/components/relume/Navbar15";
import { Header145 } from "@/components/relume/Header145";
import { GridList5 } from "@/components/relume/GridList5";
import { Portfolio23 } from "@/components/relume/Portfolio23";
import { Stat2 } from "@/components/relume/Stat2";
import { Logo2 } from "@/components/relume/Logo2";
import { Testimonial43 } from "@/components/relume/Testimonial43";
import { Footer7 } from "@/components/relume/Footer7";

const CTA = {
  title: "Contact Us",
  url: "https://greenwood-homes.com/contact/",
};

const NAV_LINKS = [
  { url: "/", title: "Home" },
  { url: "https://greenwood-homes.com/about/", title: "About" },
  { url: "https://greenwood-homes.com/portfolio/", title: "Portfolio" },
  { url: "https://greenwood-homes.com/team/", title: "Team" },
  { url: "https://greenwood-homes.com/testimonials/", title: "Testimonials" },
  { url: "https://greenwood-homes.com/blog/", title: "Blog" },
];

export default function Home() {
  return (
    <>
      <Navbar15
        logo={{
          src: "/images/tq-logo-med-ivory-c176412731.png",
          url: "/",
          alt: "Greenwood Homes",
        }}
        navLinks={NAV_LINKS}
        button={CTA}
      />

      <Header145
        heading="Award-Winning Custom Home Builder"
        description="Greenwood Homes has designed and built custom homes across Nevada, California, Hawaii, Idaho, and Utah since 1998, with over 50 completed custom homes and seven Tahoe Quarterly Mountain Home Awards through 2025."
        buttons={[CTA]}
        image={{
          src: "/images/clear-creek-mountain-modern-home-greenwood-homes-tahoe-truckee-017-4b0479315f.jpg",
          alt: "Clear Creek mountain modern home by Greenwood Homes Tahoe/Truckee",
        }}
      />

      <GridList5
        heading="Licensed & Credentialed Across Five States"
        description="A licensed General Contractor in California, Nevada, Hawaii, Idaho, and Utah, with LEED Accredited Professionals on the project team and custom home building experience since 1998."
        properties={[
          {
            image: {
              src: "/images/ltcrop-c4a89fa01f.jpg",
              alt: "Lake Tahoe",
            },
            title: "Licensed General Contractor",
            description:
              "Fully licensed in California, Nevada, Hawaii, Idaho, and Utah.",
            location: "California · Nevada · Hawaii · Idaho · Utah",
            numberOfBeds: "",
            numberOfBaths: "",
            price: "",
            priceDuration: "",
            button: CTA,
          },
          {
            image: {
              src: "/images/incline-village-cutting-edge-modern-greenwood-homes-featured-86c5cfc249.jpg",
              alt: "Cutting Edge Modern home in Incline Village",
            },
            title: "LEED Accredited Professionals",
            description: "LEED Accredited Professionals on the project team.",
            location: "Sustainable Building Practice",
            numberOfBeds: "",
            numberOfBaths: "",
            price: "",
            priceDuration: "",
            button: CTA,
          },
          {
            image: {
              src: "/images/006-475lakeshore_phjoystrotz-e74d7e7ed6.jpg",
              alt: "Lakeview Serenity home by Greenwood Homes",
            },
            title: "Building Since 1998",
            description: "Building custom homes since 1998.",
            location: "Four Decades of Practice",
            numberOfBeds: "",
            numberOfBaths: "",
            price: "",
            priceDuration: "",
            button: CTA,
          },
        ]}
      />

      <Portfolio23
        tagline="Portfolio"
        title="Over 40 Featured Homes Across Five States"
        description="A portfolio of more than 40 featured completed homes across Lake Tahoe, Hawaii, Idaho, and Utah, including projects at Kukuiula, Martis Camp, Dollar Point, Carson Valley, and Gozzer Ranch — such as the Tahoe Provisions Market at the Hyatt Regency Lake Tahoe, a roughly 5,000-square-foot Incline Village dream home delivered under time and under budget, and a partially built Glenbrook project finished after the original builder went bankrupt."
      />

      <GridList5
        heading="Construction Services"
        description="New construction, remodels, renovations, additions, tenant improvements, and energy-efficient upgrades, backed by pre-construction services including estimating, feasibility review, value engineering, MEP review, constructability review, risk assessment, and scheduling."
      />

      <Stat2
        heading="Experience & Track Record"
        description="Reliable delivery with repeat clients and multi-project homeowners building multiple homes with the company, on time and on budget, and superintendents with 25 to over 50 years of construction experience."
        buttons={[CTA]}
        stats={[
          {
            title: "50+",
            description: "Custom homes completed since 1998",
            badge: "",
            icon: (
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 21h18M5 21V7.5L12 3l7 4.5V21" />
              </svg>
            ),
            comparisonText: "",
          },
          {
            title: "1998",
            description: "Greenwood Homes began building",
            badge: "",
            icon: (
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            ),
            comparisonText: "",
          },
          {
            title: "50+ yrs",
            description: "Superintendent construction experience",
            badge: "",
            icon: (
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l2.5 2.5" />
              </svg>
            ),
            comparisonText: "",
          },
        ]}
      />

      <Logo2 heading="Seven Tahoe Quarterly Mountain Home Awards through 2025 and 2023, plus additional Tahoe Quarterly Craftsmanship, Legacy Home, Merit, and Interior Design awards between 2014 and 2021." />

      <Testimonial43
        heading="Client Testimonials"
        description="Clients describe the experience as truly great from start to finish and exceeding all expectations. One client praised Kevin Hanna as honest, a good communicator, and a perfectionist; a Lakeshore Boulevard client confirmed the home was completed on time and on budget; and the property owner noted Greenwood exceeded expectations on the Hyatt Regency Tahoe Provisions Market project."
      />

      <Footer7
        logo={{
          src: "/images/tq-logo-med-ivory-d6359c45b9.png",
          url: "/",
          alt: "Greenwood Homes",
        }}
        columnLinks={[
          {
            links: [
              { title: "Portfolio", url: "https://greenwood-homes.com/portfolio/" },
              { title: "Team", url: "https://greenwood-homes.com/team/" },
              { title: "Testimonials", url: "https://greenwood-homes.com/testimonials/" },
              { title: "Blog", url: "https://greenwood-homes.com/blog/" },
            ],
          },
          {
            links: [
              { title: "About", url: "https://greenwood-homes.com/about/" },
              { title: "Contact Us", url: "https://greenwood-homes.com/contact/" },
            ],
          },
        ]}
        footerText="Award-winning custom home builder serving Nevada, California, Hawaii, Idaho, and Utah since 1998."
        footerLinks={[
          { title: "Contact Us", url: "https://greenwood-homes.com/contact/" },
        ]}
      />
    </>
  );
}

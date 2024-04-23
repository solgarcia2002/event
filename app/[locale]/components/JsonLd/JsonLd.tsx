const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Event",
  name: "WellBiz Bridge",
  description:
    "Es un encuentro para empresarios y profesionales visionarios que buscan que sus negocios sean sólidos y prósperos en Miami. El WellBiz Bridge se centra en tres ejes fundamentales: WELL - El Bienestar, BIZ - El Negocio, y BRIDGE - El Networking. Este evento proporciona herramientas esenciales para el éxito empresarial, claridad en aspectos legales y financieros, y promueve networking de alta calidad entre empresarios.",
  startDate: "2024-05-24T15:00:00-04:00",
  endDate: "2024-05-24T19:00:00-04:00",
  eventAttendanceMode: "http://schema.org/OfflineEventAttendanceMode",
  eventStatus: "http://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Hotel JW Marriott Miami",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1109 Brickell Ave",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33131",
      addressCountry: "USA",
    },
  },
  image: [
    "https://www.wellbizbridge.com/_next/image?url=%2Flogo-wb-border.png&w=128&q=75",
  ],
  organizer: {
    "@type": "Organization",
    name: "WellBiz Bridge",
    url: "www.wellbizbridge.com",
  },
  offers: {
    "@type": "Offer",
    url: "www.wellbizbridge.com",
    price: "0",
    priceCurrency: "USD",
    availability: "http://schema.org/InStock",
    validFrom: "2024-04-24T15:00:00-04:00",
  },
  performer: {
    "@type": "PerformingGroup",
    name: "Expertos en bienestar, negocios y networking",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    url: "www.wellbizbridge.com",
  },
};

export default jsonLd;

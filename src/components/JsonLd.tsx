export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Tech Yugantar",
        url: "https://techyugantar.in",
        logo: "https://techyugantar.in/images/logo/logo.svg",
        description:
            "Tech Yugantar is a software development company based in Varanasi, India. We build Android, iOS, and Web applications for startups to enterprise-level businesses.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Varanasi",
            addressRegion: "Uttar Pradesh",
            postalCode: "221001",
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "nddictator@gmail.com",
            availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
            "https://github.com/tanmaymishra1551",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Software Development Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Android App Development",
                        description: "Native and cross-platform Android apps using Flutter.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "iOS App Development",
                        description: "Cross-platform iOS apps built with Flutter.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Web Development",
                        description:
                            "Full-stack web apps using React, Next.js, and Django REST Framework.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ERP & Enterprise Software",
                        description:
                            "Custom ERP systems for businesses of all sizes.",
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
import type { Metadata } from "next";

const baseUrl = new URL("https://shazly-steel.vercel.app");

export const metadataEN: Metadata = {
  metadataBase: baseUrl,

  title:
    "El Shazly Reinforcement Steel – Authorized Steel Distributor in Egypt",
  description:
    "Stay updated with steel prices in real time. El Shazly Reinforcement Steel, founded in 2006, provides high-quality reinforcement steel from Egypt's top manufacturers, with reliable delivery and trusted service.",
  keywords: [
    "steel Egypt",
    "reinforcement steel",
    "steel distributor",
    "building materials",
    "construction steel",
    "steel prices Egypt",
    "الشاذلي لحديد التسليح",
  ],
  authors: [{ name: "El Shazly Reinforcement Steel" }],
  creator: "El Shazly Reinforcement Steel",

  openGraph: {
    title: "El Shazly Reinforcement Steel – Authorized Distributor in Egypt",
    description:
      "Follow steel prices in real time from a trusted distributor. High-quality reinforcement steel with reliable delivery since 2006.",
    url: "/",
    siteName: "El Shazly Reinforcement Steel",
    images: [
      {
        url: "/metaData-phone-mockup.jpg",
        width: 1200,
        height: 630,
        alt: "El Shazly Reinforcement Steel",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "El Shazly Reinforcement Steel – Authorized Steel Distributor in Egypt",
    description:
      "Stay updated with steel prices in real time from a trusted distributor since 2006.",
    images: ["/metaData-phone-mockup.jpg"],
  },
};

export const metadataAR: Metadata = {
  metadataBase: baseUrl,

  title: "الشاذلي لحديد التسليح – موزع معتمد للحديد في مصر",
  description:
    "تابع سعر الحديد لحظة بلحظة. الشاذلي لحديد التسليح، منذ 2006، يوفر حديدًا عالي الجودة من كبرى مصانع الحديد في مصر، مع التزام بالتوريد وخدمة موثوقة.",
  keywords: [
    "حديد مصر",
    "حديد تسليح",
    "موزع حديد",
    "مواد بناء",
    "أسعار الحديد",
    "الشاذلي لحديد التسليح",
  ],
  authors: [{ name: "الشاذلي لحديد التسليح" }],
  creator: "الشاذلي لحديد التسليح",

  openGraph: {
    title: "الشاذلي لحديد التسليح – موزع معتمد للحديد في مصر",
    description:
      "تابع سعر الحديد لحظة بلحظة من موزع موثوق. حديد تسليح عالي الجودة مع التزام بالتوريد منذ 2006.",
    url: "/",
    siteName: "الشاذلي لحديد التسليح",
    images: [
      {
        url: "/metaData-phone-mockup.jpg",
        width: 1200,
        height: 630,
        alt: "الشاذلي لحديد التسليح",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "الشاذلي لحديد التسليح – موزع معتمد للحديد في مصر",
    description: "تابع سعر الحديد لحظة بلحظة من موزع موثوق منذ 2006.",
    images: ["/metaData-phone-mockup.jpg"],
  },
};

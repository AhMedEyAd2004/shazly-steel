import { Button } from "@/components/ui/button";
import { translation } from "@/utils/translation";
import Image from "next/image";
import Link from "next/link";


import { CarouselSize } from "@/components/client_Carousel";
import WhatsAppIcon from "@/components/icons/whatsApp";
import LandlineIcon from "@/components/icons/landline";
import Phone from "@/components/icons/phone";
import MailIcon from "@/components/icons/mail";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: Promise<{ locale: 'en' | 'ar' }> }) {
    const { locale } = await params;
    if (!['en', 'ar'].includes(locale)) {
        notFound();
    }
    const tr = translation[locale];

    return (
        <div className="relative">
            <section className="relative grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] auto-rows-auto gap-4 lg:gap-6 py-10 md:py-15 min-h-dvh px-5 sm:px-10 md:px-20">
                <Image
                    priority
                    fill
                    src={'/download-bg.png'}
                    alt="background"
                    className="absolute inset-0 -z-10 w-full h-full object-cover brightness-80 object-[80%_center]"
                />

                {/* Logo - 3rd column, 1st row */}
                <div className="lg:col-start-3 lg:row-start-1 flex justify-center lg:justify-end items-start lg:items-center pt-4 lg:pt-0">
                    <Image
                        src={'/logo.svg'}
                        alt="logo"
                        width={200}
                        height={230}
                        className="w-32 sm:w-40 md:w-48 lg:w-50 h-auto"
                    />
                </div>

                {/* Title - 1st column spanning 2 cols, 2nd row */}
                <div className="lg:-mt-30 lg:col-start-1 lg:col-span-2 lg:row-start-2 flex flex-col gap-5 items-center lg:items-start justify-center">
                    <h1 className={`text-3xl text-balance sm:text-4xl md:text-5xl lg:text-[64px] ${locale === 'ar' ? 'font-noto' : ''} font-bold text-white leading-[150%] text-center lg:text-left`}>
                        {tr.app.title}
                    </h1>
                    <div className="flex justify-center items-center bg-[#691010] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] w-fit rounded-full px-4 sm:px-6 md:px-7.5 py-2 sm:py-3 md:py-4 text-white">
                        <p>{tr.app.cta}</p>
                    </div>
                </div>


                {/* Download Buttons - 1st column spanning 2 cols, 4th row */}
                <div className="lg:col-start-1 lg:col-span-2 lg:row-start-4 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-4.75 justify-center lg:justify-start items-center lg:items-start">
                    <Button type="button" className="size-fit p-0 rounded-2xl" variant={null} asChild>
                        <Link href={'/'}>
                            <Image
                                src={'/google-play.png'}
                                alt="download from play store"
                                width={385}
                                height={108}
                                className="w-64 lg:w-96.25 h-auto"
                            />
                        </Link>
                    </Button>
                    <Button type="button" className="size-fit p-0 rounded-2xl" variant={null} asChild>
                        <Link href={'/'}>
                            <Image
                                src={'/app-store.png'}
                                alt="download from app store"
                                width={385}
                                height={108}
                                className="w-64 lg:w-96.25 h-auto"
                            />
                        </Link>
                    </Button>
                </div>

                {/* Subtitle - All 3 columns, last row */}
                <div className="lg:col-span-3 lg:row-start-5 flex justify-center items-center mt-4 lg:mt-0">
                    <p className="text-[#F8752F] text-pretty text-center text-lg sm:text-2xl md:text-3xl lg:text-[40px] leading-tight">
                        {tr.app.subtitle}
                    </p>
                </div>
            </section>

            <section className="relative flex flex-col gap-10 sm:gap-16 md:gap-20 py-10 sm:py-16 md:py-20 lg:py-25.5 px-4 sm:px-8 md:px-16 lg:px-28 font-noto" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                <Image
                    src={'/aboutUs-bg.png'}
                    alt="about-us background"
                    width={1920}
                    height={780}
                    className="absolute inset-0 -z-10 w-full h-full object-cover object-center"
                />
                <div className="flex flex-col gap-6 sm:gap-10 md:gap-14">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white mt-4 sm:mt-6 md:mt-10 ">
                        {tr.about.title}
                    </h3>
                    <div>
                        {tr.about.description.split('.').filter(Boolean).map((s, i) => (
                            <p key={i} className="block text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-[150%] lg:text-center px-2 sm:px-5 md:px-10 lg:px-20">
                                {s.trim()}.
                            </p>
                        ))}
                    </div>
                </div>

                <div className="mx-auto">
                    <CarouselSize />
                </div>

                <h3 className={`text-2xl ${locale === 'ar' ? 'max-sm:text-right' : 'max-sm:text-left'} sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center px-4`}>
                    {tr.contact.title}
                </h3>

                <div className="grid -mt-3 max-sm:place-items-end justify-between grid-cols-1 sm:grid-cols-[auto_auto_auto] xl:grid-cols-[auto_auto_auto_auto] gap-4 sm:gap-3 lg:gap-8 xl:gap-9 w-full max-w-7xl mx-auto px-4">
                    <a
                        href={`tel:${tr.contact.phone1}`}
                        className="flex max-sm:flex-row-reverse  items-center gap-2 sm:gap-2.5 text-white hover:opacity-80 transition-opacity group"
                    >
                        <div className="bg-white rounded-[10px] p-2 sm:p-2.5 shrink-0 group-hover:scale-110 transition-transform">
                            <Phone className="size-5 sm:size-6 lg:size-7 xl:size-7.25 text-[#691010]" />
                        </div>
                        <span dir="ltr" className="font-khebrat text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] underline break-all">
                            {tr.contact.phone1}
                        </span>
                    </a>

                    <a
                        href={`tel:+20${tr.contact.phone2}`}
                        className="flex max-sm:flex-row-reverse  items-center gap-2 sm:gap-2.5 text-white hover:opacity-80 transition-opacity group"
                    >
                        <div className="bg-white rounded-[10px] p-2 sm:p-2.5 shrink-0 group-hover:scale-110 transition-transform">
                            <LandlineIcon className="size-5 sm:size-6 lg:size-7 xl:size-7.25 text-[#691010]" />
                        </div>
                        <span dir="ltr" className="font-khebrat text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] underline break-all">
                            {tr.contact.phone2}
                        </span>
                    </a>

                    <a
                        href={`https://wa.me/${tr.contact.phone3}`}
                        className="flex max-sm:flex-row-reverse  items-center gap-2 sm:gap-2.5 text-white hover:opacity-80 transition-opacity group"
                    >
                        <div className="bg-white rounded-[10px] p-2 sm:p-2.5 shrink-0 group-hover:scale-110 transition-transform">
                            <WhatsAppIcon className="size-5 sm:size-6 lg:size-7 xl:size-7.25 text-[#691010]" />
                        </div>
                        <span dir="ltr" className="font-khebrat text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] underline break-all">
                            {tr.contact.phone3}
                        </span>
                    </a>

                    <a
                        href={`mailto:${tr.contact.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex max-sm:flex-row-reverse  sm:max-xl:col-span-2  items-center gap-2 sm:gap-2.5 text-white hover:opacity-80 transition-opacity group"
                    >
                        <div className="bg-white rounded-[10px] p-2 sm:p-2.5 shrink-0 group-hover:scale-110 transition-transform">
                            <MailIcon className="size-5 sm:size-6 lg:size-7 xl:size-7.25 text-[#691010]" />
                        </div>
                        <span className="font-khebrat text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] underline break-all">
                            {tr.contact.email}
                        </span>
                    </a>
                </div>
            </section >
        </div >
    )
}
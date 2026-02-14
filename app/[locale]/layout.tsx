import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { metadataAR, metadataEN } from "@/utils/metadata";
import { Noto_Sans_Arabic } from 'next/font/google'
import localFont from 'next/font/local'
import Link from "next/link";


const noto = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
})

const khebrat = localFont({
  variable: '--font-khebrat',
  src: [
    {
      path: '../../public/fonts/khebrat/18 Khebrat Musamim Regular.ttf',
      weight: '500',
      style: 'normal',
    },]
})
//heades will make the page dynamic, so we need to use generateStaticParams to make it static generated
//dynamic page is slower because it needs to run the server code on every request,
//while static page is faster because it runs once during build and can be cached and served from a CDN
export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" },
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>
}) {
  const { locale } = await params;
  return locale === "ar" ? metadataAR : metadataEN;
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={`${noto.variable} ${khebrat.variable} font-khebrat antialiased`}
      >
        <div className="fixed top-10 left-10 z-99">
          <Button asChild variant={'outline'} size={'icon-lg'}>
            <Link scroll={false} href={locale === "en" ? "/ar" : "/en"} className="bg-black text-xl text-white  px-8 py-3 rounded-xl">
              {locale === "en" ? "العربية" : "English"}
            </Link>
          </Button>
        </div>
        {children}
      </body>
    </html >
  );
}

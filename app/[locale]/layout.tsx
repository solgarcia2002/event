import UIProviders from "./UIProviders";
import Navbar from "./components/navbar/navbar";
import { NextIntlClientProvider } from "next-intl";
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Mukta } from "next/font/google";
import Footer from "./components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../globals.css";
import jsonLd from "./components/JsonLd/JsonLd";

const mukta = Mukta({ 
  subsets:["latin"],
  weight:["400", "700"], 
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: any;
}


export default async  function RootLayout({ children, params }: LocaleLayoutProps) {

  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
    return null
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
    return null
  }
  return (
    <html lang={locale}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-PGBP25SH"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="google-site-verification"
          content="LvEZ6FBvIfX6e1HjkgKD91Rgun2dA5rwCoGwBvbyf3k"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={mukta.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <UIProviders>
          <Navbar />
          {children}
          <Footer/>
        </UIProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

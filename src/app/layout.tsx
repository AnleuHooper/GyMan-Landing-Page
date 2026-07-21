import type { Metadata } from "next";
import Script from "next/script";
import { templesData } from "@/lib/templesData";
import "./globals.css";

export const metadata: Metadata = {
  title: "GYMAN",
  description: "Red de Sucursales de Evolución — Encuentra el GyMan más cercano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="es">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.templesData = ${JSON.stringify(templesData)};`,
          }}
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;900&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/afw2mds.css" />

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '977610231927047');
          fbq('track', 'PageView');
        `}</Script>

        {/* Service Worker Cleanup */}
        <Script id="sw-cleanup" strategy="afterInteractive">{`
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
              for(let registration of registrations) {
                registration.unregister();
              }
            });
          }
        `}</Script>
      </head>
      <body className="bg-background text-zinc-300 font-body selection:bg-primary selection:text-on-primary overflow-x-hidden">
        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=977610231927047&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}

        {/* Google Maps SDK */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

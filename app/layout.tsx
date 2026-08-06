import "./globals.css";
import { Instrument_Serif, Merriweather, Oxanium, Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const oxanium = Oxanium({subsets:['latin'],variable:'--font-sans'});

const ralewayHeading = Raleway({subsets:['latin'],variable:'--font-heading'});

const instrumentSerif = Instrument_Serif({subsets:['latin'],weight:['400'],variable:'--font-serif'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", instrumentSerif.variable, "font-sans", oxanium.variable, ralewayHeading.variable)}
    >
      <body className="min-h-full flex flex-col">

        {/* {navbar} */}

        {children}

        {/* {footer} */}

        
      </body>
    </html>
  );
}

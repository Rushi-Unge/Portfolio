// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Rushikesh Unge | MERN Stack Developer & Backend Specialist",
  description:
    "Official portfolio of Rushikesh Unge — MERN stack developer, backend engineer, and creator of real-time dashboards like SHAKTI. Explore projects, skills, and contact options.",
  keywords: [
    "Rushikesh Unge",
    "MERN stack developer",
    "Software engineer",
    "React developer",
    "Node.js backend",
    "real-time dashboard",
    "SHAKTI project",
    "developer portfolio",
  ],
  authors: [{ name: "Rushikesh Unge" }],
  openGraph: {
    title: "Rushikesh Unge | MERN Stack Developer",
    description:
      "Explore Rushikesh's developer journey, backend projects, and real-time drone dashboard apps.",
    url: "https://yourdomain.com",
    siteName: "Rushikesh Unge Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rushikesh Unge Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushikesh Unge | MERN Stack Developer",
    description:
      "Passionate software engineer with expertise in backend systems and real-time web apps.",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-white">
        <Header />
        {children}

        {/* ✅ Chatbase Embed Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbaseConfig = {
                chatbotId: "Wa73bqd6eZTMcwB7kOGsF",
                autoPopup: false
              };
            `,
          }}
        />
        <script src="https://www.chatbase.co/embed.min.js" defer></script>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "John Online Services & Applications",
    template: "%s | John Online Services",
  },
  description:
    "Enterprise-grade digital services marketplace. Professional solutions for student, business, IT, and tourism services.",
  keywords: [
    "services",
    "applications",
    "student",
    "business",
    "IT",
    "tourism",
    "Tanzania",
  ],
  authors: [{ name: "John Online Services" }],
  creator: "John Online Services",
  publisher: "John Online Services",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johnonlineservices.com",
    siteName: "John Online Services & Applications",
    title: "John Online Services & Applications",
    description:
      "Enterprise-grade digital services marketplace for Tanzania.",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Online Services & Applications",
    description:
      "Enterprise-grade digital services marketplace for Tanzania.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%230ea5e9'>J</text></svg>"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <div vaul-drawer-wrapper="">{children}</div>
      </body>
    </html>
  );
}

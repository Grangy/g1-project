import ClientLayout from './ClientLayout';
import "./globals.css";

export const metadata = {
  title: 'G1 - Фитнес Парк',
  description: 'G1 Фитнес первый и самый крупный в Крыму и Симфреополе Фитнес парк',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

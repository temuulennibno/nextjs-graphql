"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    // uri: "/api/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body className={`${inter.className} w-full h-screen flex items-center justify-center`}>{children}</body>
      </ApolloProvider>
    </html>
  );
}

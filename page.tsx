"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="p-6 space-y-10 max-w-4xl mx-auto">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">UmerMinhas – The Big Bull of Crypto & Forex</h1>
        <p className="text-lg text-gray-600 italic">Turning Volatility into Victory</p>
      </section>

      <div className="flex justify-center">
        <Image
          src="/IMG-20250302-WA0031.jpg"
          alt="Umer Minhas"
          width={300}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-2xl font-semibold">About UmerMinhas</h2>
          <p>
            I'm Umer Minhas — known in the crypto and forex space as <strong>The Big Bull</strong>.
            I study market patterns, decode volatility, and turn risk into reward.
            With 5+ years in crypto and forex markets, my focus is on:
          </p>
          <ul className="list-disc list-inside">
            <li>Smart portfolio growth</li>
            <li>Precise entry/exit strategies</li>
            <li>1-on-1 mentorship for traders</li>
            <li>Partnering with promising Web3 projects</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-2xl font-semibold">What I Offer</h2>
          <ul className="list-disc list-inside">
            <li>Crypto & Forex Market Signals</li>
            <li>1-on-1 Mentorship & Trading Reviews</li>
            <li>Risk Management Strategies</li>
            <li>Educational Content for Beginners</li>
            <li>Exclusive Access to the UM Trading App (Coming Soon)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-2xl font-semibold">Connect with Me</h2>
          <p>
            📍 WhatsApp / Call: <br/>
            <a href="tel:+923174703655" className="text-blue-500">+92-317-4703-655</a><br/>
            <a href="tel:+923372109474" className="text-blue-500">+92-337-210-9474</a><br/>
            📍 Twitter: <a href="#" className="text-blue-500">@UmerMinhasCrypto</a><br/>
            📍 Telegram: <a href="#" className="text-blue-500">t.me/UmerMinhasOfficial</a><br/>
            📍 Email: <a href="mailto:contact@umerminhas-global.vercel.app" className="text-blue-500">contact@umerminhas-global.vercel.app</a>
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button className="text-lg px-6 py-2">Join the Bull Run</Button>
      </div>
    </main>
  );
}

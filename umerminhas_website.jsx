import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="p-6 space-y-10 max-w-4xl mx-auto">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">UmerMinhas – The Big Bull of Crypto & Forex</h1>
        <p className="text-lg text-gray-600 italic">Turning Volatility into Victory</p>
      </section>

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
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-2xl font-semibold">Connect with Me</h2>
          <p>
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

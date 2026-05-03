export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Deploy Fake API Keys to{' '}
          <span className="text-[#58a6ff]">Catch Security Breaches</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Generate honeypot API keys with embedded tracking tokens. The moment an attacker uses one, you get an instant alert with full breach attribution — IP, timestamp, and deployment source.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Catching Breaches — $49/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🪤', title: 'Honeypot Keys', desc: 'Generate realistic-looking fake API keys that blend in with real credentials.' },
            { icon: '📡', title: 'Real-Time Alerts', desc: 'Webhook endpoints capture every usage attempt and notify you within seconds.' },
            { icon: '🔍', title: 'Breach Attribution', desc: 'Correlate usage events with deployment sources to pinpoint the leak origin.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited honeypot API keys',
              'Real-time webhook alerts',
              'Breach source attribution',
              'IP & geo tracking',
              'Slack & email notifications',
              'Dashboard & audit logs'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do honeypot API keys work?',
              a: 'We generate fake API keys that look identical to real ones. Each key contains a unique tracking token. When an attacker attempts to use the key, our webhook endpoint captures the request and immediately alerts you.'
            },
            {
              q: 'How accurate is breach attribution?',
              a: 'Each honeypot key is tagged with the deployment context where it was placed — e.g., a specific repo, environment, or team member. When triggered, you see exactly which key was used and where it was deployed, pinpointing the leak source.'
            },
            {
              q: 'Do I need to change my existing infrastructure?',
              a: 'No. HoneypotAPI works alongside your existing setup. You simply generate honeypot keys and seed them in sensitive locations. No agents, no code changes, no downtime required.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} HoneypotAPI. All rights reserved.
      </footer>
    </main>
  )
}

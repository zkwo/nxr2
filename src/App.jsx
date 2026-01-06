import React, { useState } from 'react';
import { Sparkles, Key, ShoppingCart, Shield, Zap, Star, Copy } from 'lucide-react';

const NexoraHub = () => {
  const [copied, setCopied] = useState(false);
  const scriptText = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/NexoraHub/Main/main/script.lua"))()';

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020408] text-white font-sans flex flex-col items-center px-6 py-12 overflow-x-hidden selection:bg-purple-500/30">
      
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-600/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Header / Logo Section */}
      <header className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 bg-[#0F1117] border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Sparkles className="w-8 h-8 text-purple-400 animate-glow" />
        </div>
        
        <h1 className="text-[44px] leading-tight font-black tracking-tighter text-center mb-2">
          <span className="bg-gradient-to-b from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
            NEXORA<br />HUB
          </span>
        </h1>
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.3em] opacity-60">
          Experience the next level of power
        </p>
      </header>

      {/* Script Box - Horizontal Scrollable */}
      <div className="w-full max-w-md bg-[#0F1117] border border-white/10 rounded-2xl flex items-center overflow-hidden mb-12 group">
        <div className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide py-4 px-5 text-sm font-mono text-gray-300">
          {scriptText}
        </div>
        <button 
          onClick={handleCopy}
          className="bg-white/5 p-4 border-l border-white/10 hover:bg-white/10 active:scale-90 transition-all shrink-0"
        >
          <Copy className={`w-5 h-5 ${copied ? 'text-green-400' : 'text-gray-400'}`} />
        </button>
      </div>

      {/* Access Cards */}
      <div className="w-full max-w-md space-y-10">
        
        {/* Free Access Card */}
        <div className="bg-[#11131E]/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col items-center text-center shadow-2xl">
          <Key className="w-12 h-12 text-purple-400 mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" strokeWidth={1.5} />
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Free Access</h2>
          <p className="text-gray-400 leading-relaxed mb-8">Begin your journey with<br/>basic features</p>
          <button className="w-full bg-[#1D1F2B] hover:bg-[#252838] py-4 rounded-2xl font-bold text-lg transition-all border border-white/5 active:scale-[0.98]">
            Get Free Key
          </button>
        </div>

        {/* Premium Access Card */}
        <div className="bg-[#11131E]/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col items-center text-center shadow-2xl relative">
          <div className="absolute -top-3 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg z-10">
            Best Value
          </div>
          <ShoppingCart className="w-12 h-12 text-pink-400 mb-6 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]" strokeWidth={1.5} />
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Premium Access</h2>
          <p className="text-gray-400 leading-relaxed mb-8">Unlock full potential with<br/>premium features</p>
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:brightness-110 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-purple-500/20 active:scale-[0.98]">
            Get Premium Key
          </button>
        </div>
      </div>

      {/* Feature List */}
      <div className="w-full max-w-md mt-14 space-y-4">
        <FeatureItem 
          icon={<Shield className="w-6 h-6" />}
          title="Secure System"
          desc="Advanced protection and monitoring features"
        />
        <FeatureItem 
          icon={<Zap className="w-6 h-6" />}
          title="High Performance"
          desc="Optimized for maximum speed and efficiency"
        />
        <FeatureItem 
          icon={<Star className="w-6 h-6" />}
          title="Premium Features"
          desc="Access to exclusive tools and capabilities"
        />
      </div>

      {/* Bottom Key Access */}
      <div className="w-full max-w-md mt-12 bg-gradient-to-b from-[#11131E]/60 to-[#0A0B14]/80 backdrop-blur-xl border border-white/5 rounded-[40px] p-10 text-center shadow-2xl mb-10">
        <h3 className="text-3xl font-bold mb-3 tracking-tight">Already have a key?</h3>
        <p className="text-gray-400 mb-8">Access the full script hub with your<br/>existing key</p>
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/20 active:scale-[0.98]">
          Access Script Hub
        </button>
      </div>

    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-5 p-5 bg-[#0F1117]/60 backdrop-blur-lg rounded-[24px] border border-white/5 hover:bg-white/[0.08] transition-all">
    <div className="shrink-0 w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
      {icon}
    </div>
    <div className="flex flex-col">
      <h4 className="font-bold text-lg tracking-tight">{title}</h4>
      <p className="text-xs text-gray-500 font-medium">{desc}</p>
    </div>
  </div>
);

export default NexoraHub;

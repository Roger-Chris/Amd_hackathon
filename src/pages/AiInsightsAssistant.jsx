import { useState } from 'react';
import { analyzeInsights } from '../api/gemini';

function AiInsightsAssistant() {
  const [prompt, setPrompt] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setAnalysis("Analyzing current market trends and inventory velocity...");
    const result = await analyzeInsights(prompt);
    setAnalysis(result);
    setLoading(false);
  };

  const setPresetPrompt = (text) => {
    setPrompt(text);
  };

  return (
    <div className="flex-1 flex flex-col gap-8 max-w-[1600px] mx-auto w-full pb-12">
      {/* Header */}
      <header className="flex flex-col gap-2">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-[#51507f] to-[#3e3fcc] bg-clip-text text-transparent w-max">
          Intelligence Hub
        </h1>
        <p className="font-body text-on-surface-variant text-base md:text-lg max-w-2xl">
          Ask questions about your sales data, inventory levels, and get predictive recommendations tailored to your enterprise.
        </p>
      </header>

      {/* Chat Input Area */}
      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(25,28,30,0.04)] relative z-10 border border-outline-variant/20">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-4 text-primary text-[24px]">colors_spark</span>
          <input 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            className="w-full bg-surface-container-low border-none rounded-lg pl-12 pr-16 py-4 font-body text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all text-base outline-none" 
            placeholder="E.g., Which product lines are projected to underperform next quarter?" 
            type="text"
          />
          <button 
            onClick={handleAnalyze}
            disabled={loading}
            className="absolute right-2 bg-gradient-to-br from-[#51507f] to-[#6a6899] text-white w-10 h-10 rounded-md flex items-center justify-center hover:opacity-90 transition-opacity shadow-[0_4px_12px_rgba(81,80,127,0.3)] disabled:opacity-50">
            {loading ? (
              <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
            ) : (
              <span className="material-symbols-outlined text-[20px]">send</span>
            )}
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Analyze Q3 Margins", "Identify Stockout Risks", "Top Performing Categories"].map(preset => (
            <span 
              key={preset}
              onClick={() => setPresetPrompt(preset)}
              className="font-body text-xs text-on-surface-variant font-medium py-1.5 px-3 bg-surface-container rounded-full cursor-pointer hover:bg-surface-container-highest transition-colors">
              {preset}
            </span>
          ))}
        </div>
      </section>

      {/* Analysis Result Box */}
      {analysis && (
        <section className="bg-[#f0f4f8] rounded-xl p-6 border border-primary/20 shadow-sm animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
            <h2 className="font-headline text-lg font-bold text-on-background">Analysis Result</h2>
          </div>
          <div className="font-body text-sm text-on-surface whitespace-pre-wrap leading-relaxed">
            {analysis}
          </div>
        </section>
      )}

      {/* Generated Recommendations Bento Grid */}
      <section className="flex flex-col gap-6 mt-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-[20px]">insights</span>
          <h2 className="font-headline text-xl font-bold text-on-background tracking-tight">Generated Recommendations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {/* Card 1: Restock Suggestion */}
          <article className="bg-tertiary-container/10 bg-opacity-70 backdrop-blur-md rounded-xl p-6 border border-tertiary-container/20 shadow-[0_12px_40px_rgba(25,28,30,0.04)] flex flex-col gap-4 group hover:shadow-[0_12px_40px_rgba(25,28,30,0.08)] transition-all">
            <header className="flex justify-between items-start">
              <div className="flex items-center gap-2 bg-white/50 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/40">
                <span className="material-symbols-outlined text-tertiary text-[16px]">warning</span>
                <span className="font-label text-xs font-semibold text-tertiary uppercase tracking-wider">Restock Suggestion</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-tertiary transition-colors cursor-pointer">more_vert</span>
            </header>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="font-headline text-lg font-bold text-on-background leading-tight">Aeron Task Chairs</h3>
              <p className="font-body text-sm text-on-surface-variant">Projected stockout in 14 days based on current velocity.</p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-4 mt-auto">
              <div className="flex justify-between items-end mb-2">
                <span className="font-body text-xs text-outline">Current Stock</span>
                <span className="font-headline text-xl font-extrabold text-on-background">42<span className="text-sm font-normal text-outline ml-1">units</span></span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full rounded-full w-1/4"></div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="font-body text-xs text-on-surface-variant">Suggested Order: <strong>120 units</strong></span>
                <button className="text-xs font-semibold text-tertiary hover:text-tertiary-container transition-colors flex items-center gap-1">
                  Action <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
          {/* Card 2: Demand Spike Alert */}
          <article className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(25,28,30,0.04)] flex flex-col gap-4 border border-outline-variant/20 hover:-translate-y-1 transition-transform">
            <header className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">trending_up</span>
                <span className="font-label text-xs font-semibold text-secondary uppercase tracking-wider">Demand Spike Alert</span>
              </div>
            </header>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="font-headline text-lg font-bold text-on-background leading-tight">Standing Desks (Oak)</h3>
              <p className="font-body text-sm text-on-surface-variant">+45% search volume across B2B portals this week.</p>
            </div>
            <div className="flex items-end gap-4 mt-auto pt-4 border-t border-outline-variant/20">
              <div className="flex-1 flex flex-col gap-1">
                <span className="font-body text-xs text-outline">Est. Revenue Impact</span>
                <span className="font-headline text-2xl font-extrabold text-secondary">+$12.5k</span>
              </div>
              <div className="flex items-end gap-1 h-12 w-24">
                <div className="bg-surface-container-high w-1/4 h-1/4 rounded-t-sm"></div>
                <div className="bg-surface-container-high w-1/4 h-2/4 rounded-t-sm"></div>
                <div className="bg-secondary-fixed-dim w-1/4 h-3/4 rounded-t-sm"></div>
                <div className="bg-secondary w-1/4 h-full rounded-t-sm"></div>
              </div>
            </div>
          </article>
          {/* Card 3: Promotion Opportunity */}
          <article className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(25,28,30,0.04)] flex flex-col gap-4 border border-outline-variant/20 hover:-translate-y-1 transition-transform">
            <header className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">campaign</span>
                <span className="font-label text-xs font-semibold text-primary uppercase tracking-wider">Promo Opportunity</span>
              </div>
            </header>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="font-headline text-lg font-bold text-on-background leading-tight">Lounge Seating Collection</h3>
              <p className="font-body text-sm text-on-surface-variant">High inventory holding costs. Suggest 15% bundled discount.</p>
            </div>
            <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-outline-variant/20">
              <div className="flex justify-between items-center">
                <span className="font-body text-xs text-outline">Current Holding Cost</span>
                <span className="font-body text-sm font-semibold text-on-surface">$4,200/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body text-xs text-outline">Target Sell-through</span>
                <span className="font-body text-sm font-semibold text-primary">65% in 30 days</span>
              </div>
              <button className="w-full mt-2 py-2 px-4 rounded-md border border-outline-variant/40 text-primary font-body text-sm font-medium hover:bg-primary-container/10 transition-colors">
                Review Campaign
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default AiInsightsAssistant;

import { Link } from 'react-router-dom';

function MerchantDashboard() {
  return (
    <>
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="font-headline font-bold text-[3.5rem] leading-none text-on-surface mb-2 tracking-tight">Intelligence</h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-2xl">Executive overview of curations, inventory yield, and revenue velocity for the current period.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-semibold tracking-wide uppercase">Elite Tier Active</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Revenue Velocity (Hero Card) */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container"></div>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-body font-medium text-title-sm text-on-surface-variant mb-1">Revenue Velocity</h3>
              <div className="font-headline font-bold text-[2.5rem] text-on-surface">$1.24M</div>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1.5 rounded-lg">
              <span className="material-symbols-outlined text-tertiary-container text-sm">trending_up</span>
              <span className="text-sm font-semibold text-tertiary-container">+14.2%</span>
            </div>
          </div>
          {/* Abstract Chart Representation */}
          <div className="h-48 w-full relative flex items-end justify-between px-2">
            <div className="w-1/12 bg-surface-container-low rounded-t-sm h-1/4 group-hover:bg-surface-container transition-colors"></div>
            <div className="w-1/12 bg-surface-container-low rounded-t-sm h-1/3 group-hover:bg-surface-container transition-colors"></div>
            <div className="w-1/12 bg-surface-container-low rounded-t-sm h-1/2 group-hover:bg-surface-container transition-colors"></div>
            <div className="w-1/12 bg-surface-container-low rounded-t-sm h-2/5 group-hover:bg-surface-container transition-colors"></div>
            <div className="w-1/12 bg-surface-container-low rounded-t-sm h-3/5 group-hover:bg-surface-container transition-colors"></div>
            <div className="w-1/12 bg-surface-container-low rounded-t-sm h-1/2 group-hover:bg-surface-container transition-colors"></div>
            <div className="w-1/12 bg-surface-container-low rounded-t-sm h-3/4 group-hover:bg-surface-container transition-colors"></div>
            <div className="w-1/12 bg-primary/20 rounded-t-sm h-[85%] relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">Peak</div>
            </div>
            <div className="w-1/12 bg-surface-container-low rounded-t-sm h-2/3 group-hover:bg-surface-container transition-colors"></div>
            {/* Line Overlay */}
            <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,80 Q10,70 20,60 T40,50 T60,30 T80,10 T100,20" fill="none" stroke="#602200" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
              <circle cx="80" cy="10" fill="#602200" r="1.5"></circle>
            </svg>
          </div>
        </div>
        {/* AI Summary Drawer */}
        <div className="lg:col-span-4 bg-inverse-surface rounded-xl p-8 text-secondary-fixed glass-panel relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-container rounded-full blur-3xl opacity-20"></div>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-tertiary-fixed">auto_awesome</span>
            <h3 className="font-headline font-semibold text-xl text-white">Curator Insights</h3>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-tertiary-fixed/30 pl-4 py-1">
              <p className="font-body text-sm leading-relaxed text-secondary-fixed-dim">High demand detected in 'Autumn Cashmere' curation. Inventory levels are dropping faster than projected. Recommended action: expedite reorder.</p>
            </div>
            <div className="border-l-2 border-outline/30 pl-4 py-1">
              <p className="font-body text-sm leading-relaxed text-secondary-fixed-dim">Average order value increased by 8% this week, driven by successful upselling in the 'Executive Accessories' bundle.</p>
            </div>
          </div>
          <Link to="/seller/insights" className="block text-center mt-8 w-full py-3 border border-outline-variant/15 text-tertiary-fixed font-label text-sm uppercase tracking-widest hover:bg-white/5 transition-colors rounded-md">
            Full Report
          </Link>
        </div>
        {/* Curations Yield */}
        <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-6">
          <h3 className="font-body font-medium text-title-sm text-on-surface-variant mb-6">Top Curations Yield</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-surface-variant overflow-hidden">
                  <img alt="Autumn Collection" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLOIBa2_81x8GhH6I8B6bCcXEUbk8KvpeyYb7A3nguJ1X7TRSAhhtMDIefV2uyk1iJnqHO6GaVjZCPeXt8lHtcECiGAr8nVWBWtxtMXdegENXbeThh4OFHbA28hxzAxE4Nc-0qGvG8U-dvWPjUUaPBjnXUJcD7M__KxHJL6D2gpbJj5LZImMC-uwrTmMKP4clCrzjz-Qc2bG1-eL26Fiwbg_Q9OG14ycyLIWfktUGFzV7bJ0M4Ycs4sw2G1DmjzE8KBZ510af2QXs"/>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-sm text-on-surface">Autumn Reserve</h4>
                  <p className="text-xs text-outline">42 items</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-on-surface">$48.2k</div>
                <div className="text-xs text-secondary">+5.2%</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-surface-variant overflow-hidden">
                  <img alt="Leather Goods" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJbr7zC0ApoGu57Lk_6cZbNGUKsQTEi4GLs9_uv2QASxTvprLb-s3GiLg8LXqRxToXclRQholKLCb36haAaSTpmW0kRcwt6uHKq5SNRzuTfU8EUhe5ugINGV46ARO_eZK-Hq3ETDCTRv2BCHUBA5LH7Wm3Ij5NeEcHBCUSC-FZSyTaYbrgI21n95bGE2UvpoJOctNMb3g_FC_zRDhXPZQ0J1Px0GNuMLIqMrZDR9-xvunzxq1qO_P36GJKjzOExl6BR5lLV_FjB74"/>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-sm text-on-surface">Heritage Leather</h4>
                  <p className="text-xs text-outline">18 items</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-on-surface">$31.5k</div>
                <div className="text-xs text-outline">Steady</div>
              </div>
            </div>
          </div>
        </div>
        {/* Inventory Status */}
        <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-6">
          <h3 className="font-body font-medium text-title-sm text-on-surface-variant mb-6">Inventory Health</h3>
          <div className="flex flex-col items-center justify-center h-40">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeWidth="3"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline font-bold text-xl text-on-surface">75%</span>
                <span className="text-[0.6rem] text-outline uppercase tracking-widest">Optimal</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-4 text-xs font-body">
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> In Stock</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-surface-container-highest"></span> Low/Depleted</div>
          </div>
        </div>
        {/* Action Prompt */}
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">campaign</span>
            </div>
            <h3 className="font-headline font-semibold text-lg text-on-surface mb-2">Q4 Strategy Ready</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">Review the AI-generated merchandising strategy for the upcoming holiday peak.</p>
          </div>
          <button className="w-full py-2 bg-transparent border border-outline-variant/15 text-tertiary font-label text-sm uppercase tracking-wide hover:border-outline transition-colors rounded-md">
            Review Plan
          </button>
        </div>
      </div>
    </>
  );
}

export default MerchantDashboard;

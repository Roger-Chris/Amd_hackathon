import { Link, Outlet } from 'react-router-dom';

function SellerLayout() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex">
      <header className="fixed top-0 right-0 w-full md:w-[calc(100%-18rem)] h-16 bg-white/80 dark:bg-[#1b1c1c]/80 backdrop-blur-xl z-40 flex justify-between items-center px-10 transition-opacity hover:opacity-80">
        <div className="flex items-center gap-4 w-1/3">
          <div className="relative w-full max-w-md hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low focus:bg-surface-container-lowest focus:outline-none focus:ring-0 border-b-2 border-transparent focus:border-secondary transition-colors text-sm font-body text-on-surface rounded-t-lg" placeholder="Search Intel..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-stone-500 hover:text-stone-800 underline">Back to Store</Link>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-5 py-2 rounded-md font-label text-sm uppercase tracking-[0.05em] hover:shadow-lg transition-shadow">
            New Insights
          </button>
          <div className="flex items-center gap-4 text-[#602200] dark:text-[#ffdea5]">
            <button className="hover:text-[#602200] dark:hover:text-[#ffdea5] transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="hover:text-[#602200] dark:hover:text-[#ffdea5] transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </div>
      </header>
      
      <nav className="hidden md:flex flex-col h-screen w-72 fixed left-0 top-0 bg-[#001D3D] dark:bg-[#000F1F] z-50 shadow-2xl dark:shadow-none py-8 px-6">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-tertiary-fixed">storefront</span>
            </div>
            <div>
              <h1 className="font-manrope font-bold text-lg text-white tracking-widest uppercase">Precision Curator</h1>
              <p className="text-xs text-tertiary-fixed-dim">Elite Merchant Tier</p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <Link to="/seller" className="flex items-center gap-4 text-slate-300 px-4 py-3 opacity-70 hover:bg-white/5 hover:opacity-100 transition-all duration-300 rounded-lg">
            <span className="material-symbols-outlined">insights</span>
            <span className="font-manrope font-semibold tracking-tight text-sm">Dashboard</span>
          </Link>
          <Link to="/seller/inventory" className="flex items-center gap-4 text-slate-300 px-4 py-3 opacity-70 hover:bg-white/5 hover:opacity-100 transition-all duration-300 rounded-lg">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-manrope font-semibold tracking-tight text-sm">Inventory</span>
          </Link>
          <Link to="/seller/insights" className="flex items-center gap-4 text-slate-300 px-4 py-3 opacity-70 hover:bg-white/5 hover:opacity-100 transition-all duration-300 rounded-lg">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-manrope font-semibold tracking-tight text-sm">AI Insights</span>
          </Link>
        </div>
      </nav>

      <main className="md:ml-72 mt-16 p-8 min-h-screen bg-surface w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default SellerLayout;

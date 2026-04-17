import { Link, Outlet } from 'react-router-dom';

function CustomerLayout() {
  return (
    <div className="page-bg antialiased text-on-background min-h-screen flex flex-col">
      <header className="bg-[#fcf9f8] dark:bg-stone-900 fixed top-0 w-full z-50 font-manrope text-sm tracking-wide bg-[#f6f3f2] dark:bg-stone-800 backdrop-blur-md bg-opacity-90">
        <div className="flex justify-between items-center h-20 px-8 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-[#004A99] dark:text-white tracking-tighter">
            AuraRetail
          </Link>
          <div className="hidden md:flex items-center ml-8 flex-grow max-w-md">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-500">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-highest rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:border-b-2 border-secondary transition-all font-body text-sm text-on-surface" placeholder="Search curated collections..." type="text" />
            </div>
          </div>
          <nav className="hidden md:flex gap-8 items-center ml-auto mr-8">
            <Link to="/" className="text-stone-600 dark:text-stone-400 font-medium hover:text-[#004A99] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-300 px-2 py-1 rounded">Collections</Link>
            <Link to="/" className="text-stone-600 dark:text-stone-400 font-medium hover:text-[#004A99] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-300 px-2 py-1 rounded">New Arrivals</Link>
            <Link to="/" className="text-stone-600 dark:text-stone-400 font-medium hover:text-[#004A99] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-300 px-2 py-1 rounded">Trending</Link>
            <Link to="/seller" className="text-stone-600 dark:text-stone-400 font-medium hover:text-[#004A99] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-300 px-2 py-1 rounded border border-stone-300">Seller Dashboard</Link>
          </nav>
          <div className="flex items-center gap-6">
            <Link to="/cart" className="flex flex-col items-center justify-center text-[#004A99] dark:text-blue-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-300 p-2 rounded relative group">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="sr-only">Cart</span>
              <span className="absolute top-1 right-1 bg-[#ff6600] text-white text-[10px] leading-tight rounded-full h-4 w-4 flex items-center justify-center font-bold">2</span>
            </Link>
            <button className="flex flex-col items-center justify-center text-[#004A99] dark:text-blue-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-300 p-2 rounded">
              <span className="material-symbols-outlined">person</span>
              <span className="sr-only">Account</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <footer className="bg-stone-900 dark:bg-black font-inter text-xs uppercase tracking-widest w-full py-12 px-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8 text-white mt-auto">
        <div className="text-xl font-black text-white">AuraRetail</div>
        <nav className="flex flex-wrap justify-center gap-6">
          <Link to="/" className="text-stone-500 hover:text-white transition-all duration-300 ease-in-out">Sustainability</Link>
          <Link to="/" className="text-stone-500 hover:text-white transition-all duration-300 ease-in-out">Track Order</Link>
          <Link to="/" className="text-stone-500 hover:text-white transition-all duration-300 ease-in-out">Privacy Policy</Link>
          <Link to="/" className="text-stone-500 hover:text-white transition-all duration-300 ease-in-out">Terms of Service</Link>
        </nav>
        <div className="text-stone-500 text-right">© 2026 Aura Intelligence. Precision Curated Retail.</div>
      </footer>
    </div>
  );
}

export default CustomerLayout;

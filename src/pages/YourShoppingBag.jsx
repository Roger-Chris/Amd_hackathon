import { Link } from 'react-router-dom';

function YourShoppingBag() {
  return (
    <div className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto w-full">
      <div className="mb-12">
        <h1 className="font-headline text-[2.5rem] font-bold text-on-surface leading-tight tracking-tight">Your Cart</h1>
        <p className="font-body text-base text-on-surface-variant mt-2">Review your selected items before proceeding to checkout.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 transition-colors duration-300 hover:bg-surface-container-low flex flex-col sm:flex-row gap-6 items-center sm:items-start relative overflow-hidden group">
            <div className="w-full sm:w-32 aspect-square rounded-lg overflow-hidden shrink-0 bg-surface-container">
              <img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ID5zzR12E5i7I4WOK4u952hcOxDdZ_QLcD8siJDXKN-rfVh7evL1UQU-VYIGqMO2LVPnIKNwrr0_nivQBMsy_4Ma8w18BYdD2zAHjICZWjetA_ps01pJSawpMw9HTLINYF0p6fiMTVRXOY6Ll33E_7WWGFveHaVDWGpxxfspD_Bn7-5I_-SvI_s9kq1A1_gPlEyb8afuORaYGrITwHPXTX2v3heDADlTENf8ehgyU8ThBf4SB4voJFEdLGVGpmtGMCUitbtrDP0"/>
            </div>
            <div className="flex-grow flex flex-col justify-between w-full h-full">
              <div className="flex justify-between items-start w-full">
                <div>
                  <h3 className="font-headline text-lg font-semibold text-on-surface">Aura SpeedRunner Pro</h3>
                  <p className="font-body text-sm text-on-surface-variant mt-1">Color: Crimson / White • Size: US 10</p>
                </div>
                <span className="font-headline text-xl font-bold text-on-surface ml-4">$185.00</span>
              </div>
              <div className="flex justify-between items-end mt-6 w-full">
                <div className="flex items-center bg-surface-container-low rounded-lg p-1 border border-outline-variant/15">
                  <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container-highest">
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="w-10 text-center font-body text-sm font-medium">1</span>
                  <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container-highest">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 text-sm font-medium">
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  Remove
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl p-6 transition-colors duration-300 hover:bg-surface-container-low flex flex-col sm:flex-row gap-6 items-center sm:items-start relative overflow-hidden group">
            <div className="w-full sm:w-32 aspect-square rounded-lg overflow-hidden shrink-0 bg-surface-container">
              <img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-ViQr1fnA6hLEVzO9gRIEmjEG0Ev9V-zVKXeqCxoBeGO-UjrCzAu2fJCP48C9d35AM49jpHrzmWuLopxhHytMevSGoX2Y7ucngSCKZM52hAFkrSLjOO1lwaAwYHpHwuiJijsmwlvXpSHdEKDH1ujizNPRu54HZc2p7HSzxFULOw1Qxu_joDb5ANOgYelmuBjUy4Jt7pRDDKNqc4GCU5suTcI2cWK6bQIWSbMNRxYZa9WnFaFk4w_RirOn1vYGugnEJHCQZ8zs3eU"/>
            </div>
            <div className="flex-grow flex flex-col justify-between w-full h-full">
              <div className="flex justify-between items-start w-full">
                <div>
                  <h3 className="font-headline text-lg font-semibold text-on-surface">Element Tech Shell</h3>
                  <p className="font-body text-sm text-on-surface-variant mt-1">Color: Midnight • Size: L</p>
                </div>
                <span className="font-headline text-xl font-bold text-on-surface ml-4">$240.00</span>
              </div>
              <div className="flex justify-between items-end mt-6 w-full">
                <div className="flex items-center bg-surface-container-low rounded-lg p-1 border border-outline-variant/15">
                  <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container-highest">
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="w-10 text-center font-body text-sm font-medium">2</span>
                  <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container-highest">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 text-sm font-medium">
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4 sticky top-28">
          <div className="bg-surface-container-low rounded-[1.5rem] p-8 flex flex-col gap-6">
            <h2 className="font-headline text-xl font-bold text-on-surface">Order Summary</h2>
            <div className="flex flex-col gap-4 font-body text-sm">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Subtotal (3 items)</span>
                <span className="font-medium text-on-surface">$665.00</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Estimated Shipping</span>
                <span className="font-medium text-on-surface">Free</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Estimated Tax</span>
                <span className="font-medium text-on-surface">$53.20</span>
              </div>
            </div>
            <div className="h-[1px] w-full bg-outline-variant/30 my-2"></div>
            <div className="flex justify-between items-center font-headline text-2xl font-bold text-on-surface">
              <span>Total</span>
              <span>$718.20</span>
            </div>
            <Link to="/checkout" className="w-full mt-4 bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:from-[#e65c00] hover:to-[#ff6600] text-white font-label text-sm uppercase tracking-wider font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2">
              Proceed to Checkout
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-on-surface-variant font-body">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourShoppingBag;

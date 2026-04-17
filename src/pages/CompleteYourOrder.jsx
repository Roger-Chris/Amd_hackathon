function CompleteYourOrder() {
  return (
    <div className="flex-grow max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center lg:text-left">
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">Secure Checkout</h1>
        <p className="text-on-surface-variant mt-2 text-sm md:text-base font-body">Complete your purchase from AuraRetail.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          {/* Express Checkout Section */}
          <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8">
            <h2 className="font-headline text-xl font-semibold mb-6 flex items-center text-on-surface">
              <span className="material-symbols-outlined mr-3 text-primary">bolt</span>
              Express Checkout
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center py-3 px-4 bg-[#000000] text-white rounded-lg hover:bg-gray-900 transition-colors duration-200">
                <span className="font-medium">Apple Pay</span>
              </button>
              <button className="flex items-center justify-center py-3 px-4 bg-[#F6C657] text-[#001D4A] rounded-lg hover:bg-[#F2B93D] transition-colors duration-200">
                <span className="font-medium">PayPal</span>
              </button>
            </div>
            <div className="relative mt-8 mb-4">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant opacity-30"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-surface-container-lowest px-6 text-on-surface-variant font-body">Or continue with card</span>
              </div>
            </div>
          </section>
          {/* Shipping Details */}
          <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8">
            <h2 className="font-headline text-xl font-semibold mb-6 flex items-center text-on-surface">
              <span className="material-symbols-outlined mr-3 text-primary">local_shipping</span>
              Shipping Information
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="first-name">First Name</label>
                  <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="first-name" name="first-name" placeholder="Jane" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="last-name">Last Name</label>
                  <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="last-name" name="last-name" placeholder="Doe" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="address">Address Line 1</label>
                <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="address" name="address" placeholder="123 Main St" type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="apartment">Apartment, suite, etc. (optional)</label>
                <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="apartment" name="apartment" placeholder="Apt 4B" type="text" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="city">City</label>
                  <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="city" name="city" placeholder="New York" type="text" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="state">State / Province</label>
                  <select className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="state" name="state">
                    <option>New York</option>
                    <option>California</option>
                    <option>Texas</option>
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="postal-code">Postal Code</label>
                  <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="postal-code" name="postal-code" placeholder="10001" type="text" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <input className="h-4 w-4 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-low" id="same-as-billing" name="same-as-billing" type="checkbox" />
                <label className="ml-2 block text-sm text-on-surface-variant" htmlFor="same-as-billing">Billing address is the same as shipping</label>
              </div>
            </form>
          </section>
          {/* Payment Details */}
          <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8">
            <h2 className="font-headline text-xl font-semibold mb-6 flex items-center text-on-surface">
              <span className="material-symbols-outlined mr-3 text-primary">credit_card</span>
              Payment Details
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="card-name">Name on Card</label>
                <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="card-name" name="card-name" placeholder="Jane Doe" type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="card-number">Card Number</label>
                <div className="relative">
                  <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 pl-4 pr-12 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="card-number" name="card-number" placeholder="0000 0000 0000 0000" type="text" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-lg">lock</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="expiry">Expiration Date</label>
                  <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="expiry" name="expiry" placeholder="MM/YY" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5" htmlFor="cvc">CVC</label>
                  <div className="relative">
                    <input className="block w-full rounded-lg bg-surface-container-low border-0 py-2.5 px-4 pr-10 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface-container-lowest transition-colors sm:text-sm" id="cvc" name="cvc" placeholder="123" type="text" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 group">
                      <span className="material-symbols-outlined text-lg text-outline cursor-help">help</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 xl:col-span-4 sticky top-8">
          <section className="bg-surface-container-low rounded-xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-surface/40 backdrop-blur-md z-0 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-headline text-xl font-bold mb-6 text-on-surface">Order Summary</h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-surface-container-lowest relative">
                    <img alt="Shoe" className="h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAivVdUgDHKlfvZdU1qC7PQv-XCXT5vorH04-2kqRG4GPLGtdO7DTvoaFizTzPeUMxDHxHVewgm8tTPHBEWqOvi_LQs9ers5cCbU7mTgVpIATBv7b4tV11SG7U90hhir6pN9VqFZrET8Itc69j3Bg3aXD2CjjJhgGrE6_ZYVGma5b6gkwwj92pl8PGtV2BtBkvtcSd66n8VHoDCG9xP6PfCSo3YJq1MrBRXYbn2w12MIZl-PEQAr17ebZENWuHfb_cu1IgCOEDdcaI" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex justify-between text-sm font-medium text-on-surface">
                      <h3 className="font-headline">Aura Pro Runner</h3>
                      <p className="ml-4">$149.00</p>
                    </div>
                    <p className="mt-1 text-xs text-on-surface-variant">Size 10 • Crimson Red</p>
                    <p className="mt-1 text-xs text-on-surface-variant">Qty 1</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-surface-container-lowest relative">
                    <img alt="Backpack" className="h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO484Bc5LJv-cbEqErOm4FtGZnrsycPqW4Yu0T_zGSvmuVR_ln_IHwUKxmHAqgofDy7wSiMMdrNVPxxxyWOBHH7KfB9CmT4HnJrXeY9LA0OINWJ9q_UVCDmq6TokBxd-ZHtkF9gxOQ8Pb_WwPtp03Z3WQR41YUH3iX8Rr5yf5BkxYVF2tQrt4jHoNh7cHnSG2Ov5qt3j3rZ83PF5ZhpVE64j5TojhXAPeKBltqOju94_Y3hYsj7VOGZdmE_OHaO_-Hqb9YXEkcWzs" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex justify-between text-sm font-medium text-on-surface">
                      <h3 className="font-headline">Commuter Pack</h3>
                      <p className="ml-4">$89.00</p>
                    </div>
                    <p className="mt-1 text-xs text-on-surface-variant">Matte Black</p>
                    <p className="mt-1 text-xs text-on-surface-variant">Qty 1</p>
                  </div>
                </div>
              </div>
              {/* Discount Code */}
              <div className="mb-6 pb-6 border-b border-outline-variant/20">
                <label className="sr-only" htmlFor="discount">Discount code</label>
                <div className="flex gap-2">
                  <input className="block w-full rounded-lg bg-surface-container-lowest border-0 py-2 px-4 text-on-surface text-sm focus:ring-2 focus:ring-secondary placeholder:text-outline" id="discount" name="discount" placeholder="Discount code" type="text" />
                  <button className="bg-surface-container text-on-surface px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-variant transition-colors" type="button">Apply</button>
                </div>
              </div>
              {/* Totals */}
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-on-surface-variant">
                  <p>Subtotal</p>
                  <p className="font-medium text-on-surface">$238.00</p>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <p>Shipping</p>
                  <p className="font-medium text-on-surface">Calculated at next step</p>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <p>Tax</p>
                  <p className="font-medium text-on-surface">$19.04</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-outline-variant/30 mb-8">
                <p className="text-base font-headline font-bold text-on-surface">Total</p>
                <div className="text-right">
                  <p className="text-xs text-on-surface-variant mb-1">USD</p>
                  <p className="text-2xl font-headline font-extrabold text-on-surface">$257.04</p>
                </div>
              </div>
              {/* Primary CTA */}
              <button className="w-full bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white rounded-lg py-4 px-6 text-base font-bold font-label uppercase tracking-widest hover:opacity-90 transition-opacity flex justify-center items-center shadow-[0_4px_14px_0_rgba(255,102,0,0.39)]" type="submit">
                <span className="material-symbols-outlined mr-2">lock</span>
                Place Order
              </button>
              <p className="text-center text-xs text-on-surface-variant mt-4 font-body flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px]">shield</span>
                Secure encrypted transaction
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CompleteYourOrder;

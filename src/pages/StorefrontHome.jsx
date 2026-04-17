import { Link } from 'react-router-dom';

function StorefrontHome() {
  return (
    <>
      <section className="relative w-full h-[819px] min-h-[600px] flex items-center justify-center bg-inverse-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="High fashion editorial" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB554jnS3Zh4VPmYJuqrXqe_txOiCxNmXQ81j60OeFMq2AKAf2HCXoWf-tjqPAK3k6yy1wDklI_Cx68N4S2LCC1HXJTb_T9HcfcIi-Hr3ItXU43pohRvZQ4SBGlKOd4iPLVaZ51lx_RmfuxbO61MZEGCkzNY3BJgq8Y7u50WLu8vj4w_4jj2Px4HV_h-rVI6YgYkeR0dHfCf6URdmzkuh2-mwQ0omBgYqO3s-1VxjHeV35nzYi92NgvTn9yDgCGCYw-J0sbK5JEuhU"/>
          <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full flex flex-col items-start text-on-secondary">
          <span className="font-body text-sm uppercase tracking-[0.2em] mb-4 text-tertiary-fixed-dim">The Curator's Edit</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold max-w-3xl leading-tight mb-6">
            Precision Curated Fashion.
          </h1>
          <p className="font-body text-lg md:text-xl max-w-xl text-surface-container-low mb-10">
            Discover a meticulously selected collection of luxury apparel, engineered for the modern aesthetic. Insight meets elegance.
          </p>
          <Link to="/" className="cta-btn font-label text-sm uppercase tracking-wide px-8 py-4 rounded-md font-bold hover:opacity-90 transition-opacity">
            Explore Collection
          </Link>
        </div>
      </section>

      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-2">Curated Categories</h2>
            <p className="font-body text-on-surface-variant">Explore our foundational pillars of style.</p>
          </div>
          <Link to="/" className="hidden md:flex items-center font-label text-sm font-semibold text-secondary hover:text-secondary-container transition-colors">
            View All Categories <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          <Link to="/" className="group relative md:col-span-2 md:row-span-2 rounded-xl overflow-hidden bg-surface-container-highest">
            <img alt="Apparel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD08G5AEPfNIWx8tsAB4v_27KAoeuUzBkICbuP5iWXgW-PlLZ2jXVUNggr67lpvSZsRukwXebtq5Mg3FweYojIhb3ZO0Igs_e-2R93MZVxRVHoSWFrzAID0q7wYaQv9bQ2hvukOUpGFbYTJzLE9w2lydXVGSQ7V2u_9jBZE_2QTfnbWnf6J-GTcoKTLDRoj0a7hm876rCPb5ZIiE7Vun_R5tczVzXJcOs3Bp3Kr6eI4qEf30oRDxEA4nln8_8zOZSeCZcDFIfQmkkg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-headline text-3xl font-bold text-surface-container-lowest mb-2">Apparel</h3>
              <p className="font-body text-surface-container-low opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0">The core collection.</p>
            </div>
          </Link>
          <Link to="/" className="group relative rounded-xl overflow-hidden bg-surface-container-highest">
            <img alt="Accessories" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDibdPItfXgX-ecsKTpGTzyU3tSO_xxjuDilqwSk8FFIudvhdI1Jm4I6Ds7YaprSvtcAjVyP-Ld2knGXIKxMzzjVqN7Go2T0MmjfcCiI2kGZndXagF1DslOZ0L79qgflz_x12tlOPNdOanNn8r5mrfJvvrxlOUqde5jb69Z_0PR0q4AkHsTzhn3oefvyfeoD3am8P64bFHruZPcmUtw0bc8MEtENAFWoib57PZ9imPK32M6ngstT9a11PaNofbliM4V-LKPEphhmQ8"/>
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-headline text-2xl font-bold text-surface-container-lowest">Accessories</h3>
            </div>
          </Link>
          <Link to="/" className="group relative rounded-xl overflow-hidden bg-surface-container-highest">
            <img alt="Footwear" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV2ZjaH86GvJJLiVz65vsV2fRQ_MeE2gUyUKLRm2FAzk07QlTt2c_tnKr00MZPZNJ_aerhIDW_gH8mw6P0wQPqW07UFFWnXwGTbafo2O7HzJ3oEmP7iOjKx51refxiCexS74q80FX5bLawZj_72_qoUYP7a3fjGTAnQNrnAFlF5CNQVI7-YmeJt_ZdHVeyttiZyg_AOjyDE0uUbYvNFs1_SteTBSr1NWwPCm3SXkmbywBbTNKHrzVmR4jmLw9NJUixqEqvm7uOcW8"/>
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-headline text-2xl font-bold text-surface-container-lowest">Footwear</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-fixed-dim/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Featured Intelligence</h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">Items selected by our algorithm for their exceptional craftsmanship and current trend velocity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Obsidian Structure Bag", material: "Matte Leather", price: "$850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAavm4EsQTjCxBQvrQjjHKVfgPkCWLpw3GezWUAaHnfGRpC4wc61yJtBgIfHaDYSUt9N7NA_j6s_hpzZ2lL76d7s9PRdeO2quXOoJLlQd1sObTbmjMAcjpjtnaOdCFOj3t4VV6-Yye9HOoFBGbaS_KxBWOJOA1Gbec-EPbZFAAp4SLjSEoHJ7NiXxiUIx1i9w5JTVrDx4nvOKJrwroV3HULAddwEQzQmfQoQzNdpRFQhoz90zTY52jfwtqpVgmONsF5LHRRn32_Sa4", tag: "Trending" },
              { name: "Architectural Blazer", material: "Charcoal Wool Blend", price: "$1,200", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh5zqmCLh40Q98EXF66pZSQUUQRFdQIH1tCinz1cGyp_BjFSX607HCOLYZVDFT9Tgh29EObUz5osnlJ5qeNk2iTrGFJJ2tZWMfhXMmA7s4oi2s_0bHL9DNYhnYMrL0IrojnfwFugdZXPKI5ylMS09oSR2vEsouzpVBrrSvUixUQQYrsJ3FJzSIBTkhObq8f0ZuQRRGtTUHidnTYjA_wAHxF8gql828azh4iRjEJsyWjbI9UVJ3IF8yMdGOTMKr1XDxXVa66wYUFG4", mt: "md:mt-12" },
              { name: "Monolith Platform Boots", material: "Italian Calf Leather", price: "$950", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6CcM0kAgbQN9KHu1bXyXLW9-73j0BIvRKd69HWBGVtUYoMs-9XG8rRTfcFVXDI7I2gTmD9Zy-w83OkNt-sOFkuE_oa5fo3zHcKFA-UmsINGKnQkcSZjUY4rsrz2DGkH74DyxAaY4mJ2IRirK63PPICmI2PS8fnCMA6gHhp9ICaI6DBEbxMPsX9h_8Ooo8aysQUaXf-xadYFtGVTI5evUdlbh5LdaIm7W-XQDfTOPMmWkaj9kZhX3T5LWzJh7gIp0PykEnYl9LT0I", tag: "Low Stock", tagBg: "bg-surface-container-lowest text-on-surface" },
              { name: "Geo Stacking Rings", material: "Sterling Silver Set", price: "$320", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX8C3w3rz4wTrGpHHPGesyVQed7a_7x9iK_TWVAVy7bxHh9dD0z2jbOTW0PVIeN2ENAXOih75WiwOI4N0C8RB5T8rRoHW1blbjKqyPw1pwqIVFXpxRNaaIBUbDKRHGXU8nQ76Sw_OA1GjfVa6LTLdQ0xvPloS7J-lWGohStF87TIVKdfmGLccJpZ_yzMYM76QPsQEOjbPOz5t61_Y1Yl0QpaeVQUVm1ma6qNbo2dSY6piuQ6SW1vKrl2FJQaQpPc_b-QPSf_MblZo", mt: "md:mt-12" }
            ].map((product, i) => (
              <div key={i} className={`group flex flex-col bg-surface-container-lowest/70 backdrop-blur-xl rounded-xl p-4 shadow-[0_8px_32px_rgba(27,28,28,0.04)] transition-all hover:shadow-[0_16px_48px_rgba(27,28,28,0.08)] hover:-translate-y-1 ${product.mt || ''}`}>
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-surface-container-highest">
                  <img alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.img}/>
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <span className={`${product.tagBg || 'bg-tertiary-fixed text-on-tertiary-fixed'} font-label text-xs font-bold px-2 py-1 rounded shadow-sm`}>{product.tag}</span>
                    </div>
                  )}
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-lg font-bold text-on-surface mb-1">{product.name}</h3>
                    <p className="font-body text-sm text-on-surface-variant mb-3">{product.material}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-headline font-bold text-lg text-on-surface">{product.price}</span>
                    <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-[#004A99] hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 py-24 w-full">
        <div className="bg-[#282828] rounded-xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-xl">
            <span className="font-body text-secondary-fixed text-sm uppercase tracking-widest mb-4 block">Executive Briefing</span>
            <h2 className="font-headline text-4xl font-bold text-white mb-4">Curated insights, delivered directly.</h2>
            <p className="font-body text-stone-400 mb-8">Join the inner circle. Receive data-driven trend reports and exclusive access to limited-run collections.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto flex-grow max-w-md">
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input className="w-full bg-inverse-surface border-none rounded-lg py-4 pl-4 pr-12 text-white placeholder-stone-500 focus:ring-2 focus:ring-secondary-fixed transition-all font-body" placeholder="Enter your email address" type="email"/>
                <span className="material-symbols-outlined absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-500">mail</span>
              </div>
              <button className="cta-btn font-label uppercase tracking-wide py-4 rounded-lg font-bold hover:opacity-90 transition-opacity w-full" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default StorefrontHome;

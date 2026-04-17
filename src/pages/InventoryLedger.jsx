import { useState, useEffect } from 'react';
import { fetchProducts, addProduct } from '../api/firebase';

function InventoryLedger() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    setLoading(true);
    const data = await fetchProducts();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAddProduct = async () => {
    const newProduct = {
      name: 'New Premium Item ' + Math.floor(Math.random() * 1000),
      sku: 'SKU-' + Math.floor(Math.random() * 10000),
      category: 'Accessories',
      stock: Math.floor(Math.random() * 50),
      price: Math.floor(Math.random() * 500) + 50,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8lVnGt_KPt17AWqAR4oQCtgjgoCSmD4a6-Fl2VcooKjZXaQGb6u0E8KwGJXL8HQzta4AmHlJ8w2eEvYkb8KQqfHtfZT7jIj9GC0e1vwRrXeliKnPQAMJWT-Vr23CbZp39X8JbSyaXyvJLI9Pm2Wmbr0ff6BcoGhJOBnoTgrYM8SZo2aG5hEKprTJNCbnha9TvB3sNPEkABABvpXEfqI51g1RRVV_aMM8YM57BJaHdUe9babNewFbJkE2vIb-uVE4QZFU1P_3Oya0"
    };
    await addProduct(newProduct);
    loadProducts();
  };

  return (
    <div className="flex-1 overflow-y-auto pt-8 px-8 pb-12 w-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-2">Inventory Management</h2>
          <p className="font-body text-on-surface-variant text-sm">Real-time stock tracking and valuation for Luxe Ledger.</p>
        </div>
        <button 
          onClick={handleAddProduct}
          className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-sm uppercase tracking-[0.05em] px-6 py-3 rounded-md hover:shadow-lg transition-shadow flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Add Product
        </button>
      </div>

      {/* Bento Grid Layout for Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_20px_-5px_rgba(27,28,28,0.06)] border border-outline-variant/15 flex flex-col justify-between h-40">
          <p className="font-body text-sm font-medium text-on-surface-variant">Total Valuation</p>
          <div className="bg-surface-container-highest self-start px-4 py-2 rounded-lg mt-auto">
            <p className="font-headline text-2xl font-extrabold text-on-surface">$1.24M</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_20px_-5px_rgba(27,28,28,0.06)] border border-outline-variant/15 flex flex-col justify-between h-40">
          <p className="font-body text-sm font-medium text-on-surface-variant">Low Stock Alerts</p>
          <div className="bg-surface-container-highest self-start px-4 py-2 rounded-lg mt-auto flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">warning</span>
            <p className="font-headline text-2xl font-extrabold text-on-surface">14</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_20px_-5px_rgba(27,28,28,0.06)] border border-outline-variant/15 flex flex-col justify-between h-40 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
          <p className="font-body text-sm font-medium text-on-surface-variant relative z-10">Inventory Turn Rate</p>
          <div className="bg-surface-container-highest self-start px-4 py-2 rounded-lg mt-auto relative z-10">
            <p className="font-headline text-2xl font-extrabold text-on-surface">4.2x</p>
          </div>
        </div>
      </div>

      {/* Data Grid */}
      <div className="bg-surface-container-low rounded-xl overflow-hidden">
        <div className="px-6 py-5 flex justify-between items-center bg-surface-container-lowest">
          <h3 className="font-headline font-semibold text-lg text-on-surface">Active Products</h3>
          <div className="flex gap-2">
            <button className="p-2 text-outline hover:text-on-surface transition-colors rounded-md hover:bg-surface-container-high"><span className="material-symbols-outlined">filter_list</span></button>
            <button className="p-2 text-outline hover:text-on-surface transition-colors rounded-md hover:bg-surface-container-high"><span className="material-symbols-outlined">more_vert</span></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center text-on-surface-variant">Loading inventory...</div>
          ) : (
            <table className="w-full text-left font-body text-sm">
              <thead className="text-on-surface-variant font-medium bg-surface-container-low border-b border-surface-variant">
                <tr>
                  <th className="py-4 px-6">Product</th>
                  <th className="py-4 px-6">SKU</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Stock Level</th>
                  <th className="py-4 px-6 text-right">Unit Price</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-transparent">
                {products.map((product) => (
                  <tr key={product.id} className="bg-surface-container-low hover:bg-surface-container-lowest transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-surface-variant flex-shrink-0 overflow-hidden">
                          <img alt="Product" className="w-full h-full object-cover" src={product.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuBxJY2KvdG4lAGu1kZbsDdEPfT0_ZaxniabM9NjQxvBSRfPWvBMJrnLyCqOGgKGdYy6g4AO42trSsdzIKCn_-tmgIyG38txsvAD-S22PHcRJ5r9exyN0pYpSOhGDbjLiOzk0hjxvqOCygDiYa5pPYhYzrp6q8dZgkaCYrngwL5DkChoV-BzPV2BRjM3yjb95x2U90pWZVsNxCTsnY8hdEqNdJTzhygQxgzesJbxGV3L3dzWoq_M_tPIrQqAwAwbQ65EIF6oI7sXXpM"}/>
                        </div>
                        <span className="font-medium text-on-surface">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-on-surface-variant">{product.sku || product.id.slice(0, 8)}</td>
                    <td className="py-4 px-6 text-on-surface-variant">{product.category || 'General'}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.stock > 10 ? 'bg-[#e6f4ea] text-[#137333]' : 'bg-tertiary-fixed text-on-tertiary-fixed'}`}>
                        {product.stock > 10 ? `In Stock (${product.stock})` : `Low Stock (${product.stock})`}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-medium text-on-surface">${product.price?.toFixed(2)}</td>
                    <td className="py-4 px-6 text-center">
                      <button className="text-outline opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"><span className="material-symbols-outlined text-sm">edit</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default InventoryLedger;

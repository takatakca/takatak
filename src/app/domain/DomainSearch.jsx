import Script from 'next/script';

export default function DomainPage() {
  return (
    <div>
      <div id="upmind-domain-checker"></div>

      <Script
        src="https://cdn.upmind.com/domain-widget.js"
        strategy="afterInteractive"
        data-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
      />
    </div>
  );
}

// 'use client';
// import { useState, useEffect } from 'react';

// export default function DomainSearch() {
//   const [domain, setDomain] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Load Upmind script
//     const script = document.createElement('script');
//     script.src = 'https://widgets.upmind.app/dac/upm-dac.min.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!domain) return;
    
//     setIsLoading(true);
    
//     // Trigger Upmind's search
//     if (window.UpmindDAC) {
//       window.UpmindDAC.search(domain);
//     }
    
//     // Fallback in case widget doesn't load
//     setTimeout(() => {
//       window.location.href = `https://fimjpyw0mnzy.upmind.app/domain/register?domain=${encodeURIComponent(domain)}`;
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="domain-search-container">
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           value={domain}
//           onChange={(e) => setDomain(e.target.value)}
//           placeholder="Enter your domain name..."
//           className="search-input"
//           required
//         />
//         <button 
//           type="submit" 
//           className="search-button"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Searching...' : 'Search'}
//         </button>
//       </form>

//       {/* Upmind Widget Container */}
//       <div 
//         id="upmind-dac"
//         data-store="fimjpyw0mnzy"
//         data-theme="light"
//         data-redirect="true"
//         data-style="modern"
//         className="mt-4"
//       />
//     </div>
//   );
// }



// 'use client';
// import { useEffect } from 'react';

// export default function DomainSearch() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://widgets.upmind.app/dac/upm-dac.min.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="domain-search-container">
//       <upm-dac
//         order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
        
//         // this was commented because i have try it and it did'nt work
//         // order-config-url="https://takatak.ca/order/product"
//         currency-code="USD"
//       ></upm-dac>
//     </div>
//   );
// }

// 'use client';
// import { useEffect } from 'react';

// export default function DomainSearch() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://widgets.upmind.app/dac/upm-dac.min.js';
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="domain-search-container">
//       <upm-dac
//         order-config-url="https://fimjpyw0mnzy.upmind.app/order/product"
//         currency-code="USD"
//       ></upm-dac>
//     </div>
//   );
// }

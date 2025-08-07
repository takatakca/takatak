
// 'use client';
// import { useEffect } from "react";
// import Script from 'next/script';

// export default function UpmindDAC() {


// useEffect(() => {
//   // 1. Creates a new <script> HTML element
//   const script = document.createElement('script');
  
//   // 2. Sets the source to Upmind's DAC widget JS
//   script.src = 'https://widgets.upmind.app/dac/upm-dac.min.js';
  
//   // 3. Makes it load asynchronously (doesn't block page)
//   script.async = true;
  
//   // 4. Adds it to the document body
//   document.body.appendChild(script);

//   // 5. Cleanup: removes script when component unmounts
//   return () => {
//     document.body.removeChild(script);
//   }
// }, []); // Empty dependency array = runs once on mount

//   return (
//     <div id="upmind-dac" 
//       data-store="fimjpyw0mnzy"
//       data-theme="light"
//       data-redirect="true"
//       data-style="mochahost">
//     </div>
//   )
// }
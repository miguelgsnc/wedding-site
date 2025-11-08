import React from 'react';
import "./WeddingGifts.css";
const WeddingGifts = () => {
  return (
    <section
      id="gifts"
      className="gifts-section flex flex-col justify-center text-center px-6 py-20"
    >
      <div className="content max-w-5xl mx-auto p-8">
        <h2 className="text-4xl md:text-5xl font-calisto mb-10">A Note on Gifts</h2>
      <p className="mb-6 max-w-xl font-dubai-reg mx-auto">
        Your presence at our wedding is the greatest gift of all! However, if you
        wish to honor us with a gift, we would greatly appreciate it.
        <br/>
        
      </p>
      <p className="border border-gray-700 p-4 rounded-md font-dubai text-sm inline-block mb-2 select-all">
        BDO Account Number (PHP) <br/> 000-8704-253-74 <br/> Maria Tiza Bual
      </p>
      <p className="border border-gray-700 p-4 rounded-md font-dubai text-sm inline-block mb-2 select-all">
        BBVA Account Number (EUR) <br/> ES19-0182-5584-2402-0853-9610 <br/> Miguel Garcia San Nicolas Cantero
      </p>
      <p className="border border-gray-700 p-4 rounded-md font-dubai text-sm inline-block mb-2 select-all">
        ENBD Account Number (AED) <br/> AE35-0260-0010-1579-8752-301 <br/> Miguel Garcia San Nicolas Cantero
      </p>
      <p className="border border-gray-700 p-4 rounded-md font-dubai text-sm inline-block mb-2 select-all">
        Metamask wallet (USDC) <br/> 
      </p>
      </div>
    </section>
  );
};

export default WeddingGifts;

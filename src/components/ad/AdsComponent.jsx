import React, { useEffect } from 'react';


const AdComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6917584905087010";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div>
      <h1>Your Component</h1>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-6917584905087010"
           data-ad-slot="5210798455"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};
export default AdComponent;
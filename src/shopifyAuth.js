// ShopifyAuth.js
import ShopifyBuy from 'shopify-buy';

const SHOPIFY_API_KEY = '26d81bfb6f92dac83304496e302d0186';
const SHOPIFY_DOMAIN = 'c1haze.myshopify.com';

const shopifyClient = ShopifyBuy.buildClient({
  domain: `${SHOPIFY_DOMAIN}`,
  storefrontAccessToken: `${SHOPIFY_API_KEY}`,
});

export const redirectToShopify = () => {
  window.location.href = `https://${SHOPIFY_DOMAIN}/admin/oauth/authorize?client_id=${SHOPIFY_API_KEY}&scope=read_products,write_products,read_customers&redirect_uri=http://localhost:3000/`;
};

export const completeShopifyAuth = async (setShopifyData) => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
  
    if (code) {
      // The user has returned from Shopify authentication
      const response = await fetch('http://localhost:3001/auth/shopify/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
  
      const data = await response.json();
  
      // Handle the data as needed (e.g., store the token in localStorage)
      console.log('Shopify authentication successful:', data);

      setShopifyData(data);
  
      // Clear the query parameters from the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

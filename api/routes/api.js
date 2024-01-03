const express = require('express');
const router = express.Router();
const _ = require('lodash');
const axios = require("axios");
const {canAccess, routeWrapper} = require('./apiutils');

/* by default local */
const SHOPIFY_API_KEY = _.get(process.env, "SHOPIFY_API_KEY", "26d81bfb6f92dac83304496e302d0186");
const SHOPIFY_API_SECRET = _.get(process.env, "SHOPIFY_API_SECRET", "24eb4b2028de8f5445e6c4505ef45f17");
const SHOPIFY_DOMAIN = _.get(process.env, "SHOPIFY_DOMAIN", "c1haze.myshopify.com");
const SHOPIFY_ACCESS_TOKEN = _.get(process.env, "SHOPIFY_ACCESS_TOKEN", "shpua_9631e1d8dd61351154a788fca74b1592");

module.exports = function () {
    router.post('/authshopcallback', async function(req,res){
        res.send("hello word");
       /* const { code } = req.body;
        const tokenResponse = await fetch(
          `https://${SHOPIFY_DOMAIN}/admin/oauth/access_token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              client_id: SHOPIFY_API_KEY,
              client_secret: SHOPIFY_API_SECRET,
              code,
            }),
          }
        );
        const { access_token } = await tokenResponse.json();
        console.log(access_token);
        res.json({ access_token:access_token,success: true });*/
    });

    router.get('/getShopifyProducts', async function(req,res){
        res.send("hello sad");
       /* try {
            const response = await axios.get(
              `https://${SHOPIFY_DOMAIN}/admin/api/2022-01/products.json`,
              {
                headers: {
                  "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
                },
              }
            );
            res.json(response.data);
          } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).send("Internal Server Error");
          }*/
    });
}
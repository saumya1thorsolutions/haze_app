const express = require("express"); // imports express js framework
const cfg = require("dotenv"); // imports dotenv library
cfg.config();
const _ = require("lodash"); // library
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressFileupload = require("express-fileupload");
const path = require("path");
const axios = require("axios");
const app = express();
const middlewares = [
  express.static(path.join(__dirname, "public")),
  express.urlencoded({ limit: "250mb", extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: "250mb" }),
  bodyParser.urlencoded({
    limit: "250mb",
    extended: true,
    parameterLimit: 50000,
  }),
  expressFileupload({
    createParentPath: true,
  }),
  cookieParser(),
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
];
app.use(middlewares);

const port = _.get(process.env, "PORT", 3000);
app.listen(port, () => {
  console.log(`Your app is running on ${port}.`);
});

const SHOPIFY_API_KEY = "26d81bfb6f92dac83304496e302d0186";
const SHOPIFY_API_SECRET = "24eb4b2028de8f5445e6c4505ef45f17";
const SHOPIFY_DOMAIN = "c1haze.myshopify.com";

app.post("/auth/shopify/callback", async (req, res) => {
  const { code } = req.body;

  // Exchange the code for an access token
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

  // Fetch customers from Shopify using the access token
  const customersResponse = await fetch(
    `https://${SHOPIFY_DOMAIN}/admin/api/2021-10/customers.json`,
    {
      headers: {
        "X-Shopify-Access-Token": access_token,
      },
    }
  );

  const customers = await customersResponse.json();

  console.log(customers.customers);

  // Do something with the customers data (e.g., validate against your own user database)

  res.json({ data:customers,success: true });
});

app.get("/getShopifyProducts", async (req, res) => {
  try {
    const response = await axios.get(
      "https://c1haze.myshopify.com/admin/api/2022-01/products.json",
      {
        headers: {
          "X-Shopify-Access-Token": "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",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

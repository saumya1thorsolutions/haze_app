const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const _ = require("lodash");

const canAccess = (req) => {
  return new Promise((resolve, reject) => {
    try {
      if (!_.get(req, "headers.X-Shopify-Access-Token", false)) throw "No access token found!";

      let apikey = req.header("X-Shopify-Access-Token");
      isValid = bcrypt.compareSync(process.env.JWTSECRET, apikey);
      if (isValid) {
        resolve();
      } else {
        throw "Invalid API Key!";
      }
    } catch (e) {
      reject(e);
    }
  });
};

const routeWrapper = (req, res, mustVerify, primFunc, sendToken = false) => {
  canAccess(req)
    .then(() => {
      const token = verifyToken(req, true);
      if (mustVerify) {
        if (!token["success"]) {
          throw token["message"];
        }
      }
      return primFunc(mustVerify || sendToken ? token : false);
    })
    .catch(handleError)
    .then((obj) => res.json(obj));
};

module.exports = {
  canAccess,
  routeWrapper,
};

require('dotenv').config();

module.exports = {
    Number: process.env.OWNER_NUMBER || "22650209596",
        PairCode: process.env.PAIR_CODE === "true"
        };
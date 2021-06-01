const venom = require('venom-bot');
var _ = require('lodash');
const axios = require('axios');
const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log(err));

var stealCooldown = String(new Date());

var begCooldown = String(new Date());

const moneySchema = {
    name: String,
    money: Number,
    saving: Number,
    daily: String
};

const moneyhead = {
    lottery: String
};

const Money = mongoose.model("moneys", moneySchema);

const head = mongoose.model("moneyhead", moneyhead);


setInterval(function() {


    Money.updateMany({ saving: { $gte: 100000 } }, {
        $mul: {
            'saving': 0.92
        }

    }, function(err, res) {
        console.log("5% DEDUCTED!!");
    });
    Money.updateMany({ saving: { $lt: 100000 } }, {
        $mul: {
            'saving': 0.98
        }
    }, function(err, res) {
        console.log("2% DEDUCTED!!");
    });
}, 10 * 60 * 1000);
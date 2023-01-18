/* eslint-disable */

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51LLs9zSEVb6SftLlGvh0RKtT9TrtGnLmqgtnVuEp6u7SPImtLmx8HgSp3kDuaiCJ1FHWlx6EmOvBLAG0lbYnRkRQ00stTx2APn')


// API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API routes

app.post('/payments/create', async (request, response) => {
    const total=request.query.total;

    console.log("Payment request recieved", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,    
    });
});

// Listen command
exports.api = functions.https.onRequest(app);
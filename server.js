// sk_test_51OuD2h2KJl9g1FEjlyBwdXAd6NPrDrWICKHedKVnss6yfo5U4Xo3Yh3XhYKbhaJxv28UXQUbx5igkMxMSEc0TbY200w5uzQewa
// price_1OuFCM2KJl9g1FEjPjZkf8mN
// price_1OuFH22KJl9g1FEjj3BxmR9Q
// price_1OuFP72KJl9g1FEj19IeI2z3
// price_1OuFSu2KJl9g1FEj8veuvNVm
// price_1OuFUu2KJl9g1FEjdfKJn9c0
// price_1OuFc92KJl9g1FEj4tFz4t2W
// price_1OuFda2KJl9g1FEjTXhPSOs0
// price_1OuHao2KJl9g1FEjtAZDM2Mr
// price_1OuIMb2KJl9g1FEjtjwGHGwi
// price_1OuIOw2KJl9g1FEjH10GqORi
// price_1OuISM2KJl9g1FEjaHctPq0I
// price_1OuIUA2KJl9g1FEjCkZYMJm8

// pk_test_51OuD2h2KJl9g1FEjYT0cPxOcdkIExNZ6sAVXjGZHsJqo69jR9P1BSdDCPe17JgU80BWRV38UOdBzO1JDDpt2Cd5L00JRonKjgJ


// const express = require('express');
// var cors = require('cors')
// // const { v4: uuidv4 } = require('uuid');
// const stripe = require('stripe')('sk_test_51OuD2h2KJl9g1FEjlyBwdXAd6NPrDrWICKHedKVnss6yfo5U4Xo3Yh3XhYKbhaJxv28UXQUbx5igkMxMSEc0TbY200w5uzQewa');

// const app = express();
// app.use(cors());
// // app.use(express.static("public"))
// app.use(express.json());

// app.post('/checkout', async (req, res) => {
//     console.log(req.body);
//     const items = req.body.items;
//     let lineItems = [];
//     items.forEach((item) => {
//         lineItems.push({
//             price :item.price,
//             quantity: item.stock
//         }
//     )
//     })
// //   const { lineItems } = req.body;

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: lineItems,
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success',
//     cancel_url: 'http://localhost:3000/cancel',
//   });

// //   res.json({ id: session.id });

// res.send(JSON.stringify({
//     url:session.url
// }));
// });

// app.listen(4000, () => {
//   console.log('Server running on port 4000');
// });


// const express = require('express');
// const stripe = require('stripe')('sk_test_51OuD2h2KJl9g1FEjlyBwdXAd6NPrDrWICKHedKVnss6yfo5U4Xo3Yh3XhYKbhaJxv28UXQUbx5igkMxMSEc0TbY200w5uzQewa');

// const app = express();
// app.use(express.json());

// // Create a checkout session
// app.post('/create-checkout-session', async (req, res) => {
//   const { items } = req.body;

//   // Calculate total price
//   const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

//   // Create a Stripe Checkout session
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: items.map(item => ({
//       price_data: {
//         currency: 'usd',
//         product_data: {
//           name: item.title,
//         },
//         unit_amount: item.price * 100, // Stripe uses cents
//       },
//       quantity: item.quantity,
//     })),
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success', // Redirect to this URL after successful payment
//     cancel_url: 'http://localhost:3000/cancel', // Redirect to this URL if payment is cancelled
//   });

//   res.json({ id: session.id });
// });

// // Start the server
// app.listen(4000, () => console.log('Server running on port 4000'));



const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(' sk_test_51OuD2h2KJl9g1FEjlyBwdXAd6NPrDrWICKHedKVnss6yfo5U4Xo3Yh3XhYKbhaJxv28UXQUbx5igkMxMSEc0TbY200w5uzQewa');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const lineItems = items.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.title,
      },
      unit_amount: item.price * 100, // Amount is in cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({ id: session.id });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

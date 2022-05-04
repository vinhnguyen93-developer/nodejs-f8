const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://VinhNguyen:Thienkim1991@vinhnguyen.qqlpq.mongodb.net/f8Shop?retryWrites=true&w=majority'
    );
    console.log('Connect successfully!');
  } catch (error) {
    console.log('Connect failed!');
    console.log(error);
  }
}

module.exports = { connect };

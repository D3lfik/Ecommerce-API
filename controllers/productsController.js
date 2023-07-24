const Product = require('../models/productModel');

// function to show all the products
module.exports.products = async function (req, res) {
  try {
    const foundProducts = await Product.find({});
    res.send(foundProducts);
  } catch (err) {
    res.send(err);
  }
}

// function to create a new product
module.exports.create = async function (req, res) {
  console.log(req.body)
  const newProduct = new Product({
    name: req.body.name,
    quantity: req.body.quantity
  });
  try {
    console.log(newProduct);
    await newProduct.save();
    res.send('New product added successfully.');
  } catch (err) {
    res.send(err);
  }
}

// function to delete a product using its ID
module.exports.delete = async function (req, res) {
  try {
    await Product.deleteOne({ _id: req.params.productID });
    res.send({
      message: "Product deleted"
    });
  } catch (err) {
    res.send(err);
  }
}

// function to update a product's quantity
module.exports.updateQuantity = async function (req, res) {
  const ID = req.params.productID;
  try {
    // find the product using id
    const found = await Product.findById(ID);
    if (!found) {
      return res.send("Product not found.");
    }

    // Note - To increment the quantity of the product put the number as a positive value in the query
    //        and to decrement the quantity put the number as a negative value in the query

    const newQty = parseInt(found.quantity) + parseInt(req.query.number);
    // update the product's quantity
    const updatedProduct = await Product.findByIdAndUpdate(ID, { quantity: newQty });
    updatedProduct.quantity = newQty;
    res.send({
      product: updatedProduct,
      message: 'Updated successfully'
    });
  } catch (err) {
    res.send(err);
  }
}

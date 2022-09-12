const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const products = require('../data/products.json');

// GET endpoint all products
exports.getProducts = (req, res) => {
  try {
    if (products) {
      res.status(200).json(
        products.map((product) => ({
          id: product.id,
          category: product.category,
          price: product.price,
          discount: product.discount,
          colour: product.colour,
          size: product.size,
          description: product.description,
          specifications: product.specifications,
          styleCode: product.styleCode,
          images: product.images,
          comments: product.comments,
        }))
      );
    }
  } catch (error) {
    console.log(error);
  }
};

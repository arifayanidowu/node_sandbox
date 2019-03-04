const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      products,
      title: "Shop",
      path: `${req.url}`
    });
  });
};

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      products,
      title: "Products",
      path: `${req.url}`
    });
  });
};

exports.getProduct = (req, res) => {
  const { id } = req.params;
  Product.findById(id, product => {
    res.render("shop/product-detail", {
      title: product.title,
      product,
      path: "/products"
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    title: "Cart",
    path: `${req.url}`
  });
};

exports.postCart = (req, res) => {
  const { productId } = req.body;
  console.log(productId);
  res.redirect("/cart");
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    title: "checkout",
    path: `${req.url}`
  });
};
exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    title: "Your Orders",
    path: `${req.url}`
  });
};

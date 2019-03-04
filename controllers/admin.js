const Product = require("../models/Product");

exports.getAddProducts = (req, res) => {
  res.render("admin/add-product", {
    title: "Add Product",
    path: `/admin${req.url}`
  });
};

exports.postAddProduct = (req, res) => {
  const { title, imageUrl, description, price } = req.body;
  if (title === "" && imageUrl === "" && description === "" && price === "") {
    res.redirect("back");
    return;
  }
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render("admin/products", {
      products,
      title: "Admin Products",
      path: `/admin${req.url}`
    });
  });
};

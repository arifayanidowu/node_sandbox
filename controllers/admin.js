const Product = require("../models/Product");

exports.getAddProducts = (req, res) => {
  res.render("admin/edit-product", {
    title: "Add Product",
    path: `/admin${req.url}`,
    editing: false
  });
};

exports.postAddProduct = (req, res) => {
  const { title, imageUrl, description, price } = req.body;
  if (title === "" && imageUrl === "" && description === "" && price === "") {
    res.redirect("back");
    return;
  }
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const { id } = req.params;
  Product.findById(id, product => {
    if (!product) {
      return res.redirect("back");
    }
    res.render("admin/edit-product", {
      title: "Edit Product",
      path: `/admin/edit-product`,
      editing: editMode,
      product
    });
  });
};

exports.postEditProduct = (req, res) => {
  const { productId, title, imageUrl, description, price } = req.body;
  const updatedProduct = new Product(
    productId,
    title,
    imageUrl,
    description,
    price
  );
  updatedProduct.save();
  res.redirect("/admin/products");
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

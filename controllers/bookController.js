import product from "../models/product.js";
import Product from "../models/product.js";

const bookController = {
  addProduct: (req, res) => {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      images: req.body.images,
    });
    product.save();
    return res.status(200).json({
      data: {},
      status: true,
    });
  },
  getProduct: async (req, res) => {
    const product = await Product.find();
    return res.status(200).json({
      data: product,
      status: true,
    });
  },

  getProductDetails: async (req, res) => {
    const product = await Product.findById(req.params.id);
    return res.status(200).json({
      data: product,
      status: true,
    });
  },
  getAdminProduct: async (req, res) => {
    const product = await Product.find();
    return res.status(200).json({
      data: product,
      status: true,
    });
  },

  updateProduct: async (req, res) => {
    const update = await Product.findById(req.params.id);
    if (!update) {
      return res.status(400).json({
        message: "loi~",
      });
    }

    const dataUpdate = await Product.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({
      data: dataUpdate,
      message: "update thanh cong",
      status: true,
    });
  },
  deleteProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      const comment = await Product.findById(id);

      if (!comment) {
        return res.error(res, "Not Found", 404);
      }

      await Product.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        data: {},
        message: "Xóa bài post thành công!",
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  },

  getProductLike: async (req, res) => {
    const search = await Product.find({
      name: { $regex: ".*" + req.params.keyword + ".*" , $options: "i"},
    });

    if (!search) {
      return res.status(500).json({
        message: "not found",
      });
    }
    return res.status(200).json({
      data: search,
      message: "...",
      status: true,
    });
  },
};

export default bookController;

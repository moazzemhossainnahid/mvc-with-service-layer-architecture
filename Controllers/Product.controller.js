const { getProductsService, createProductService } = require("../Services/Product.service");

exports.getProducts = async (req, res, next) => {
    try {
        // Operators
        // =============================================================================================
        // =============================================================================================
        const products = await getProductsService();

        // ==========================
        // Get by ID
        // ==========================
        // const products = await Product.find({ _id: "636a67aa073826aede164c52" });

        // ==========================
        // Or operator
        // ==========================
        // const products = await Product.find({$or: [{ _id: "636a67aa073826aede164c52" }, {name: "Rice"}]});

        // ==========================
        // Not Equal
        // ==========================
        // const products = await Product.find({ status: { $ne: "out-of-stock" } });

        // ==========================
        // Greter than Equal
        // ==========================
        // const products = await Product.find({ quantity: { $gte: 100 } });

        // ==========================
        // in Operator
        // ==========================
        // const products = await Product.find({ name: { $in: ["Rice", "Soyabin Oil"] } });

        // =============================================================================================
        // =============================================================================================

        // Projection
        // const products = await Product.find({}, "name quantity price");
        // const products = await Product.find({}, "-name -quantity");

        // sorting
        // const products = await Product.find({}).sort({ quantity: 1 });
        // const products = await Product.find({}).sort({ quantity: -1 });

        // selete
        // const products = await Product.find({}).select({ name: 1 });

        // chaining
        /*         const products = await (await Product
                    .where("name").equals(/\w/)
                    .where("quantity").gt(100).lt(600)
                    .limit(2).sort({quantity: -1})); */

        // find by id
        // const product = await Product.findById("636a5f04929eb7c6250c49b8");

        // others
        /*         const product = await Product.findById(undefined);
                const product = await Product.findById(_undefined); */



        res.status(200).json({
            status: "success",
            message: "Data Get Successfull",
            data: products
        });

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't Get Data",
            error: error.message
        });
    };
};



exports.createProduct = async (req, res, next) => {
    try {
        // save or create


        /*         // save
                const product = new Product(req.body);
        
                // Instance Creation => Do Something => Save()
        
                if (product.quantity === 0) {
                    product.status = "out-of-stock"
                }
                const result = await product.save(); */

        // create
        const result = await createProductService(req.body);

        result.logger();


        res.status(200).json({
            status: "success",
            message: "Data Inserted Successfull.",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Data isn't Inserted",
            error: error.message
        })
    };
};
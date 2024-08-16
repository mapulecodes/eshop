import { connection as db } from "./config/index.js"

class Products {
  fetchProducts(req, res) {
    try {
      const strQry = `
                SELECT productID, prodName , category, prodDescription, prodURL , amount
                FROM Products;
                `
      db.query(strQry, (err, results) => {
        if (err) throw new Error("unable to retrieve recent product");
        res.json({
          status: res.statusCode,
          results,
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }

  recentProducts(req, res) {
    try {
      const strQry = `
        select productID, prodName, category, prodDescription, prodURL, amount
        FROM Products
        ORDER BY productID DESC
        LIMIT 5;
        `;
      db.query(strQry, (err, results) => {
        if (err) throw new Error(`Issue retrieving recent Product.`);
        res.json({
          status: res.statusCode,
          results: results[0],
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      })
    }}

  fetchProduct(req, res) { 
    try{
       const strQry = `
                SELECT productID, prodName , category, prodDescription, prodURL , amount
                FROM Products;
                ORDER BY productID DESC
                LIMIT 5;
                `
                db.query(strQry, (err, result) => {
                    if (err) throw new Error('unable to retrieve recent product')
                        res.json({
                            status: res.statusCode,
                            result: result[0],
                        });
                    });
                } catch (e) {
                    res.json({
                      status: 404,
                      msg: e.message,
                    });
               
    }
  }
  addProduct(req, res) {
            try {
              let strQry = `
                INSERT INTO Products
                  SET ?
                  `;
              db.query(strQry, [req,body], (err) => {
                if (err) throw new Error("Unable to add a new Product");{
                  res.json({
                    status: res.statusCode,
                    msg: "Product was added successfully",
                  });
                }
              });
            } catch (e) {
              res.json({
                status: 404,
                msg: e.message,
              });
            }
          }
  updateProduct(req, res) {
    try {
      const strQry = `
            UPDATE Products
            SET ?
            WHERE productID = ${req.params.id}
            `;
      db.query(strQry, [req.body], (err) => {
        if (err) throw new Error("Unable to update a product");
        res.json({
          status: res.statusCode,
          msg: "The product was updated.",
        })
      })
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }
  deleteProduct(req, res) {
    try {
      const strQry = `
            DELETE FROM Products
            WHERE productID = ${req.params.id};
            `
      db.query(strQry, (err) => {
        if (err)
          throw new Error(
            "unable to delete a product.")

        res.json({
          status: res.statusCode,
          msg: "A product was removed.",
        })
      })
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      })
    }
  }
}
export { 
  Products
};

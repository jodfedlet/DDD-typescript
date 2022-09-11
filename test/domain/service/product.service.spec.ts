import Product from "../../../src/domain/entity/product";
import ProductService from "../../../src/domain/service/product.service";

describe("Product service unit test", () => {
  it("It should change the price of all products", () => {
    const product1 = new Product("prod1", "Product 1", 10);
    const product2 = new Product("prod2", "Product 2", 20);

    const prods = [product1, product2];

    ProductService.increasePrice(prods, 100);
    expect(product1.price).toBe(20);
    expect(product2.price).toBe(40);
  });
});

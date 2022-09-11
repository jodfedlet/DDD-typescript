import Product from "../../src/entity/product";

describe("Product unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("Should throw error when name is empty", () => {
    expect(() => {
      new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  it("Should throw error when name is empty", () => {
    expect(() => {
      new Product("123", "Product 1", 0);
    }).toThrowError("Price is required and must be greater than 0");
  });

  it("Should change the name", () => {
    let product = new Product("123", "Product 1", 10);
    const name = "Product 1 updated";
    product.changeName(name);
    expect(product.name).toBe(name);
  });

  it("Should change the price", () => {
    let product = new Product("123", "Product 1", 10);
    const price = 150;
    product.changePrice(price);
    expect(product.price).toBe(price);
  });
});

import Order from "../../src/entity/order";
import OrderItem from "../../src/entity/orderItem";

describe("Order unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("Should throw error when CustomerId is empty", () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("Should throw error when items are empty", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrowError("Items are required");
  });

  it("Should calculate the total", () => {
    const item1 = new OrderItem("i1", "Item 1", 100);
    const item2 = new OrderItem("i2", "Item 2", 50);
    const order = new Order("o1", "c1", [item1]);

    let total = order.total();
    expect(total).toBe(100);

    const order2 = new Order("o1", "c1", [item1, item2]);
    total = order2.total();
    expect(total).toBe(150);
  });
});

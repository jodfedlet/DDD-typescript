import Order from "../../../src/domain/entity/order";
import OrderItem from "../../../src/domain/entity/orderItem";

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
    const item1 = new OrderItem("i1", "Item 1", 100, "p1", 2);
    const item2 = new OrderItem("i2", "Item 2", 50, "p2", 2);
    const order = new Order("o1", "c1", [item1]);

    let total = order.total();
    expect(total).toBe(200);

    const order2 = new Order("o1", "c1", [item1, item2]);
    total = order2.total();
    expect(total).toBe(300);
  });

  it("Should throw error if the item quantity is less or equal 0", () => {
    expect(() => {
      const item1 = new OrderItem("i1", "Item 1", 100, "p1", 0);
      new Order("o1", "c1", [item1]);
    }).toThrowError("Quantity must be greater than 0");
  });
});

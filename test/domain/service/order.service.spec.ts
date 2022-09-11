import OrderItem from "../../../src/domain/entity/orderItem";
import Order from "../../../src/domain/entity/order";
import OrderService from "../../../src/domain/service/order.service";
import Customer from "../../../src/domain/entity/customer";

describe("Order service unit test", () => {
  it("It should get total of all orders", () => {
    const item1 = new OrderItem("i1", "Item 1", 100, "p1", 1);
    const item2 = new OrderItem("i2", "Item 2", 200, "p2", 2);

    const order = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c2", [item2]);

    const total = OrderService.total([order, order2]);
    expect(total).toBe(500);
  });

  it("should place an order", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);

    const order = OrderService.placeOrder(customer, [item1]);
    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });
});

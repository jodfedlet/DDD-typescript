import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

let customer = new Customer("123", "Jod F Pierre");
customer.address = new Address("Rua X", 123, "123456", "City X");
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 10);
const item2 = new OrderItem("2", "Item 2", 15, "p2", 15);
const order = new Order("1", "123", [item1, item2]);

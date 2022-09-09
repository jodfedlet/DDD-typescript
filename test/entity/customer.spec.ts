import Address from "../../src/entity/address";
import Customer from "../../src/entity/customer";

describe("Customer unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "John Doe");
    }).toThrowError("Id is required");
  });

  it("Should throw error when name is empty", () => {
    expect(() => {
      new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("Should change the name", () => {
    const customer = new Customer("123", "John Doe");
    const newName = "John Peter";
    customer.changeName(newName);
    expect(customer.name).toBe(newName);
  });

  it("Should activate customer", () => {
    const customer = new Customer("123", "John Doe");
    customer.address = new Address("Rua X", 123, "123456", "City X");
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it("Should handle error when activate customer without address", () => {
    expect(() => {
      const customer = new Customer("123", "John Doe");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });
});

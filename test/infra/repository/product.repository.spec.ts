import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../../src/infrastructure/db/sequelize/model/product.model";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ProductModel]);

    afterEach(async () => {
      await sequelize.close();
    });
  });
});

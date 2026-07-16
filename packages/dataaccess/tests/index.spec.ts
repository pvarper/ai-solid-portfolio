import * as dataaccess from "../src/index";

describe("dataaccess package entry point", () => {
  it("loads without throwing", () => {
    expect(dataaccess).toBeDefined();
  });
});

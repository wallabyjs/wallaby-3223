import { JSONLoader } from "./JSONLoader.js";

it('should work', async () => {
  let json = await JSONLoader.load("./sample.json");
  console.log(json);
})
import orderByProps from "../src/object_properties";

test('orderByProps sorts object properties correctly', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ["name", "level"];

  const sortedArray = orderByProps(obj, order);
  const expectedArray = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];
  
  expect(sortedArray).toEqual(expectedArray);
  
});

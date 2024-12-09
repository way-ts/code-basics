import authorize from "../src/11_системаМодулей";

test('function', () => {
  expect(authorize({ email: 'test@hexlet.io' })).toBe(true);
  expect(authorize({ email: 'hexlet.io@example.com' })).toBe(false);
  expect(authorize({ email: 'test@example.com' })).toBe(false);
  expect(authorize(null)).toBe(false);
});
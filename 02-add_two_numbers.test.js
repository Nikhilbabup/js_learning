const { addTwoNumbers, ListNode } = require("./02-add_two_numbers.js");

test("should return [7,0,8] for [2,4,3] and [5,6,4]", () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const result = addTwoNumbers(l1, l2);
  const expected = new ListNode(7, new ListNode(0, new ListNode(8)));
  expect(result).toEqual(expected);
});

var addTwoNumbers = function (l1, l2) {
  const ansroot = new ListNode();
  let current = ansroot;
  let remainder = 0;

  while (l1 || l2 || remainder) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + remainder;
    current.val = sum % 10;
    remainder = sum < 10 ? 0 : 1;
    l1 = l1?.next;
    l2 = l2?.next;
    if (l1 || l2 || remainder) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  return ansroot;
};

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

module.exports = { addTwoNumbers, ListNode }; // 👈 Export the function for testing

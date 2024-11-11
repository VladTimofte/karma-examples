function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function findMin(arr) {
  return Math.min(...arr);
}

function findMax(arr) {
  return Math.max(...arr);
}

function getObjectKeys(obj) {
  return Object.keys(obj);
}

const mockUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

async function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 1000);
  });
}

describe("Math functions", () => {
  it("should multply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(2, 0)).toBe(0);
  });

  it("should divide two number", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-1, -1)).toBe(1);
    expect(divide(0, 5)).toBe(0);
  });
});

describe("String manipulation tests", () => {
  it("should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("")).toBe("");
  });
});

describe("Array utility functions", () => {
  it("should find the maximum value in an array", () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    expect(findMax([-1, -2, -3])).toBe(-1);
    expect(findMax([0])).toBe(0);
  });

  it("should find the minimum value in an array", () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
    expect(findMin([-1, -2, -3])).toBe(-3);
    expect(findMin([0])).toBe(0);
  });
});

describe("Object manipulation functions", () => {
  it("should get the keys of an object", () => {
    expect(getObjectKeys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
    expect(getObjectKeys({})).toEqual([]);
  });
});

describe("Async funcitons", () => {
  it("should fetch users", async () => {
    const users = await fetchUsers();
    expect(users.length).toBe(3)
    expect(users[0].name).toBe('Alice')
    expect(users[1].name).toBe('Bob')
  });

  it("should fetch users and contain specific user", async () => {
    const users = await fetchUsers();
    const userNames = users.map((user) => user.name) // ['Alice', 'Bob', 'Charlie']
    expect(userNames).toContain('Charlie')
  });
});

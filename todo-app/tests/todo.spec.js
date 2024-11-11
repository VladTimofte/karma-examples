// tests/todo.spec.js

import TodoApp from "../src/todo";

describe("TodoApp", () => {
  let app;

  beforeEach(() => {
    app = new TodoApp();
  });

  it("ar trebui sa adauge o sarcina noua", () => {
    const result = app.addTask("Sa cumpar lapte");
    expect(result).toBe(true);
    expect(app.getTasks().length).toBe(1);
  });

  it("ar trebui sa nu adauge o sarcina goala", () => {
    const result = app.addTask("");
    expect(result).toBe(false);
    expect(app.getTasks().length).toBe(0);
  });

  it("ar trebui sa marchee o sarcina ca finalizata", () => {
    app.addTask("Sa merg la shopping");
    const result = app.completeTask(0);
    expect(result).toBe(true);
    expect(app.getTasks()[0].completed).toBe(true);
  });

  it("ar trebui sa stearga un todo", () => {
    app.addTask("Sa mananc fructe si legume");
    const result = app.deleteTask(0);
    expect(result).toBe(true);
    expect(app.getTasks().length).toBe(0);
  });
});

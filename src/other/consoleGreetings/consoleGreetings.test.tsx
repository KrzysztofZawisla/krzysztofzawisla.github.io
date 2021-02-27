import consoleGreetings, { consoleGreetingsArgument } from "./consoleGreetings";
type Spy = jasmine.Spy;

describe("consoleGreetings", () => {
  const argumentArrayLength: number = 2;
  it("Print to console", () => {
    const spy: Spy = spyOn(console, "log");
    consoleGreetings();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.argsFor(0)).toEqual(consoleGreetingsArgument);
  });
  it(`Argument array length is equal to ${argumentArrayLength}`, () => {
    expect(consoleGreetingsArgument.length).toEqual(argumentArrayLength);
  });
});

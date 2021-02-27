export const consoleGreetingsArgument = [
  "%c+",
  "font-size: 1px; padding: 80px 310px; line-height: 180px; background: url(https://i.gifer.com/Um3p.webp); background-size: 640px 360px; color: transparent;",
];

const consoleGreetings = (): void => {
  // eslint-disable-next-line no-console
  console.log(...consoleGreetingsArgument);
};

export default consoleGreetings;

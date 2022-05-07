export type LogLevelSetting = [
  tag: string,
  colors: [background: string] | [background: string, foreground: string],
  logFunction: (...data: any) => void
]

export const settings: {[level: number]: LogLevelSetting} = {
  [1]: ["fatal", ["#993333"], console.error],
  [2]: ["info", ["#2f54eb", "#85a5ff"], console.info],
  [3]: ["error", ["#ff4d4f"], console.error],
  [4]: ["warn", ["#faad14"], console.warn],
  [5]: ["debug", ["#168d21", "#168d21"], console.log],
  [6]: ["trace", ["#aaa"], console.log]
};

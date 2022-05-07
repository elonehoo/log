import {settings} from './type/setting'
import typeToPrintf from './util/typeToPrintf'

let CURRENT_LOG_LEVEL = 2 // error level by default

const tryToLog =
    (level: number, scope = "") =>
        (params: any[]) => {
            if (CURRENT_LOG_LEVEL >= level) {
                if (settings[level]) {
                    const [tag, colors, log_fn] = settings[level];
                    log_fn.apply(
                        null,
                        [
                            `${scope} %c #%s %c ${params.map(typeToPrintf).join(" ")}`,
                            `background-color:${colors[0] || ""};color:white;`,
                            tag,
                            colors[1] ? `color:${colors[1]};` : ""
                        ].concat(params)
                    );
                }
            }
        };


const scope = (name?: string) => ({
    trace: (...params: unknown[]) => tryToLog(6, name)(params),
    debug: (...params: unknown[]) => tryToLog(5, name)(params),
    warn: (...params: unknown[]) => tryToLog(4, name)(params),
    error: (...params: unknown[]) => tryToLog(3, name)(params),
    info: (...params: unknown[]) => tryToLog(2, name)(params),
    fatal: (...params: unknown[]) => tryToLog(1, name)(params)
})

export default Object.assign(scope(), {
  scope,
  setLevel: (level: number) => (CURRENT_LOG_LEVEL = level)
})

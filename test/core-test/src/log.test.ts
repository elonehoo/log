import { it } from 'vitest'
import log from '@elonehoo/log'

it('test log', () => {
  log.setLevel(6)

  // simple logging
  log.trace('trace message')
  log.debug('debug message')
  log.info('info message')
  log.error('error message')
  log.warn('warn message')
  log.fatal('fatal message')

  // passing params
  log.debug('debug message with array:', [1, 2, 3, 4], { a: 1, b: 2 })
  log.debug('debug message with object:', { a: 1, b: 2 })
  log.debug('debug message with number:', Math.random())

  // using scopes
  const scopedLog = log.scope('scope')
  scopedLog.debug('debug message')
})

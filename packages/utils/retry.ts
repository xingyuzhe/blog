import { delay } from './delay'

interface RetryOptions {
  // 异步函数调用的参数
  callbackOptions?: object
  // 成功判断条件
  checkIsOk?: Function
  // 达到最大失败次数回调
  onMaxFail?: Function
  // 重试延迟时间
  interval?: number
  // 最大尝试次数
  max?: number
}

/**
 * 异步函数, 失败自动重试
 * @param caller 调用上下文
 * @param callback 异步函数
 * @param retryOptions 重试参数
 * @param count 当前第几次重试(不需要传)
 */ 
export async function retry(caller: any, callback: Function, retryOptions: RetryOptions = {}, count = 0) {
  let { 
    callbackOptions,
    checkIsOk,
    onMaxFail,
    interval = 0,
    max = 2
  } = retryOptions

  const logger = (caller && caller.logger) ||  {
    warn(msg: string) {
      console.log(msg)
    }
  }

  if (!checkIsOk) {
    checkIsOk = () => {
      return true
    }
  }

  if (!onMaxFail) {
    onMaxFail = () => {
      logger.warn(`retry ${max} 次重试失败!`)
    }
  }

  if (count > max) {
    onMaxFail()
    return null
  }

  if (count > 0) {
    logger.warn(`retry 第${count}次`)
  }

  try {
    const result = await callback.call(caller, callbackOptions)

    if (checkIsOk.call(caller, result)) {
      return result
    }

    throw new Error('retry result not satisfied')
  } catch(e) {
    if (delay) {
      await delay(interval)
    }
    count = count + 1
    logger.warn(e)
    await retry(caller, callback, retryOptions, count)
  }
}
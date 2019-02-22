import { sleep } from './sleep'

interface RetryOptions {
  callbackOptions?: object
  checkIsOk?: Function
  onMaxFail?: Function
  delay?: number
  max?: number
}

/**
 * 异步函数, 失败自动重试
 * @param callback 异步函数
 * @param callbackOptions 异步函数调用的参数
 * @param checkIsOk 成功判断条件
 * @param onMaxFail 达到最大失败次数回调
 * @param max 最大尝试次数
 * @param count 当前第几次重试(不需要传)
 */ 
export async function retry(caller: any, callback: Function, retryOptions: RetryOptions = {}, count = 0) {
  let { 
    callbackOptions,
    checkIsOk,
    onMaxFail,
    delay = 0,
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
      console.warn(`retry ${max} 次重试失败!`)
    }
  }

  if (count > max) {
    onMaxFail()
    return null
  }

  if (count > 0) {
    console.warn(`retry 第${count}次`)
  }

  try {
    const result = await callback.call(caller, callbackOptions)

    if (checkIsOk.call(caller, result)) {
      return result
    }

    throw new Error('retry result not satisfied')
  } catch(e) {
    if (delay) {
      await sleep(delay)
    }
    count = count + 1
    logger.error(e)
    await retry(caller, callback, retryOptions, count)
  }
}
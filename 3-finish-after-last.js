// Q: Как сделать так, что "finish" выводился после последнего числа?
// A: 1. Через Promise
const sayFinishAfterLoopPromise = () => {
  return new Promise((resolve) => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        console.log(i);
        if (i === 4) resolve(i)
      }, i * 1000);
    }
  })
}
sayFinishAfterLoopPromise()
  .then(() => console.log('finish'))

//    2. Через callback
const sayFinishAfterLoopCallback = (cb) => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
      if (i === 4 && typeof cb === 'function') {
        cb()
      }
    }, i * 1000);
  }
}
sayFinishAfterLoopCallback(() => console.log('finish'))

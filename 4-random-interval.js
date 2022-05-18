// Q: Изменится ли решение, если вместо "i * 1000" написать "Math.random() * 1000"?
// A: Да, конкретно моя реализация должна измениться поскольку в данном случае
//    интервалы могут быть разной продолжительности, от (0, 1] с. Как вариант
//    можно обернуть все таймауты в промисы и дождаться выполнения всех промисов:
const sayFinishAfterLoopPromise = () => {
  return new Promise((resolve) => {
    const loopPromises = []

    for (let i = 0; i < 5; i++) {
      const innerPromise = new Promise(resolve => {
        setTimeout(() => {
          console.log(i);
          resolve()
        }, Math.random() * 1000);
      })
      loopPromises.push(innerPromise)
    }

    Promise.all(loopPromises).then(() => resolve())
  })
}
sayFinishAfterLoopPromise()
  .then(() => console.log('finish'))

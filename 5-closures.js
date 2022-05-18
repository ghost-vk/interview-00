// Q: Как работают замыкания и области видимости в JS?
// A: Замыкание дает доступ к верхнестоящему scope.
//    Пример:
const nodejs = () => {
  const author = 'Ryan Dahl'
  return function() {
    console.log(`Your Node.js version is ${process.version}. Created by ${author}.`)
  }
}

const myNode = nodejs()
myNode() // Log: Your Node.js version is v16.14.2. Created by Ryan Dahl.

// Переменная author доступна в области видомости функции nodejs() и
// определена в вышестоящем scope, но возвращаемая функция имеет
// до нее доступ благодаря замыканию

# Play with let, var, closures and promises

## Исходный код

```javascript
const start = Date.now();

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i, Date.now() - start);
  }, i * 1000);
}

console.log('finish', Date.now() - start);
```

## Вопросы

- Почему код выводит не "0,1,2,3,4,finish"?
- Как сделать так, чтобы код выводил "0,1,2,3,4"?
- Как сделать так, что "finish" выводился после последнего числа?
- Изменится ли решение, если вместо "i * 1000" написать "Math.random() * 1000"?
- Как работают замыкания и области видимости в JS?

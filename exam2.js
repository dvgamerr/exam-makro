function findTheProcess(N,x,t,X) {
  //this is default OUTPUT. You can change it.
  let result = -404
  //write your Logic here:\
  let i = 0
  let l = 0
  while (l < X) {
    if (t[i]) {
      l++
      t[i]--
      result = x[i]
    }
    i++
    if (i === N) i = 0
  }
  return result
}

// INPUT [uncomment & modify if required]
const gets = () => `6
1 2
2 1
3 2
4 3
5 2
6 2
8`

let inputs = gets().split('\n').filter(n => n != '' || !n)

const N = parseInt(inputs.splice(0, 1))
const X = parseInt(inputs.splice(inputs.length - 1, 1))

const number = []
const time = []
for (let i = 0; i < N; i++) {
  const [x, t] = inputs[i].split(' ').map(x => parseInt(x))
  number.push(x)
  time.push(t)
}

// OUTPUT [uncomment & modify if required]
console.log(findTheProcess(N,number,time,X))

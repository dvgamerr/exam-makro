function findTheProcess(N,A,M) {
  //this is default OUTPUT. You can change it.
  let result = -404
  //write your Logic here:
  const numSet = Math.floor(N / M)
  const subSet = []
  for (let i = 0; i < numSet; i++) {
    subSet.push(A.slice(M * i, M * (i + 1)))
  }
  console.log(subSet)
  result = Math.floor(N / M)
  return result
}

// INPUT [uncomment & modify if required]
const gets = () => `7
[1, 3, 4, 5, 7, 8, 9]
3`

let inputs = gets().split('\n').filter(n => n != '' || !n)

const N = parseInt(inputs[0])
const M = parseInt(inputs[2])
const A = inputs[1].replace(/[\[\]]/ig, '').split(',').map( n => parseInt(n))

// OUTPUT [uncomment & modify if required]
console.log(findTheProcess(N, A, M))

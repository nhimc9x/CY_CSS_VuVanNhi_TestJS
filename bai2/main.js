var mang = new Array(10,5,2,5,6,7,8,9)

function laSoNguyenTo(num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const handleArray = (arr) => {
  setTimeout(() => {
    const result = arr.reduce((acc, item) => {
      return acc + item
    })
    console.log('Tổng các số trong mảng: ', result)
  } ,3000)

  setTimeout(() => {
    const result = arr.filter(item => laSoNguyenTo(item))
    const resultUnique = Array.from(new Set(result))
    console.log('Các số nguyên tố trong mảng: ', resultUnique)
  }, 6000)

  setTimeout(() => {
    const result = arr.filter(item => item % 3 === 0)
    console.log('Các chia hết cho 3 trong mảng: ', result)
  }, 9000)
}

handleArray(mang)

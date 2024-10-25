const number = Math.round(Math.random() * 100)

const laSoHoanHoa = (num) => {
  let sum = 0
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i
    }
  }
  return sum === num ? `Số ${num} là số hoàn hảo` : `Số ${num} không phải là số hoàn hảo`
}

const setIntervalId = setInterval(() => {
  let numberRandom = Math.round(Math.random() * 100)
  console.log(laSoHoanHoa(numberRandom))
}, 2000)

// clearInterval(setIntervalId)

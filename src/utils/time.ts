function fixZero(number: number) {
  const splitNumber: number = 10
  return number < splitNumber ? `0${number}` : number.toString()
}
function formatYYYYMMDD(time: number) {
  const times: number = 1000;
  const nowDate: any = new Date(time * times);
  const month = fixZero(nowDate.getMonth() + 1)
  const day = fixZero(nowDate.getDate())
  const hour = fixZero(nowDate.getHours())
  const minute = fixZero(nowDate.getMinutes())
  const second = fixZero(nowDate.getSeconds())
  return `${nowDate.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`
}
export {
  formatYYYYMMDD
}
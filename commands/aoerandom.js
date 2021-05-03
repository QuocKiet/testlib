const aoe = require('../index.js')

 

// hàm radom
random = (num) => {

num = parseInt(num);

console.log('You want random team size is ' + num)

  if(num > 8 || num <1 || num === undefined || isNaN(num)) {

    console.log("Số game thủ của game từ 1 đến 8. Bạn vui lòng thử lại!")

    return

}

  for (let i = 1; i <= num; i++) {

    const item = aoe.getCountryRandom()

     console.log(i, item);

 }

} 

// lấy parameter

const argvs = process.argv 

// Từ index số 2 là tham số chúng ta truyền vào, ở đây là số người chơi.

random(argvs[2])
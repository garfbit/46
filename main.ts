let c = 0
let d = 0
let n = 123456
while (n > 0) {
    d = n % 10
    if (d % 2 == 0) {
        c += 1
    }
    n = n / 10
}
basic.showNumber(c)

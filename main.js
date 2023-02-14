let x = +prompt("Geometrik shakllar yuzini topish. \n1. To'rtburchak\n2. Kvadrat\n3. Parallelogram\n4. Romb\n5. Trapetsiya\n6. Uchburchak balandlik orqali\n7. Uchburchak tomonlari orqali\n8. To'g'ri burchakli uchburchak\n\nTanlagan shakl raqamini yozing: ")

if(x == 1) {
    let t_a = +prompt('S = a * b \na = ')
    let t_b = +prompt('S = a * b \nb = ')
    alert(`S = ${t_a * t_b}`)
}else if(x == 2) {
    let k_a = +prompt("S = a ** 2\na = ")
    alert(`S = ${k_a ** 2}`)
}else if(x == 3) {
    let p_a = +prompt(`S = a * h\na = `)
    let p_h = +prompt(`S = a * h\nh = `)
    alert(`S = ${p_a * p_h}`)
}else if(x == 4) {
    let r_d1 = +prompt(`S = 0.5 * d1 * d2\nd1 = `)
    let r_d2 = +prompt(`S = 0.5 * d1 * d2\nd2 = `)
    alert(`S = ${0.5 * r_d1 * r_d2}`)
}else if(x == 5) {
    let tr_a = +prompt(`S = 0.5 * (a + b) * h\na = `)
    let tr_b = +prompt(`S = 0.5 * (a + b) * h\nb = `)
    let tr_h = +prompt(`S = 0.5 * (a + b) * h\nh = `)
    alert(`S = ${0.5 * (tr_a + tr_b) * tr_h}`)
}else if(x == 6) {
    let ub_a = +prompt(`S = 0.5 * a * h\na = `)
    let ub_h = +prompt(`S = 0.5 * a * h\nh = `)
    alert(`S = ${0.5 * ub_a * ub_h}`)
}else if(x == 7) {
    let ut_a = +prompt(`a = `)
    let ut_b = +prompt(`b = `)
    let ut_c = +prompt(`c = `)
    let ut_p = ut_a + ut_b + ut_c
    alert(`S = ${Math.floor(Math.sqrt(ut_p * (ut_p - ut_a) * (ut_p - ut_b) * (ut_p - ut_c)))}`)
}else if(x == 8) {
    let tu_a = +prompt(`S = 0.5 * a * b\na = `)
    let tu_b = +prompt(`S = 0.5 * a * b\nb = `)
    alert(`S = ${Math.floor(0.5 * tu_a * tu_b)}`)
}
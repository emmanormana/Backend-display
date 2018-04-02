var x = 1
let y = 1
function here() {

    var x = 2
    let y = 2

    if(true) {
        var x = 3
        let y = 3
        console.log('y1',y)
        console.log('x1',x)
    }
    console.log('y2',y)
    console.log('x2',x)
}

here()
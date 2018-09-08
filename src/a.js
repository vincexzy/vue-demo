function fun(n, e) {
    console.log(e)
    return {
        fun(m) {
            return fun(m, n);
        }
    };
}

var a = fun (0);
a.fun(1);
a.fun(2);
a.fun(3);

var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?

var c = fun(0).fun(1); 
c.fun(2); c.fun(3);//undefined,?,?,?
console.log(typeof(c));
// c 就是一个 object :
// {
//     function (1,0) {
//         console.log(0)
//         return {
//             fun: function (m){
//                 return fun(m,1)
//             }
//         }
//     }
// }
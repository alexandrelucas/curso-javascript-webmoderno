const funcs = [];

for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i);
    });
}
// no final é 10 pq o Var não respeita escopo
funcs[2]();
funcs[8](); 

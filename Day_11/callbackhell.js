function GetUser(id, cb) {
    const promise = new Promise((resolve, reject) => {
        setTimeout((c)=> {
        resolve({ id,name:"calm" });
    }, 500);
});
return promise;  
};

function getOrder(userid) {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["order 1","order 2"]);
        },500);
    });
    return promise;
}

function getorderDetails(order) {
    setTimeout(() => {
        if (order == "order 1") {
            cb(null, { order, price: 499 })
        }
        if (order == "order 2") {
            cb(null, { order, price: 1000 })
        }
    }
        , 500)
}

async function main() {
    const user = await getuser(1);
    const order = await getorder(user.id);
    const orderDetails = await getorderDetails(order[1]);
    console.log(user.id)
}


GetUser(1, (err, user) => {
    if (err) {
        console.log(err)
    }
    else {
        getOrder(user.id, (err, order) => {
            if (err) {
                console.log(err)
            }
            else {
                getorderDetails(order[1], (err, orderDetails) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(user.name);
                        console.log(order[1]);
                        console.log(orderDetails.price);
                    }
                })
            }
        })
    }
})   
main()
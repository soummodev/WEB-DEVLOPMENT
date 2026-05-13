const user = (id) => {
    return new Promise((resolve, reject) => {
        console.log(`data is  loading`)
        setTimeout(()=>{     if (id == 1) {
          resolve({ id: 1, name: "soummo", roll: 234 });
        } else {
          reject(`no data found`);
        }},2000)
   
    })

}
user(1)
    .then(a => {
    console.log(a)
    })
    .catch(err => {
    console.log(err)
})
import getstockdata from './script.js'
console.log(getstockdata())
setInterval(function () {
    const stockdata = getstockdata()
    renderstockdata(stockdata)
},1500)

let prevprice = null
function renderstockdata(stockdata) {
    const sdname = document.getElementById('name')
      const sdsymbol = document.getElementById("symbol")
    const sdprice = document.getElementById("price")
    const sdpriceicon = document.getElementById("price-icon")
    const sdtime = document.getElementById("time")
    const { name, sym, price, time } = stockdata

const priceprediction = price > prevprice ? 'green.svg': price < prevprice ?  'red.svg': 'green.svg'
    const priceicon = document.createElement('img')
    priceicon.src = 'svg/${pricedirectionicon'
    priceicon.alt = 'price direction icon'
    sdpriceicon.innerHTML = ''
    sdpriceicon.appendChild(priceicon)

    sdname.innerText = name
    sdsymbol.innerText = sym 
    sdprice.innerText = price 
    sdtime.innerText = time 
prevprice = price 
        
}
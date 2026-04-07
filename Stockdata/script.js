export default function getstockdata() {
    return {
        name: 'bd stock',
        sym: 'stock',
        price: (Math.random() * 3).toFixed(2),
        time:new Date().toLocaleTimeString()
    }
}
//arrow function 
const get = (amount) => {
    return `warning! you just spent £${amount}`
}
console.log(get(150))
function setpermission(permissionlevel, ...names) {
    console.log(`${names} are approved ${permissionlevel}  level permission `)
}
setpermission("admin", "soummo", "deepon")
function notification(notificationfn) {
    notificationfn()
}
const emnotification = () => console.log("email sent")
const smsnotification = () => console.log("sms sent")
notification(emnotification)
notification(smsnotification);

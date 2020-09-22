console.log('Client side javascript file is loaded!')

const form1 = document.getElementById('form1')
const input1 = document.getElementById('input1')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
form1.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = input1.value1
    p1.textContent = 'Loading something....'
    p2.textContent = ''
    console.log("location: " + input1.value)
    const http = '/weather?address=' + input1.value
    // const http = 'http://tower1:3000/weather?address=' + input1.value
    console.log('http: ' + http)
    fetch(http).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                p1.textContent = data.error
            } else {
                console.log(JSON.stringify(data))
                p1.textContent = data.location
                p2.textContent = data.forecast
            }
        })
    })
})
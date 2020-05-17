console.log('client side js file has loaded')

const url = document.querySelector('#videoUrl')
const downloadButton = document.querySelector('#downloadButton')

downloadButton.addEventListener('click', (e) => {
    console.log("URL: ", url.value)

    if(url.value.length === 0){
        return alert('invalid URL')
    }

    sendURL(url.value)
})

function sendURL(URL) {
    window.location.href = `/download?URL=`+URL

    // fetch('/download?URL='+URL, {
    //     method: 'GET'
    // }).then((res) => {
    //     return res.json()
    // }).then((data) => {
    //     console.log(data)
    // })
    url.value = ""
}


const adviceIdHtml = document.getElementById('jsAdviceId')
const adviceTextHtml = document.getElementById('jsAdviceText')

getNewAdvice()

function getNewAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const adviceId = data['slip'].id
        const adviceText = data['slip'].advice
    
        adviceIdHtml.innerHTML = adviceId
        adviceTextHtml.innerHTML = adviceText
    
    })
    
}


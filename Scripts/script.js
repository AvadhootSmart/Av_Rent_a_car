let next = document.getElementById('Next')
let prev = document.getElementById('Prev')
let slides = []
let slide1 = document.getElementById('Porsche')
let slide2 = document.getElementById('M4')
let slide3 = document.getElementById('Mstng')
let counter = 0
let login = document.getElementById('login')



slides.push(slide1)
slides.push(slide2)
slides.push(slide3)
// console.log(slides)
slides.forEach(
    (Poster, index) => {
        Poster.style.left = `${index * 100}%`
    });
    
    slidesimg = () => {
        slides.forEach(
            (Poster) => {
                Poster.style.transform = `translateX(-${counter * 100}%)`
                
            });

}
resetcountnxt = () => {
    if (counter >= 2) {
        counter = -1
    }
    
}

resetcountpre = () => {
    if (counter === 0 || counter === 3) {
        counter = 2
    }
}





nxtslide = () => {
    // console.log("pre " + counter)
    counter++
    // console.log("post " + counter)
    
    slidesimg()
    resetcountnxt()
}

prevslide = () => {
    // console.log(counter + " pre")
    resetcountpre()
    counter--
    slidesimg()
    // console.log(counter + " post")
}

next.addEventListener('click', nxtslide)
prev.addEventListener('click', prevslide)


resetcountnxt = () => {
    if (counter == 2) {
        counter = -1
    }
}
resetcountpre = () => {
    if (counter <= 0) {
        counter = 3
    }
}
// Login button event listener
let pop = document.getElementsByClassName('popup')[0];
let popLogin = document.getElementById('btn-popLogin')

login.addEventListener('click', () => {
    pop.style.opacity = 1;
    pop.style.zIndex = 999;
})

popLogin.addEventListener('click', () => {
    pop.style.zIndex = -2;
    pop.style.opacity = 0;
})









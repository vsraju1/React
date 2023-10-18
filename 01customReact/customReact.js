function customRendor(reactElement, container){
    
}

const reactElement = {
    type: 'a',
    props : {
        href: "www.google.com",
        target : "_blank"
    },
    children : 'click me to react google'
}

const mainContainer = document.querySelector("#root")

customRendor(reactElement, mainContainer)


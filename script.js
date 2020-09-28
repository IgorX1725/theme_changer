const container = document.getElementsByClassName('container')[0];
const button_container = document.getElementsByClassName('button_container')[0];
const button = document.getElementsByClassName('toggle_button')[0];
const label = document.getElementsByClassName('label')[0];

const lightText = "Light"
const darkText = "Dark"

let isDark = false;

window.onload = ()=>{

    container.classList.add("container_light")
    button.classList.add("toggle_button_light")
    label.classList.add('label_light')
    label.textContent = lightText

}

function toggleTheme(isDark){
    if(isDark){
        container.classList.replace("container_light","container_dark")
        button.classList.replace("toggle_button_light","toggle_button_dark")
        label.classList.replace('label_light', "label_dark")
        label.textContent = darkText
        return
    }

    container.classList.replace("container_dark","container_light")
    button.classList.replace("toggle_button_dark" ,"toggle_button_light")
    label.classList.replace("label_dark","label_light")
    label.textContent = lightText
    return
}

button.addEventListener("click",()=>{
    isDark = !isDark
    toggleTheme(isDark)
})
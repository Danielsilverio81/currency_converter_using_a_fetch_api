const btnDarkLight = document.querySelector('.theme-change')
export const activeBtn = () => {
    btnDarkLight.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.toggle('dark')
    })
}
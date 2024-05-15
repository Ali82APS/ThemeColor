const $ = document
const themeCssVariable = $.querySelector('.root')
const colorBtn = $.querySelectorAll('btn')

colorBtns.forEach(colorBtn => {
    colorBtn.addEventListener('click', event => {
        console.log(event.target.dataset.color);

        let mainThemeColor = event.target.dataset.color

        themeCssVariables.style.setproperty('--theme-color', mainThemeColor)


    })
})



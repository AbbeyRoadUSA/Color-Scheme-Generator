fetch(`https://www.thecolorapi.com/scheme?hex=DA1FFF&mode=monochrome`)
    .then(response => response.json())
    .then(data => renderColors(data))

document.getElementById("button").addEventListener("click", (e) => {
    e.preventDefault()
    const selectedColor = document.getElementById("select-color").value
    const slicedSelectedColor = selectedColor.slice(1)
    const selectedMode = document.getElementById("select-mode").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${slicedSelectedColor}&mode=${selectedMode}`)
        .then(response => response.json())
        .then(data => renderColors(data))
})

function renderColors(data) {
    const colorColumns = document.querySelectorAll('.color-columns')
    Array.from(colorColumns).map((colorColumn, index) => colorColumn.style.background = data.colors[index].hex.value)
    const hexNames = document.querySelectorAll('.color-codes')
    Array.from(hexNames).map((hexName, index) => {
        hexName.innerHTML = `<p>${data.colors[index].hex.value}</p>`
    })
}
function renderImg(src) {
  let div = document.createElement('div')
  let img = document.createElement('img')
  img.setAttribute('src', src)
  img.classList.add('bg-img')
  div.appendChild(img)
  return div
}

window.onload = () => {
  let app = document.getElementById('app')
  for (let i = 1; i < 24; i++) {
    let div = renderImg(`./image/20193102249128551_${i}.jpg`)
    app.appendChild(div)
  }
}
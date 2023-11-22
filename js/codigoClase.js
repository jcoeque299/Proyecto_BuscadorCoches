const marca = document.querySelector("#marca")
const year = document.querySelector("#year")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")

const resultados = document.querySelector("#resultado")

const datosBusqueda = {
    marca: "",
    modelo: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}

document.addEventListener("DOMContentLoaded", mostrarTodos(coches))

marca.addEventListener("input", (e) => {
    datosBusqueda.marca = e.target.value
    filtrarCoches()
})

year.addEventListener("input", (e) => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarCoches()
})

minimo.addEventListener("input", (e) => {
    datosBusqueda.minimo = parseInt(e.target.value)
    filtrarCoches()
})

maximo.addEventListener("input", (e) => {
    datosBusqueda.maximo = parseInt(e.target.value)
    filtrarCoches()
})

puertas.addEventListener("input", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarCoches()
})

transmision.addEventListener("input", (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarCoches()
})

color.addEventListener("input", (e) => {
    datosBusqueda.color = e.target.value
    filtrarCoches()
})

const max = new Date().getFullYear()
const min = max-10
for (let cont = max; cont >= min; cont--) {
    const option = document.createElement("option")
    option.value = cont
    option.innerText = cont
    document.querySelector("#year").appendChild(option)
}

function mostrarTodos(coches) {
    limpiarHTML()
    coches.forEach(coche => {
        const cocheHTML = document.createElement("p")
        cocheHTML.innerHTML = `
        <p>${coche.marca}   -   ${coche.modelo}  -   ${coche.year}  -   ${coche.precio}  -   ${coche.puertas}  -   ${coche.color}   -   ${coche.transmision}</p>
        `
        resultados.appendChild(cocheHTML)
    })
}

function filtrarCoches() {
    const resultadosBusqueda = coches
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor)
    if (resultadosBusqueda.length) {
        mostrarTodos(resultadosBusqueda)
    }
    else {
        noResultado()
    }
}

function filtrarMarca(coche) {
    if (datosBusqueda.marca) {
        return coche.marca === datosBusqueda.marca
    }
    return coche
}

function filtrarYear(coche) {
    if (datosBusqueda.year) {
        return coche.year === datosBusqueda.year
    }
    return coche
}

function filtrarMinimo(coche) {
    if (datosBusqueda.minimo) {
        return coche.precio >= datosBusqueda.minimo
    }
    return coche
}

function filtrarMaximo(coche) {
    if (datosBusqueda.maximo) {
        return coche.precio <= datosBusqueda.maximo
    }
    return coche
}

function filtrarPuertas(coche) {
    if (datosBusqueda.puertas) {
        return coche.puertas === datosBusqueda.puertas
    }
    return coche
}

function filtrarTransmision(coche) {
    if (datosBusqueda.transmision) {
        return coche.transmision === datosBusqueda.transmision
    }
    return coche
}

function filtrarColor(coche) {
    if (datosBusqueda.color) {
        return coche.color === datosBusqueda.color
    }
    return coche
}

function limpiarHTML() {
    while (resultados.firstChild) {
        resultados.removeChild(resultados.firstChild)
    }
}

function noResultado() {
    limpiarHTML()
    const noResultado = document.createElement("div")
    noResultado.classList.add("alerta", "error")
    noResultado.textContent = "No hay resultados"
    resultados.appendChild(noResultado)
}
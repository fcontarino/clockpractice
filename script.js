const body = document.querySelector("body")
const meses = {
    0: "Ene",
    1: "Feb",
    2: "Mar",
    3: "Abr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Ago",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dic",
}

function nombreMes(mes) {
    return meses[mes]
}

function getHora() {
    const d = new Date();
    const hora = d.getHours();
    let minutos = d.getMinutes();
    if (minutos < 10) {
        minutos = `0${minutos}`
    }
    let segundos = d.getSeconds();
    if (segundos < 10) {
        segundos = `0${segundos}`
    }

    return `${hora}:${minutos}:${segundos}`;
}

function getFecha() {
    const d = new Date();
    const dia = d.getDate();
    let mes = d.getMonth();
    mes = nombreMes(mes)
    const anio = d.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

const reloj = document.getElementById("reloj")
const fecha = document.getElementById("fecha")

setInterval(() => {
    reloj.textContent = getHora();
}, 1000);

setInterval(() => {
    fecha.textContent = getFecha();
}, 1000)


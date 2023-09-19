const canvas = document.getElementById("chart").getContext("2d");
const btn = document.getElementById("btn");
const div = document.getElementById("imagenes");
let contadorH = 0;
let contadorM = 0;

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((respuesta) => respuesta.json())
    .then((json) => {
      console.log(json.results[0].gender);
      json.results[0].gender=="female" ? contadorM++ : contadorH++;
      let imagen = document.createElement("img");
      imagen.setAttribute("src", json.results[0].picture.medium);
      div.appendChild(imagen);
      console.log(contadorH + " " + contadorM);
      addData(chart,contadorH,contadorM);
    })
    .catch();
});

function addData(chart, hombre, mujer) {
  chart.data.datasets[0].data[0] = hombre;
  chart.data.datasets[1].data[0] = mujer;
  chart.update();
}

const data = {
  labels: ["", ""],
  datasets: [
    {
      label: "Hombres",
      data: [0],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)"
      ],
      borderColor: [
        "rgb(255, 99, 132)",
      ],
      borderWidth: 1,
    },
    {
      label: "Mujeres",
      data: [0],
      backgroundColor: [
        "rgba(255, 255, 132, 0.2)"
      ],
      borderColor: [
        "rgba(255, 255, 132)"
      ],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const chart = new Chart(canvas, config);

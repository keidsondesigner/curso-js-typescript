const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status === 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", event => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    event.preventDefault();
    carregaPagina(element);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");

  const requestConfig = {
    method: "GET",
    url: href
  };

  try {
    const response = await request(requestConfig);
    carregaResultado(response)
  } catch (error) {
    console.log(error)
  }
};

function carregaResultado(resp) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = resp;
}



console.warn("Olá estranho, estou de olho em você! 👀")

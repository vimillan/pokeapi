const url = "https://pokeapi.co/api/v2/";

function getList() {
  var itemList = document.querySelector("#itemList");
  var dataList = [];
  var item = {};

  fetch(url + "pokemon/")
    .then((response) => response.json())
    .then((data) => {
      dataList = data.results;
      for (let data of dataList) {
        fetch(data.url)
          .then((response) => response.json())
          .then((data) => {
            const img = data.sprites.other['official-artwork'].front_default;
            console.log(img)
            itemList.innerHTML += `
            <div class="col col-lg-4">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img src="${img}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <span class="badge text-bg-info">Habilidades</span>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">An item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
          });
      }
    });
}

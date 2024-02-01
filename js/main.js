const accessKey = "FUra1brKyeJkDAvcXX98MzpkqXQZlqu6NKtJNfznO2o";

const searchForm = document.getElementById("search_form");
const searchBox = document.getElementById("search_box");
const serachResult = document.getElementById("serach_result");
const viewMore = document.getElementById("view_more_btn");

let keyWord = "";
let page = 1;

async function searchImages() {
  keyWord = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=30`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);

    serachResult.appendChild(imageLink);
  });
  viewMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

viewMore.addEventListener("click", function (e) {
  page++;
  searchImages();
});

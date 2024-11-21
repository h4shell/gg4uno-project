const input = document.querySelector("input");
const shortLink = document.querySelector("#short_link");
const latBar = document.querySelector("#latbar");
function showLat() {
  latBar.classList.toggle("w-[300px]");
}
function makeUrl() {
  const data = {
    url: input.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  if (input.value) {
    fetch("/short", options)
      .then((response) => response.json())
      .then((text) => {
        if (text.error) {
          const boxError = document.querySelector("#box-error");
          boxError.classList.remove("hide");
          input.value = "";
        } else {
          const urlShort = `${window.location.origin}/statistic/${text.code}`;
          window.location.href = urlShort;
        }
      });
  }
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    makeUrl();
  }
});

function toggleAnswer(answerId) {
  const answer = document.getElementById(answerId);
  answer.classList.toggle("hidden");
}

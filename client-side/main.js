document.querySelector('button').addEventListener('click', getGames)

async function getGames() {
  const gameInfo = document.querySelector('input').value
  try {
  const response = await fetch(`http://localhost:8000/api/games/${gameInfo}`)
  const data = await response.json()

  console.log(data)
  document.querySelector('h2').innerText = data.name
  document.querySelector('h3').innerText = data.genre
  document.querySelector('h4').innerText = data.year
  } catch (err) {
    console.log(err)
  }
}
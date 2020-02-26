
var block = document.getElementById("block")
var blockHeight = block.offsetHeight
var blockWidth = block.offsetWidth

n = 100
var sectionWidth = blockWidth / n
var barWidth = 0.9 * sectionWidth

function createRandomBars() {
  for (i = 0; i < n; i++){
    var section = document.createElement("div")
    section.classList.add('section')
    section.style.width = sectionWidth + "px"
  
    var bar = document.createElement("div")
    bar.classList.add('bar')
    bar.style.width = barWidth + "px"
    bar.style.height = Math.floor(Math.random()*blockHeight) * 0.8 + "px"
  
    section.appendChild(bar)
    block.appendChild(section)
  }
}

bars = []
function getBars() {
  for (i = 0; i < n; i++){
    bars.push(block.children[i].firstElementChild)
  }
}

curr = 1
var doInsertionSort = function () {
  curr = 1
  bars = []
  block.innerHTML = ''
  createRandomBars()
  getBars()
  var intervalId = setInterval(
      function() {
        j = curr-1
        temp = bars[curr].offsetHeight
        while (j > -1 && bars[j].offsetHeight > temp){
          bars[j+1].style.height = bars[j].offsetHeight + "px"
          j--;
        }
        bars[j+1].style.height = temp + "px"
        if (++curr == n) clearInterval(intervalId)
      }, 1)
  }

// event listeners
var goBtn = document.getElementById('Go')
goBtn.addEventListener('click', doInsertionSort)
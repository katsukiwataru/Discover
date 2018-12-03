; (() => {
  const wrapper = document.getElementById('wrapper');
  const mainElements = {
    htmlBox: document.getElementById('htmlBox'),
    cssBox: document.getElementById('cssBox'),
    jsBox: document.getElementById('jsBox'),
  };

  const languagesItems = {
    htmlItems: ["Pug", "2", "3", "4", "5", "6"],
    cssItems: ["Sass", "20", "30", "40"],
    jsItems: ["Vue", "React", "Angular", "400", "500"]
  }

  let htmlItemCreate = true
  let cssItemCreate = true
  let jsImteCreate = true
  let createdhtmlItem = []
  let createdcssItem = []
  let createdjsItem = []


  window.requestAnimationFrame =
    window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

  class elementControler {
    constructor(languageItems, createdItems, languageTypeItem, ) {
      this.languageItems = languageItems
      this.createdItems = createdItems
      this.languageTypeItem = languageTypeItem
    }
    createElements() {
      for (let index = 0; index < this.languageItems.length; index++) {
        const createdDiv = document.createElement('div')
        const createdParagraph = document.createElement('p')
        createdDiv.className = "box " + this.languageTypeItem
        createdParagraph.className = "boxText"
        createdParagraph.innerHTML = this.languageItems[index]
        createdDiv.appendChild(createdParagraph)
        this.createdItems.push(createdDiv)
      }
    }
    appendElements() {
      this.createdItems.slice().forEach(element => {
        wrapper.appendChild(element)
      })
    }
  }

  const htmlControler = new elementControler(languagesItems.htmlItems, createdhtmlItem, "htmlItem", )

  const cssControler = new elementControler(languagesItems.cssItems, createdcssItem, "cssItem", )

  const jsControler = new elementControler(languagesItems.jsItems, createdjsItem, "jsItem")


  const techSearch = (createdItems, languagesList) => {
    for (let item = 0; item < languagesList.length; item++) {
      createdItems[item].addEventListener('click', () => {
        const searchURL = 'https://www.google.com/search?q=';
        window.open(searchURL + languagesList[item])
      })
    }
  }

  const animationTranslate = (target, time, endX, endY) => {
    const startX = -50
    const startY = -50
    const diffX = endX - startX
    const diffY = endY - startY
    const today = new Date()
    const clickMillisecond = today.getTime()

    const update = () => {
      const updateMillisecond = Date.now()
      const diff = ((updateMillisecond - clickMillisecond))
      progress = diff / time
      console.log(diff)
      progress = Math.min(progress, 1)
      if (progress >= 0) {
        const resultX = startX + diffX * progress
        const resultY = startY + diffY * progress
        target.style.transform = `translate( ${resultX}%, ${resultY}% )`
      }
      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }
    requestAnimationFrame(update)
  }

  mainElements.htmlBox.addEventListener('click', (element) => {
    if (htmlItemCreate) {
      htmlControler.createElements()
      htmlControler.appendElements()
      techSearch(createdhtmlItem, languagesItems.htmlItems)

      for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {
        const randomNumberX = (Math.floor(Math.random() * 941) - 520)
        const randomNumberY = (Math.floor(Math.random() * 561) - 330)
        createdhtmlItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdhtmlItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        animationTranslate(createdhtmlItem[itemIndex], 2000, randomNumberX, randomNumberY)
      }
      htmlItemCreate = false
    } else {
      console.log(htmlItemCreate)
    }
  })

  mainElements.cssBox.addEventListener('click', (element) => {
    if (cssItemCreate) {
      cssControler.createElements()
      cssControler.appendElements()
      techSearch(createdcssItem, languagesItems.cssItems)

      for (let itemIndex = 0; itemIndex < languagesItems.cssItems.length; itemIndex++) {
        const randomNumberX = (Math.floor(Math.random() * 401) - 200)
        const randomNumberY = (Math.floor(Math.random() * 651) - 275)
        createdcssItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdcssItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        animationTranslate(createdcssItem[itemIndex], 2000, randomNumberX, randomNumberY)
      }
      cssItemCreate = false
    }
  })

  mainElements.jsBox.addEventListener('click', (element) => {
    if (jsImteCreate) {
      jsControler.createElements()
      jsControler.appendElements()
      techSearch(createdjsItem, languagesItems.jsItems)
      for (let itemIndex = 0; itemIndex < languagesItems.jsItems.length; itemIndex++) {
        const randomNumberX = (Math.floor(Math.random() * 401) - 200)
        const randomNumberY = (Math.floor(Math.random() * 651) - 275)
        createdjsItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdjsItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        animationTranslate(createdjsItem[itemIndex], 2000, randomNumberX, randomNumberY)
      }
      jsImteCreate = false
    }
  })

})()

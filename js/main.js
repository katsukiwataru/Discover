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

  let existsHtmlItem = true
  let existsCssItem = true
  let existsJsItem = true
  let createdhtmlItem = []
  let createdcssItem = []
  let createdjsItem = []



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



  const animateTranslate = (target, time, startvalue, endvalue) => {
    // const startX = -50
    // const startY = -50
    const diffX = endvalue.X - startvalue.X
    const diffY = endvalue.Y - startvalue.Y
    const startTime = Date.now()

    const update = () => {
      const now = Date.now()
      const timeDiff = (now - startTime)
      const progress = timeDiff / time
      if (progress < 0 || progress > 1) {
        return
      }
      const resultX = startvalue.X + diffX * progress
      const resultY = startvalue.Y + diffY * progress
      // const resultX = startX + diffX * progress
      // const resultY = startY + diffY * progress
      target.style.transform = `translate( ${resultX}%, ${resultY}% )`
      requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }

  mainElements.htmlBox.addEventListener('click', (element) => {
    if (existsHtmlItem) {
      htmlControler.createElements()
      htmlControler.appendElements()
      techSearch(createdhtmlItem, languagesItems.htmlItems)

      for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {
        // const randomNumberX = (Math.floor(Math.random() * 941) - 520)
        // const randomNumberY = (Math.floor(Math.random() * 561) - 330)
        createdhtmlItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdhtmlItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        // animateTranslate(createdhtmlItem[itemIndex], 2000, randomNumberX, randomNumberY)
        const start = {
          X: -50,
          Y: -50,
        }
        const end = {
          X: Math.floor(Math.random() * 941) - 520,
          Y: Math.floor(Math.random() * 561) - 330,
        }
        animateTranslate(createdhtmlItem[itemIndex], 2000, start, end)
      }
      existsHtmlItem = false
    } else {
      console.log(existsHtmlItem)
    }
  })

  mainElements.cssBox.addEventListener('click', (element) => {
    if (existsCssItem) {
      cssControler.createElements()
      cssControler.appendElements()
      techSearch(createdcssItem, languagesItems.cssItems)

      for (let itemIndex = 0; itemIndex < languagesItems.cssItems.length; itemIndex++) {
        // const randomNumberX = (Math.floor(Math.random() * 401) - 200)
        // const randomNumberY = (Math.floor(Math.random() * 651) - 275)
        createdcssItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdcssItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        const start = {
          X: -50,
          Y: -50,
        }
        const end = {
          X: Math.floor(Math.random() * 401) - 200,
          Y: Math.floor(Math.random() * 651) - 275,
        }
        // animateTranslate(createdcssItem[itemIndex], 2000, randomNumberX, randomNumberY)
        animateTranslate(createdcssItem[itemIndex], 2000, start, end)
      }
      existsCssItem = false
    }
  })

  mainElements.jsBox.addEventListener('click', (element) => {
    if (existsJsItem) {
      jsControler.createElements()
      jsControler.appendElements()
      techSearch(createdjsItem, languagesItems.jsItems)
      for (let itemIndex = 0; itemIndex < languagesItems.jsItems.length; itemIndex++) {
        // const randomNumberX = (Math.floor(Math.random() * 401) - 200)
        // const randomNumberY = (Math.floor(Math.random() * 651) - 275)
        createdjsItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdjsItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        const start = {
          X: -50,
          Y: -50,
        }
        const end = {
          X: Math.floor(Math.random() * 401) - 200,
          Y: Math.floor(Math.random() * 651) - 275,
        }
        // animateTranslate(createdjsItem[itemIndex], 2000, randomNumberX, randomNumberY)
        animateTranslate(createdjsItem[itemIndex], 2000, start, end)
      }
      existsJsItem = false
    }
  })

})()

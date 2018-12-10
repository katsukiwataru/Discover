; (() => {
  const wrapper = document.getElementById('wrapper');
  const mainElements = {
    htmlBox: document.getElementById('htmlBox'),
    cssBox: document.getElementById('cssBox'),
    jsBox: document.getElementById('jsBox'),
  };

  const languagesItems = {
    htmlItems: ["1", "2", "3", "4", "5", "6", "7"],
    cssItems: ["10", "20", "30", "40", "50", "60"],
    jsItems: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
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



  // const animateTranslate = (target, time, length, index) => {
  //   const angle = 360 / length
  //   const degree = angle * index + Math.floor(Math.random() * 20)
  //   const hypotenuse = 100 + ((200 - 100))
  //   const resultX = Math.floor(Math.cos(degree * (Math.PI / 180)) * hypotenuse)
  //   const resultY = Math.floor(Math.sin(degree * (Math.PI / 180)) * hypotenuse)
  //   console.log(resultX, resultY)
  //   const startTime = Date.now()
  //   const update = () => {
  //     const now = Date.now()
  //     const timeDiff = (now - startTime)
  //     const progress = timeDiff / time
  //     if (progress < 0 || progress > 1) {
  //       return
  //     }
  //     target.style.transform = `translate( ${resultX - 50}%, ${resultY - 50}% )`
  //     requestAnimationFrame(update)

  //   }
  //   requestAnimationFrame(update)
  // }


  const animateTranslate = (target, time, startvalue, endvalue) => {
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
      target.style.transform = `translate( ${resultX}%, ${resultY}% )`
      requestAnimationFrame(update)
    }
    // requestAnimationFrame(update)
    update()
  }


  mainElements.htmlBox.addEventListener('click', (element) => {
    if (existsHtmlItem) {
      htmlControler.createElements()
      htmlControler.appendElements()
      techSearch(createdhtmlItem, languagesItems.htmlItems)
      for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {
        createdhtmlItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdhtmlItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        // animateTranslate(createdhtmlItem[itemIndex], 2000, languagesItems.htmlItems.length, itemIndex)
        const angle = 360 / languagesItems.htmlItems.length
        const degree = angle * itemIndex + Math.floor(Math.random() * 1)
        const hypotenuse = 100 + ((200 - 100)) + Math.random() * 1
        const start = {
          X: -50,
          Y: -50,
        }
        const end = {
          X: Math.floor(Math.cos(degree * (Math.PI / 180)) * hypotenuse),
          Y: Math.floor(Math.sin(degree * (Math.PI / 180)) * hypotenuse)
        }
        animateTranslate(createdhtmlItem[itemIndex], 1000, start, end)
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
        createdcssItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdcssItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        // animateTranslate(createdcssItem[itemIndex], 2000, languagesItems.cssItems.length, itemIndex)
        const angle = 360 / languagesItems.cssItems.length
        const degree = angle * itemIndex + Math.floor(Math.random() * 1)
        const hypotenuse = 100 + ((200 - 100)) + Math.random() * 1
        const start = {
          X: -50,
          Y: -50,
        }
        const end = {
          X: Math.floor(Math.cos(degree * (Math.PI / 180)) * hypotenuse),
          Y: Math.floor(Math.sin(degree * (Math.PI / 180)) * hypotenuse)
        }
        animateTranslate(createdcssItem[itemIndex], 1000, start, end)
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
        createdjsItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdjsItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        // animateTranslate(createdjsItem[itemIndex], 2000, languagesItems.jsItems.length, itemIndex)
        const angle = 360 / languagesItems.jsItems.length
        const degree = angle * itemIndex + Math.floor(Math.random() * 1)
        const hypotenuse = 100 + ((200 - 100)) + Math.random() * 1
        const start = {
          X: -50,
          Y: -50,
        }
        const end = {
          X: Math.floor(Math.cos(degree * (Math.PI / 180)) * hypotenuse),
          Y: Math.floor(Math.sin(degree * (Math.PI / 180)) * hypotenuse)
        }
        animateTranslate(createdjsItem[itemIndex], 1000, start, end)
      }
      existsJsItem = false
    }
  })

})()

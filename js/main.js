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



  const animateTranslate = (target, time, ) => {
    // const diffX = endvalue.X - startvalue.X
    // const diffY = endvalue.Y - startvalue.Y
    // const angle = 360 / languagesItems.htmlItems.length
    // const r = 50
    // const l = 50
    // const h = 50
    // var degree = angle * languagesItems.htmlItems.length
    // const resultX = Math.cos(degree * Math.PI / 180) * r + r;
    // const resultY = Math.sin(degree * Math.PI / 180) * r + r;

    // target.style.transform = `translate( ${resultX - l}%, ${resultY - h}% )`
    // console.log(Math.cos(angle * (Math.PI / 180)))
    // console.log(Math.cos(angle * (Math.PI / 180)) / Math.random())
    // const resultX = Math.cos(angle * (Math.PI / 180)) / Math.random()

    // const startTime = Date.now()
    // const update = () => {
    //   const now = Date.now()
    //   const timeDiff = (now - startTime)
    //   const progress = timeDiff / time
    //   if (progress < 0 || progress > 1) {
    //     return
    //   }
    //   requestAnimationFrame(update)
    // }
    // requestAnimationFrame(update)
  }

  mainElements.htmlBox.addEventListener('click', (element) => {
    if (existsHtmlItem) {
      htmlControler.createElements()
      htmlControler.appendElements()
      techSearch(createdhtmlItem, languagesItems.htmlItems)

      for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {
        createdhtmlItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdhtmlItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"
        // animateTranslate(createdhtmlItem[itemIndex], )
        const target = createdhtmlItem[itemIndex]
        const angle = 360 / languagesItems.htmlItems.length
        const degree = angle * itemIndex + Math.floor(Math.random() * 20)
        const syahen = 100 + ((200 - 100))
        const resultX = Math.floor(Math.cos(degree * (Math.PI / 180)) * syahen)
        const resultY = Math.floor(Math.sin(degree * (Math.PI / 180)) * syahen)
        console.log(resultX, resultY)

        target.style.transform = `translate( ${resultX - 50}%, ${resultY - 50}% )`
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
        // animateTranslate(createdcssItem[itemIndex], )
        const target = createdcssItem[itemIndex]
        const angle = 360 / languagesItems.cssItems.length
        const degree = angle * itemIndex + Math.floor(Math.random() * 20)
        console.log(degree)
        const syahen = 100 + ((200 - 100))
        const resultX = Math.cos(degree * (Math.PI / 180)) * syahen
        const resultY = Math.sin(degree * (Math.PI / 180)) * syahen
        target.style.transform = `translate( ${resultX - 50}%, ${resultY - 50}% )`
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
        // const start = {
        //   X: -50,
        //   Y: -50,
        // }
        // const end = {
        //   X: Math.floor(Math.random() * 401) - 200,
        //   Y: Math.floor(Math.random() * 651) - 275,
        // }
        // animateTranslate(createdjsItem[itemIndex], 2000, start, end)
        const target = createdjsItem[itemIndex]
        const angle = 360 / languagesItems.jsItems.length
        const degree = angle * itemIndex + Math.floor(Math.random() * 20)
        console.log(degree)
        const syahen = 100 + ((200 - 100))
        const resultX = Math.cos(degree * (Math.PI / 180)) * syahen
        const resultY = Math.sin(degree * (Math.PI / 180)) * syahen
        target.style.transform = `translate( ${resultX - 50}%, ${resultY - 50}% )`
      }
      existsJsItem = false
    }
  })

})()

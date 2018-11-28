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
    jsItems: ["100", "200", "300", "400", "500"]
  }

  let htmlItemCreate = true
  let cssItemCreate = true
  let jsImteCreate = true
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

  mainElements.htmlBox.addEventListener('click', (element) => {
    if (htmlItemCreate) {
      htmlControler.createElements()
      htmlControler.appendElements()
      techSearch(createdhtmlItem, languagesItems.htmlItems)

      for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {
        // const randomNumberX = (Math.floor(Math.random() * 11) - 5)
        // const randomNumberY = (Math.floor(Math.random() * 11) - 5)
        // const style = window.getComputedStyle(mainElements.htmlBox);
        // console.log(createdhtmlItem[itemIndex]);

        createdhtmlItem[itemIndex].classList.add('active');
        createdhtmlItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
        createdhtmlItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"



        htmlItemCreate = false
      }
    } else {
      console.log(htmlItemCreate)
    }
  })

  // createdhtmlItem[0].style.top = (element.pageY / 10) - 2 + 'rem';
  // createdhtmlItem[0].style.left = (element.pageX / 10) - 2 + 'rem';

  // mainElements.cssBox.addEventListener('click', (element) => {
  //   if (cssItemCreate) {
  //     cssControler.createElements()
  //     cssControler.appendElements()
  //     techSearch(createdcssItem, languagesItems.cssItems)

  //     for (let itemIndex = 0; itemIndex < languagesItems.cssItems.length; itemIndex++) {

  //       createdcssItem[itemIndex].style.left = (element.pageX / window.innerWidth) * 100 + "%"
  //       createdcssItem[itemIndex].style.top = (element.pageY / window.innerHeight) * 100 + "%"


  //       cssItemCreate = false
  //     }

  //   }
  // })

  // mainElements.jsBox.addEventListener('click', () => {
  //   if (jsImteCreate) {
  //     jsControler.createElements()
  //     jsControler.appendElements()
  //     techSearch(createdjsItem, languagesItems.jsItems)
  //     jsImteCreate = false
  //   }
  // })

})()

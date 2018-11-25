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
    constructor(languageItems, createdItems, languageTypeItem,
    ) {
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

  const jsControler = new elementControler(languagesItems.jsItems, createdjsItem, "javascriptItem")



  const techSearch = (createdItems, languagesList) => {
    for (let item = 0; item < languagesList.length; item++) {
      createdItems[item].addEventListener('click', () => {
        const searchURL = 'https://www.google.com/search?q=';
        window.open(searchURL + languagesList[item])
      })
    }
  }

  window.onload = function () {
    const htmlLocation = mainElements.htmlBox.getBoundingClientRect();
    console.log(htmlLocation.left);   // x座標(絶対座標)
    console.log(htmlLocation.right);   // x座標(絶対座標)
    console.log(htmlLocation.top);    // y座標(絶対座標)
    console.log(htmlLocation.width);  // 幅
    console.log(htmlLocation.height); // 高さ
  }


  // createdhtmlItem[0].style.position = 'absolute';
  // createdhtmlItem[0].style.top = '24%';
  // createdhtmlItem[0].style.left = '50%';

  mainElements.htmlBox.addEventListener('click', () => {
    if (htmlItemCreate) {
      htmlControler.createElements()
      htmlControler.appendElements()
      techSearch(createdhtmlItem, languagesItems.htmlItems)
      htmlItemCreate = false
    }
  })


  mainElements.cssBox.addEventListener('click', () => {
    if (cssItemCreate) {
      cssControler.createElements()
      cssControler.appendElements()
      techSearch(createdcssItem, languagesItems.cssItems)
      cssItemCreate = false
    }
  })

  mainElements.jsBox.addEventListener('click', () => {
    if (jsImteCreate) {
      jsControler.createElements()
      jsControler.appendElements()
      techSearch(createdjsItem, languagesItems.jsItems)
      jsImteCreate = false
    }
  })

})()

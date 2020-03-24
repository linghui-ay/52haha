const jsonData = require('./content/db.json')
exports.createPages = async ({ actions: { createPage } }) => {
  const articles = jsonData.articles
  const imgs = jsonData.imgs
  const girls = jsonData.girls
  var articleArr = [];
  var articlePage = 1;
  const articleNumPages = Math.ceil(articles.length / 20);
  function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }
  let topArr = getRandomArrayElements(girls , 3);
  articles.forEach((article,index,obj) => {
    articleArr.push(article);
    if (articleArr.length >= 20 || index === obj.length - 1){
      createPage({
        path: articlePage === 1 ? `/` : `/duanzi/page/${articlePage}`,
        component: require.resolve(`./src/templates/index.js`),
        context: { 
          articleArr,
          articlePage,
          articleNumPages,
          topArr
        },
      })
      articlePage++;
      articleArr = [];
    }
    let prevId = 0,
        nextId = 0;
    if (index !== 0) {
      prevId = obj[index - 1].id;
    }
    if (index !== obj.length - 1) {
      nextId = obj[index + 1].id
    }
    let aboutData = getRandomArrayElements(articles , 6);
    createPage({
      path: `/duanzi/${article.id}`,
      component: require.resolve(`./src/templates/duanzi.js`),
      context: { article,prevId,nextId,topArr,aboutData },
    })
  })

  var picArr = [];
  var picPage = 1;
  const picNumPages = Math.ceil(imgs.length / 20)
  imgs.forEach((img, index, obj) => {
    picArr.push(img);
    if (picArr.length >= 20 || index === obj.length - 1){
      createPage({
        path: picPage === 1 ? `/pic/` : `/pic/page/${picPage}`,
        component: require.resolve(`./src/templates/pic.js`),
        context: { 
          picArr,
          picPage,
          picNumPages,
          topArr
        },
      })
      picPage++;
      picArr = [];
    }
    let prevId = 0,
        nextId = 0;
    if (index !== 0) {
      prevId = obj[index - 1].id;
    }
    if (index !== obj.length - 1) {
      nextId = obj[index + 1].id
    }
    let aboutData = getRandomArrayElements(imgs , 6);
    createPage({
      path: `/pic/${img.id}`,
      component: require.resolve(`./src/templates/img.js`),
      context: { img, prevId, nextId,topArr,aboutData },
    })
  })

  var girlArr = [];
  var girlPage = 1;
  const girlNumPages = Math.ceil(girls.length / 20)
  girls.forEach((girl, index, obj) => {
    girlArr.push(girl);
    if (girlArr.length >= 20 || index === obj.length - 1){
      createPage({
        path: girlPage === 1 ? `/fuli/` : `/fuli/page/${girlPage}`,
        component: require.resolve(`./src/templates/fuli.js`),
        context: { 
          girlArr,
          girlPage,
          girlNumPages,
          topArr
        },
      })
      girlPage++;
      girlArr = [];
    }
    let prevId = 0,
        nextId = 0;
    if (index !== 0) {
      prevId = obj[index - 1].id;
    }
    if (index !== obj.length - 1) {
      nextId = obj[index + 1].id
    }
    let img = girl;
    let aboutData = getRandomArrayElements(girls , 6);
    createPage({
      path: `/pic/${girl.id}`,
      component: require.resolve(`./src/templates/img.js`),
      context: { img, prevId, nextId,topArr, aboutData },
    })
  })

}
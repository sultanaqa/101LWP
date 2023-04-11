// 4. sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın.


let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`
console.log("vergullerin sayi:",sampleNews.split(',').length-1);
console.log("noqtelerin sayi:",sampleNews.split('.').length-1);

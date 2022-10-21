const tooltipTexts = document.getElementsByClassName('tooltiptext');
const tootipTextsArr = [...tooltipTexts];

if (window.innerWidth < 1240) {
    console.log(typeof (tootipTextsArr));
    console.log(tootipTextsArr);
    tootipTextsArr.forEach(item => item.style.display = 'none');
};
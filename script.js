function fetchXMLData() {
  fetch(
    'https://raw.githubusercontent.com/severdia/PlayShakespeare.com-XML/master/playshakespeare_editions/ps_midsummer_nights_dream.xml'
  )
    .then((response) => {
      return response.text();
    })
    .then(function (xml) {
      const parser = new DOMParser();
      let xmlDoc = parser.parseFromString(xml, 'text/xml');
      const randomLines = [];

      let nodeList = xmlDoc.getElementsByTagName('line');
      // let node = nodeList.item(
      //   Math.floor(Math.random() * nodeList.length)
      // ).innerHTML;

      let linesNumber = document.getElementById('lorem-lines').value;

      function lineInputResult() {
        for (let i = 0; i < linesNumber; i++) {
          randomLines.push(
            nodeList.item(Math.floor(Math.random() * nodeList.length)).innerHTML
          );
        }

        if (linesNumber <= nodeList.length && linesNumber != 0) {
          document.getElementById('play').innerHTML = randomLines;
        }
      }

      lineInputResult();
    });
}

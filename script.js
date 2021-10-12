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

      let nodeList = xmlDoc.getElementsByTagName('line');
      let node = nodeList.item(
        Math.floor(Math.random() * nodeList.length)
      ).innerHTML;

      let linesNumber = document.getElementById('lorem-lines').value;

      function lineInputResult() {
        // document.getElementById('play').innerHTML = node;

        if (linesNumber <= nodeList.length && linesNumber != 0) {
          document.getElementById('play').innerHTML = node;
        }
      }

      console.log(linesNumber);
      console.log(node);
      lineInputResult();
    });
}

// document.getElementById('play').innerHTML =
//   xmlDoc.getElementsByTagName('play')[0].innerHTML;

// document.getElementById('lines').innerHTML =
//   xmlDoc.getElementsByTagName('line').length;

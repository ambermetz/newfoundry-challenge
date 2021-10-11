//  For a coding challenge, write a script for a lorem ipsum generator using one or more plays of William Shakespeare (found here in XML https://github.com/severdia/PlayShakespeare.com-XML/tree/master/playshakespeare_editions) as the source dictionary.
//  For example, you could provide a character name or a play and a number representing the number of sentences and the script would either print or return the result.
//  This can be in any language or framework you're comfortable in and feel free to come up with ways that this could be made more user-friendly (whether through documentation, a README, instructions, etc) or more specific in what results it could return.

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
      // let data = xmlDoc.getElementsByTagName('act')[0].textContent;
      // let lines = xmlDoc.getElementsByTagName('line').length;
      // console.log(lines);

      document.getElementById('play').innerHTML =
        xmlDoc.getElementsByTagName('play')[0].innerHTML;

      document.getElementById('lines').innerHTML =
        xmlDoc.getElementsByTagName('line').length;
    });
}

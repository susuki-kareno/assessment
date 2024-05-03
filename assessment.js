(function() {
  'use strict';
  const userNameInput = document.getElementById('user-name');
  const assessmentButton = document.getElementById('assessment');
  const resultDivided = document.getElementById('result-area');
  const tweetDivided = document.getElementById('tweet-area');
  
  /**
  /* Delete child elements selected all
  /* @param {HTMLElement} element HTML element
  */
  function removeAllChildren(element) {
    while(element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
      return;
    }
    
    // making assessment result area
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = 'Assessment Result';
    resultDivided.appendChild(header);
    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    // making tweet area
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D&text=' + encodeURIComponent(result);
    anchor.setAtteibute('href', hrefValue);
    anchor.className = 'twetter-hashtag-button';
    anchor.innerText = 'Tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
    tweeetDivided.appendChild(anchor);
    twttr.widgets.load();
  };

  userNameInput.onKeydown = (event) => {
    if (event.keyCode === 13) {
      assessmentButton.onclick();
    }
  };
})();
    
  
  

  
 

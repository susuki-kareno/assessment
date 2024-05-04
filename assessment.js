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
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.innerText = 'Tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
    tweetDivided.appendChild(anchor);
    twttr.widgets.load();
  };

  userNameInput.onkeydown = (event) => {
    if (event.keyCode === 13) {
      assessmentButton.onclick();
    }
  };

  const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声はひまを惹きつけ心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさが成功をもたらします。',
    '{userName}のいいところは知識です。{userName}の博識を人々が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}の特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察力に人々が助けられます。',
    '{userName}のいいところは見た目です。{userName}の魅力に皆が気をひかれます。',
    '{userName}のいいところは決断力です。{userName}の決断に助けられる人々がいます。',
    '{userName}のいいところは思いやりです。{userName}に気にかけられた人々が感謝しています。',
    '{userName}のいいところは感受性です。{userName}の感性に共感する人々がいます。',
    '{userName}のいいところは節度です。{userName}の謙虚さに人々が感謝しています。',
    '{userName}のいいところは好奇心です。{userName}の挑戦を人々は魅力に感じています。',
    '{userName}のいいところは気配りです。{userName}の配慮が人々を救っています。',
    '{userName}のいいところは全てです。{userName}そのものがよいところなのです。',
    '{userName}のいいところは自制心です。{userName}が衝動を抑えることを人々が評価しています。',
    '{userName}のいいところは優しさです。あなたの優しさに多くの人々が癒されています。'
    ];

  /**
  * return assessment result when enter user-name
  * @param {string} userName user-name
  * @return {string} assessment result
  */
  function assessment(userName) {
    // sum all chara codes
    let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++) {
      sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }
    // div sum by answers num and get answers index
    const index = sumOfcharCode % answers.length;
    let result = answers[index];
    result = result.replace(/{userName}/g, userName);
    return result;
  }

  // test code
  console.assert(
    assessment('太郎') === '太郎のいいところは決断力です。太郎の決断に助けられる人々がいます。',
    'Error at replace user-name'
  );
  console.assert(
    assessment('太郎') === assessment('太郎'),
    'Error at get same result when enter same user-name'
  );
})();

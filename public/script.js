document.getElementById('donkeyBtn').addEventListener('click', () => {
  fetch('/fact/only_donkeys')
    .then(res => res.json())
    .then(data => {
      document.getElementById('factBox').innerText = data.fact;
    });
});
document.getElementById('mythBtn').addEventListener('click', () => {
  fetch('/fact/myth')
    .then(res => res.json())
    .then(data => {
      document.getElementById('factBox').innerText = data.fact;
    });
});
document.getElementById('visitRoscommonBtn').addEventListener('click', () => {
  fetch('/fact/visitor_attraction')
    .then(res => res.json())
    .then(data => {
      document.getElementById('factBox').innerText = data.fact;
    });
});
document.getElementById('roscommonBtn').addEventListener('click', () => {
  fetch('/fact/general_knowledge')
    .then(res => res.json())
    .then(data => {
      document.getElementById('factBox').innerText = data.fact;
    });
});
document.getElementById('funButton').addEventListener('click', () => {
  fetch('/fact/fun')
    .then(res => res.json())
    .then(data => {
    document.body.innerHTML += `<dialog open>'You have been awarded 1x Fun'</dialog>`
    });
});
document.getElementById('onlyGransBtn').addEventListener('click', () => {
  fetch('/fact/only_grans')
    .then(res => res.json())
    .then(data => {
      document.getElementById('factBox').innerText = data.fact;
    });
});
document.getElementById('trueFactsBtn').addEventListener('click', () => {
  fetch('/fact/true_facts')
    .then(res => res.json())
    .then(data => {
      document.getElementById('factBox').innerText = data.fact;
    });
});
document.getElementById('maginotLineBtn').addEventListener('click', () => {
  fetch('/fact/maginot_line')
    .then(res => res.json())
    .then(data => {
      document.getElementById('factBox').innerText = data.fact;
    });
});

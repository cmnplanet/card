// let container = document.querySelector('.list')


let req = new XMLHttpRequest();
req.addEventListener("load", githContent);
req.open("GET", "https://api.github.com/users/cmnplanet");
req.send();


function githContent () {
  let data = JSON.parse(this.responseText);
  let name = 'Name: ' +`${tbd.name}`;
  let gURL = 'GitHub URL: ' +`${tbd.url}`;
  let eMail = 'Email: ' + `${tbd.email}`;
  let business = 'Company: ' + `${tbd.company}`;
  let site = 'Website: ' + `${tbd.name}`;

  // data.results.forEach( function (person) {
  //   name += `<li>${person.name}</li>`;
  // });

  function bioContent () {
    let data = JSON.parse(this.responseText);
    let bio = `${tbd.bio}`;
    let img = `${tbd.image}`;

    data.results.forEach( function (person) {
      name += `<li>${person.name}</li>`;
    });

  container.innerHTML = list;
}

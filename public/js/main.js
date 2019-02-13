// JS Here!
fetch('http://localhost:3000/api/nav.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);

    const navBar = document.getElementById("navBar")
    navBar.appendChild(addItems(myJson,"menu","menuItem"));



    function addItems(data,classUl,classLi){

      const listNavBar =document.createElement("ul")
      listNavBar.setAttribute("class",classUl);

      data.items.forEach(currentItem=> {

        let currentLi =document.createElement("li");
        currentLi.setAttribute("class",classLi);

        let currentChild =document.createElement("a");

        currentChild.innerHTML=currentItem.label;
        currentChild.setAttribute("href",currentItem.url);
        currentLi.appendChild(currentChild);
        listNavBar.appendChild(currentLi);

        if(currentItem.items!== undefined&&currentItem.items.length){
          currentChild.appendChild(addItems(currentItem,"dropDown","dropDownItem"));
        }


      })

      return listNavBar;
    }



  });



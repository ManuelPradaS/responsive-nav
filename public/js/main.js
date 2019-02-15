// JS Here!
fetch('http://localhost:3000/api/nav.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        //Call nav bar
        const navBar = document.getElementById("navBar");

        //Create a div to contain the logo
        let endavaLogo = document.createElement("div");
        endavaLogo.setAttribute("class", "logo");

        //Append the menu to navBar
        navBar.appendChild(addItems(myJson, "menu", "menuItem"));


        function addItems(data, classUl, classLi) {

            const menuList = document.createElement("ul");
            menuList.setAttribute("class", classUl);

            data.items.forEach(currentItem => {

                //Create current menuitem
                let currentLi = document.createElement("li");
                currentLi.setAttribute("class", classLi);
                // currentLi.setAttribute("label", currentItem.label)

                //Crate a link
                let currentChild = document.createElement("a");
                currentChild.innerHTML = currentItem.label;
                currentChild.setAttribute("href", currentItem.url);


                if (currentItem.items !== undefined && currentItem.items.length) {
                    currentChild.appendChild(addChildDropDown(currentItem, "dropDownMenu"))
                    //Add currentChild to currentLi
                    //Create a button, and add to the menu.
                    // const thisButton = document.createElement("button");
                    currentLi.setAttribute("onclick", "dropDownMenu()");
                    currentLi.setAttribute("id", "dropButton");
                    // thisButton.setAttribute("class", "dropButton");
                    // currentLi.appendChild(thisButton);
                }


                currentLi.appendChild(currentChild);

                //Add currentLi to menu list
                menuList.appendChild(currentLi);


            });

            return menuList;
        }

        function addChildDropDown(data, divName) {

            //Div for contain the dropDownMenu
            const dropDown = document.createElement("div");
            dropDown.setAttribute("class", divName);

            // thisButton.setAttribute("tag", "Dropdown");
            // thisButton.innerHTML = data.label;


            //Create a div to contain the items
            const content = document.createElement("div");
            content.setAttribute("class", "dropdown-content");
            content.setAttribute("id", "myDropdown");

            data.items.forEach(currentItem => {

                let currentChild = document.createElement("a");
                currentChild.setAttribute("href", currentItem.url);
                currentChild.innerHTML = currentItem.label;
                content.appendChild(currentChild);


            })
            dropDown.appendChild(content);

            return dropDown;
        }

















    });


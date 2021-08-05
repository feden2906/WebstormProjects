
let usersDiv = document.getElementById('allUsers');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        for (const user of value) {
            let userContainer = document.createElement('div');
            userContainer.classList.add('user-container');

            let idName = document.createElement('div');
            idName.innerText = user.id + '. ' + user.name;
            idName.classList.add('each_user');


            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'user details';

            userContainer.append(idName);
            userContainer.append(btn);
            usersDiv.append(userContainer);

            btn.onclick = function (){
                location.href = `user-details.html?user=${JSON.stringify(user)}`; //======>>>
            };

        }

    });


let usersDiv = document.getElementById('allUsers');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())

    .then(value => {

        for (const user of value) {

            let idName = document.createElement('div');
            idName.innerText = user.id + '. ' + user.name;
            idName.classList.add('each_user');

            let btn = document.createElement('button');
            btn.innerText = 'user details';
            //btn.href = `user-details.html?user=${JSON.stringify(user)}`;
            btn.onclick = function (){
                location.href = `user-details.html?user=${JSON.stringify(user)}`;
            };



            usersDiv.append(idName);
            usersDiv.append(btn);





        }
    });

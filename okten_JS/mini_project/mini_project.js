
let usersDiv = document.getElementsByClassName('allUsers')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())

    .then(users => {

        for (let user of users) {
            let idName = document.createElement('div');
            idName.innerText = `${user.id} - ${user.name}`;
            idName.classList.add('each_user');
            usersDiv.append(idName);

            let btn = document.createElement('button');
            btn.innerText = 'user details';
            usersDiv.append(btn);

            btn.href = `user-details.html?user=${JSON.stringify(user)}`
            //idName.append(btn);
            //usersDiv.append(idName);
        }
    });

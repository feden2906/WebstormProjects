
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())

    .then(users => {
        let usersDiv = document.getElementsByClassName('allUsers')[0];
        for (let userIdName of users) {
            let idName = document.createElement('div');
            idName.innerText = `${userIdName.id} - ${userIdName.name}`;
            idName.classList.add('each_user');
            usersDiv.append(idName);

            let btn = document.createElement('button');
            btn.innerText = 'user details';
            usersDiv.append(btn);
        }
    });

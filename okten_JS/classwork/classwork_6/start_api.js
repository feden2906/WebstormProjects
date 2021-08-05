/*
1.
Отримати відповідь з цього ресурсу відповідь,
та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/post
зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста*/
//https://jsonplaceholder.typicode.com/posts/1/comments

fetch ('https://jsonplaceholder.typicode.com/posts')

.then(item => item.json())
.then(posts => {
    for (let post of posts) {

        let userPosts = document.createElement('div');

        let title = document.createElement('h2');
        title.innerText = `${post.id} - ${post.title}`;
        userPosts.append(title);

        let btn = document.createElement('button');
        btn.innerText = `all comments`;
        title.append(btn);

        btn.addEventListener("click",   function (){

            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then (item => item.json())
                .then(comments => {

                    const el = [...document.getElementsByClassName('remove')]
                    el.map((e) => e.innerText = '')
                    let commentsWrapper = document.createElement('div')
                    commentsWrapper.classList.add('remove')


                    for (const comment of comments) {
                        let userComments = document.createElement('div')


                        let commentBody = document.createElement('p');
                        commentBody.innerText = `${comment.body}`
                        userComments.append(commentBody);

                        commentsWrapper.append(userComments);

                    }
                    userPosts.append(commentsWrapper)
                })

        })


        document.body.append(userPosts);


    }
}
)
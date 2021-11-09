const posts = document.getElementById('posts')

const dataPosts = fetch('https://jsonplaceholder.typicode.com/posts')
const dataUser = (userId) => fetch('https://jsonplaceholder.typicode.com/users/'+userId)

async function loadUsers(post){
    
    
    dataUser
        .then(result=> result.json())
        .then(user=> {
            
            results += `
                <div class="post">
                    <a>ID: ${post.id}</a>
                    <a>User: ${post.userId}</a>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    
                </div>
            `
            console.log(results);
        })
    console.log(results.length);
    
}


const cargar = async() =>{
    const postsD = await dataPosts;
    const jPosts = await postsD.json()

    let results = ''
    jPosts.forEach(post => {
        results += `
                <div class="post">
                    <a>ID: ${post.id}</a>
                    <a>User: ${post.userId}</a>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
    });
    console.log(results);
    posts.innerHTML = results;
}

cargar()
// const delayed = ( x )=> new Promise((resolve, reject)=> {
//     if(x > 3){
//         setTimeout(()=> resolve(x),500*x)
//     }else{
//         reject('El # no es mayor a 3')
//     }
// })
// delayed(2).then(x=> console.log(x));
// const promise = Promise.resolve(30);

// promise.then(x=> console.log(x))
// try {
//     console.log(2* 6);
//     throw 'Error al multiplicar';
//     //Otro proceso
// } catch (error) {
//     console.log(error);
// }
// promise
//     .then(result => {
//         console.log(result);
//         return Promise.resolve(result)
//     })
//     .then(result => Promise.resolve(result * 2))
//     .then(result => Promise.reject('Hubo un Error en el proceso!!'))
//     .then(result => console.log(result))
//     .catch(e=>{
//         console.log(e);
//     });
// for(let i=0;i<1000;i++){
//     posts.innerHTML += `<a href="#">${i+1}</a><br>`;
// }
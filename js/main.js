const posts = document.getElementById('posts')

const dataPosts = fetch('https://jsonplaceholder.typicode.com/posts')
const dataUser = (userId) => fetch('https://jsonplaceholder.typicode.com/users/'+userId)


const cargar = async() =>{
    const postsD = await dataPosts;
    return await postsD.json()
    // let results = ''
    // jPosts.forEach(post => {
    //     results += `
    //             <div class="post">
    //                 <a>ID: ${post.id}</a>
    //                 <a>User: ${post.userId}</a>
    //                 <h3>${post.title}</h3>
    //                 <p>${post.body}</p>
    //             </div>
    //         `
    // });
    // console.log(results);
    // posts.innerHTML = results;
}

const cargarUser = async(id)=>{
    const user = await dataUser(id)
    return await user.json()
}

function showPosts(post, user){
    
    user.then(x=>{
        posts.innerHTML += `
                <div class="post">
                    <a>ID: ${post.id}</a>
                    <a href="${x.id}">User: ${x.name}</a>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    
                </div>
            `
    })
}

// cargar().then(x=> x.forEach(element => {
//     showPosts(element, cargarUser(element.userId))
// }))
// const x = dataPosts.then(x=> x.json())
//     .then(x=>{
//         for(var item in x){
//             return dataUser(x[item].userId)
//         }
        
//     })
//     .then(x=> console.log(x))
//     .catch(e=> console.log(e))
const datos = async()=>{
    try {
        const x = await dataPosts
        const xjson = await x.json()
        for(var index in xjson){
            let post = xjson[index]
            const u = await dataUser(post.userId)
            const ujson = await u.json()
            let user = ujson
            posts.innerHTML += `
                <div class="post">
                    <a>ID: ${post.id}</a>
                    <a href="${user.id}">User: ${user.name}</a>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    
                </div>
            `
        }
        
    } catch (error) {
        console.log(error);
    }
}

datos()


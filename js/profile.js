const query = window.location.search.substring(1)
const profileUser = (id) => 
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
const userTitle = document.getElementById('user')

loadProfile()
//Nombre = adrian ruiz
//nombre = adrian%20ruiz
//?key=value&key=value

//key=value&key=value
//[0] = key=value
//[1..] = key=value
function convert_query_string(query){
    let array_query = query.split("&")
    let valores = {}
    for(var a =0; a<array_query.length; a++){
        var parejas = array_query[a].split('=')
        var key = decodeURIComponent(parejas[0])
        var value = decodeURIComponent(parejas[1])
        valores[key] = (value)
    }
    return valores
}

async function loadProfile(){
    const requestURL = convert_query_string(query)
    const userInfo = await profileUser(requestURL.id) 
    const user = await userInfo.json()
    userTitle.innerHTML = user.name
}
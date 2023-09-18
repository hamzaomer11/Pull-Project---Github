const query_search = document.getElementById('search').value

const access_token = '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'
const final_url = `https://api.github.com/users/${query_search}`

async function getUser() {
    await fetch(final_url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `token ${access_token}`,
        }
    })
    .then((res) => res.json())
    .then((data) => 
    document.getElementById('note').innerHTML = (data))
}
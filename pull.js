async function getUser() {
    const query_search = document.getElementById('search').value

    const access_token = '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'
    const final_url = `https://api.github.com/users/${query_search}`;
    await fetch(final_url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    })
    .then((res) => res.json())
    .then((data) => 
    document.getElementById('note').innerHTML = (JSON.stringify(data, null, 2)))
    .catch ((error) => {
        console.error('Error:', error);
        document.getElementById('note').innerHTML = 'An error occurred.';
    })
}

function scrollSection() {
    document.getElementById("scroll-container").style.overflow = "scroll";
}



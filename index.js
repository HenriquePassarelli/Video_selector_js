
const getQuery = async () => {

    let apiKey = "your key"

    let url = `https://pixabay.com/api/videos/?key=${apiKey}&q=yellow+flowers`;

    let results = await fetch(url);
    let json = await results.json();
    return json;
}

let videos = getQuery().then((videos) => {
    let html = ''
    videos.hits.forEach((video) => {
        html += ` <option value="${video.id}">${video.id}</option> `
        document.querySelector('#video').innerHTML = html
    })
})

const btn = document.querySelector('#btn');
const sb = document.querySelector('#video');

btn.onclick = (e) => {
    e.preventDefault();
    const selectedValues = [].filter
        .call(sb.options, option => option.selected)
        .map(option => option.value);
    selectedVideo(selectedValues)
};

const selectedVideo = (value) => {
    let valuueInt = parseInt(value[0])
    getQuery().then((videos) => {
        let list = videos.hits
        let selected = list.filter((video) => video.id === valuueInt)
        videoPlayer(selected)
    })

}

const videoPlayer = (video) => {
    console.log(video[0].videos.medium)
    let videoSettings = video[0].videos.medium
    let html = `
    <iframe class="embed-responsive-item w-50" src="${videoSettings.url}&autoplay=1" allow="autoplay;" 
     frameborder="0" 
    webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    `
    document.querySelector('#player').innerHTML = html;

}


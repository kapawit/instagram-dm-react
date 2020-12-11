
export function GetRandomImg(size) {
    const max = 500;
    const url = "https://picsum.photos/id/"
    const dataImg = url+Math.floor(Math.random() * max) + "/" +size

    return dataImg;
}

export function GetNumber(n) {
    const num = [];
    for(var i = 1; i <= n; i++){
        num.push(i);
    }
    return num;
}

const AsyncFetch = async (url) => {
    const urlFetch = await fetch(url)
    return urlFetch.status === 200 && 'json' in urlFetch ? 
        await urlFetch.json() : [] 
}
export default AsyncFetch
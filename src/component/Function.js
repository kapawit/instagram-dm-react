const max = 500;
const url = "https://picsum.photos/id/"

function GetRandomImg(size) {
    return url+Math.floor(Math.random() * max) + "/" +size;
}

export default GetRandomImg;
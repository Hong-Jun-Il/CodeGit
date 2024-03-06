const btn = document.querySelector('.btn');
const ip = document.querySelector('.title');
const div = document.createElement('div');
const img = document.createElement('img');
const bd = document.querySelector('body');
div.className = "wrapper";

btn.addEventListener('click', ()=>{
    if(ip.value == ''){
        alert('입력해라');
    }
    else{
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: {query: `${ip.value}`},
            headers: {Authorization: "KakaoAK faa6c9911e7fdc26eef6caf753eb1cda"}
        })
        .done((msg)=>{
            div.innerText = `${msg.documents[0].title}`;
            img.src = `${msg.documents[0].thumbnail}`;
            div.appendChild(img);
            bd.appendChild(div);

        })
    }
})

// faa6c9911e7fdc26eef6caf753eb1cda
// html内の要素を取得する
const target1 = document.getElementById("first");
const target2 = document.getElementById("second");
const target3 = document.getElementById("third");
const getH1 = document.getElementsByTagName("h1")[0];
const getH2One = document.getElementsByTagName("h2")[0];
const getH2Two = document.getElementsByTagName("h2")[1];
const getH2Three = document.getElementsByTagName("h2")[2];

const button = document.getElementById("button");
const getImage = document.getElementById("image1")
const createP = document.createElement("h2");

const list_imgs = {
    image2:document.getElementById("image2"),
    image3:document.getElementById("image3"),
    image4:document.getElementById("image4"),
    image5:document.getElementById("image5"),
    image6:document.getElementById("image6"),
    }

    //答え
const result = ["6","3","5"];

//ページの読み込み後、ゲーム説明
window.addEventListener('load', () => {
    window.alert("1着から3着までの番号を選んで、順位を当てよう！");
  });

//h1を押すとヒント表示
getH1.addEventListener('click', () => {
    window.alert("高配当を狙おう！ 1着:6号艇 - 2着:3号艇 - 3着:5号艇");
  });

//レーススタートbutton押すと入力項目に対して、的中、外れ 結果表示
button.addEventListener("click", () => {
    if(button.value !== "Race-Start"){
        location.reload()

    }else if(target1.value===""||target2.value===""||target3.value===""){
        window.alert("1着から3着までの番号を選んでね★");
    
    } else if(target1.value===result[0] && target2.value===result[1] && target3.value===result[2]){  

        for(let img in list_imgs){
            list_imgs[img].remove();
        }

        getImage.src= "./result_boatrace.png";
        getImage.style.width = "500px";

        button.style.backgroundColor="black";
        button.style.color="white";
        button.value = "Window-Reload";

        createP.innerText="的中です！100万舟券ゲット！";
        createP.style.fontSize = "30px";
        createP.style.color = "yellow";
        document.getElementById("input").appendChild(createP);  
        
        document.body.style.backgroundImage = "url('./GOOD-JOB.png')";
        document.body.style.backgroundSize =  contain; 

    } else{

        for(let img in list_imgs){
            list_imgs[img].remove();
        }

        getImage.src= "./money_fly_yen.png";
        getImage.style.width = "500px";
        button.style.backgroundColor="black";
        button.style.color="white";
        button.value = "Window-Reload";

        createP.innerText="ちーん。残念です！";
        createP.style.fontSize = "50px";
        createP.style.color = "red";
        createP.style.display = "block";
        document.getElementById("input").appendChild(createP);
    }


})

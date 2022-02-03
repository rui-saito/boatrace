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
//------------------------------------------------------------------

//答え
const result = ["6","3","5"];
//------------------------------------------------------------------

//ページの読み込み後、ゲーム説明を表示
window.addEventListener('load', () => {
    window.alert("1着から3着までの番号を選んで、順位を当てよう！");
  });
//------------------------------------------------------------------

//h1を押すとヒント表示
getH1.addEventListener('click', () => {
    window.alert("高配当を狙おう！ 1着:6号艇 - 2着:3号艇 - 3着:5号艇");
  });
//------------------------------------------------------------------

//レーススタートbutton押すと入力項目に対して、的中、外れ 結果表示
button.addEventListener("click", () => {

    //押されたボタンのvalue値が初期値でなければページをリロード
    if(button.value !== "Race-Start"){
        location.reload()

    //1着、2着、3着の値がどれか1つでも空白だったら記入するよう促す
    }else if(target1.value===""||target2.value===""||target3.value===""){
        window.alert("1着から3着までの番号を選んでね★");

    //1着、2着、3着の値が正解だったら
    } else if(target1.value===result[0] && target2.value===result[1] && target3.value===result[2]){

        //imgの2つ目から6つ目までを消す
        for(let img in list_imgs){
            list_imgs[img].remove();
        }

        //imgの1つ目を変更し、横幅を500pxに変更
        getImage.src= "./result_boatrace.png";
        getImage.style.width = "500px";

        //buttonの背景を黒、文字を白、valueを変更
        button.style.backgroundColor="black";
        button.style.color="white";
        button.value = "Window-Reload";

        //ゲーム開始時に作成したPタグにstyle情報を付与
        createP.innerText="的中です！100万舟券ゲット！";
        createP.style.fontSize = "30px";
        createP.style.color = "yellow";
        createP.style.backgroundColor = "hotpink";

        //作成したpタグをゲーム開始時ボタンのしたへ配置
        document.getElementById("input").appendChild(createP);

        //h1,h2を背景色に合う文字色へ、変更
        getH1.style.color = "white";
        getH2One.style.color = "yellow";
        getH2Two.style.color = "yellow";
        getH2Three.style.color = "yellow";


        //ページの背景を変更
        document.body.style.backgroundImage = "url('./ok.png')";
        // document.body.style.backgroundSize =  contain;
//------------------------------------------------------------------

     //ゲームに失敗した時は
    } else{

        //imgの2つ目から6つ目までを消す
        for(let img in list_imgs){
            list_imgs[img].remove();
        }

        //imgの1つ目を変更し、横幅を500pxに変更
        getImage.src= "./money_fly_yen.png";
        getImage.style.width = "500px";

        //buttonの背景を黒、文字を白、valueを変更
        button.style.backgroundColor="black";
        button.style.color="white";
        button.value = "Window-Reload";
        
        //ゲーム開始時に作成したPタグにstyle情報を付与
        createP.innerText="ちーん。残念です！ ご苦労！";
        createP.style.fontSize = "50px";
        createP.style.color = "red";
        createP.style.display = "block";
        document.getElementById("input").appendChild(createP);
    }


})
//------------------------------------------------------------------

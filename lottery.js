const sysLab = document.querySelector('label.system'),
    lab = document.querySelector('label.lottery'),
    userBtn = document.querySelector('.userBtn'),
    cleanBtn = document.querySelector('.cleanBtn');

let randomNum; // 랜덤 번호를 생성
let randomNums;
let randomNumt;

function lolChe(){
    randomNum = Math.ceil(Math.random() * 24);
    if(randomNum==24){
        lab.innerText = `\n으음 세종이는 [별]을하고`
    }else if(randomNum==1){
        lab.innerText = `\n으음 세종이는 [분노날개]를하고`
    }else if(randomNum==2){
        lab.innerText = `\n으음 세종이는 [속삭임]을하고`
    }else if(randomNum==3){
        lab.innerText = `\n으음 세종이는 [비취]를하고`
    }else if(randomNum==4){
        lab.innerText = `\n으음 세종이는 [빛비늘]을하고`
    }else if(randomNum==5){
        lab.innerText = `\n으음 세종이는 [신기루]를하고`
    }else if(randomNum==6){
        lab.innerText = `\n으음 세종이는 [조련사]를하고`
    }else if(randomNum==7){
        lab.innerText = `\n으음 세종이는 [비늘혐오자]를하고`
    }else if(randomNum==8){
        lab.innerText = `\n으음 세종이는 [축제]를하고`
    }else if(randomNum==9){
        lab.innerText = `\n으음 세종이는 [길드]를하고`
    }else if(randomNum==10){
        lab.innerText = `\n으음 세종이는 [폭풍]을하고`
    }else if(randomNum==11){
        lab.innerText = `\n으음 세종이는 [민첩사수]를하고`
    }else if(randomNum==12){
        lab.innerText = `\n으음 세종이는 [암살자]를하고`
    }else if(randomNum==13){
        lab.innerText = `\n으음 세종이는 [난동꾼]을하고`
    }else if(randomNum==14){
        lab.innerText = `\n으음 세종이는 [포병대]를하고`
    }else if(randomNum==15){
        lab.innerText = `\n으음 세종이는 [수호자]를하고`
    }else if(randomNum==16){
        lab.innerText = `\n으음 세종이는 [요술사]를하고`
    }else if(randomNum==17){
        lab.innerText = `\n으음 세종이는 [신비술사]를하고`
    }else if(randomNum==18){
        lab.innerText = `\n으음 세종이는 [일깨우는자]를하고`
    }else if(randomNum==19){
        lab.innerText = `\n으음 세종이는 [형상변환자]를하고`
    }else if(randomNum==20){
        lab.innerText = `\n으음 세종이는 [전사]를하고`
    }else if(randomNum==21){
        lab.innerText = `\n으음 세종이는 [기병대]를하고`
    }else if(randomNum==22){
        lab.innerText = `\n으음 세종이는 [용술사]를하고`
    }else if(randomNum==23){
        lab.innerText = `\n으음 세종이는 [전설]을하고`
    }

    randomNums = Math.ceil(Math.random() * 24);
    if(randomNums==24){
        lab.innerText += ` 동훈이는 [별]을 하게.`
    }else if(randomNums==1){
        lab.innerText = ` 동훈이는 [분노날개]를 하게.`
    }else if(randomNums==2){
        lab.innerText += ` 동훈이는 [속삭임]을 하게.`
    }else if(randomNums==3){
        lab.innerText += ` 동훈이는 [비취]를 하게.`
    }else if(randomNums==4){
        lab.innerText += ` 동훈이는 [빛비늘]을 하게.`
    }else if(randomNums==5){
        lab.innerText += ` 동훈이는 [신기루]를 하게.`
    }else if(randomNums==6){
        lab.innerText += ` 동훈이는 [조련사]를 하게.`
    }else if(randomNums==7){
        lab.innerText += ` 동훈이는 [비늘혐오자]를 하게.`
    }else if(randomNums==8){
        lab.innerText += ` 동훈이는 [축제]를 하게.`
    }else if(randomNums==9){
        lab.innerText += ` 동훈이는 [길드]를 하게.`
    }else if(randomNums==10){
        lab.innerText += ` 동훈이는 [폭풍]을 하게.`
    }else if(randomNums==11){
        lab.innerText += ` 동훈이는 [민첩사수]를 하게.`
    }else if(randomNums==12){
        lab.innerText += ` 동훈이는 [암살자]를 하게.`
    }else if(randomNums==13){
        lab.innerText += ` 동훈이는 [난동꾼]을 하게.`
    }else if(randomNums==14){
        lab.innerText += ` 동훈이는 [포병대]를 하게.`
    }else if(randomNums==15){
        lab.innerText += ` 동훈이는 [수호자]를 하게.`
    }else if(randomNums==16){
        lab.innerText += ` 동훈이는 [요술사]를 하게.`
    }else if(randomNums==17){
        lab.innerText += ` 동훈이는 [신비술사]를 하게.`
    }else if(randomNums==18){
        lab.innerText += ` 동훈이는 [일깨우는자]를 하게.`
    }else if(randomNums==19){
        lab.innerText += ` 동훈이는 [형상변환자]를 하게.`
    }else if(randomNums==20){
        lab.innerText += ` 동훈이는 [전사]를 하게.`
    }else if(randomNums==21){
        lab.innerText += ` 동훈이는 [기병대]를 하게.`
    }else if(randomNums==22){
        lab.innerText += ` 동훈이는 [용술사]를 하게.`
    }else if(randomNums==23){
        lab.innerText += ` 동훈이는 [전설]을 하게.`
    }
    
}

function talking(){
    randomNum = Math.ceil(Math.random() * 11);
    if(randomNum==10){
        lab.innerText = `\n으음 종은이는 어디갔나?`
    }else if(randomNum==1){
        lab.innerText = `\n으음 재고조사는 했어?`
    }else if(randomNum==2){
        lab.innerText = `\n으음 그래 동훈이.`
    }else if(randomNum==3){
        lab.innerText = `\n으음 검열이온다고 하네.`
    }else if(randomNum==4){
        lab.innerText = `\n으음 롤체는 할만한가?`
    }else if(randomNum==5){
        lab.innerText = `\n으음 나도 한판뜨지.`
    }else if(randomNum==6){
        lab.innerText = `\n으음 내 추천이 마음에 들지 않는가?`
    }else if(randomNum==7){
        lab.innerText = `\n으음 선수입장.`
    }else if(randomNum==8){
        lab.innerText = `\n으음 그래 들어가봐.`
    }else if(randomNum==9){
        lab.innerText = `\n으음 세종이.`
    }else if(randomNum==11){
        lab.innerText = `\n으음 파악파악.`
    }
}

userBtn.addEventListener('click',lolChe);
cleanBtn.addEventListener('click',talking);

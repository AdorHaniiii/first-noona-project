let insertNum = 0

if (insertNum == 0) {
    console.log("입력 : 0")
} else if (insertNum > 0) {
    console.log("입력 : 양수")
} else {
    console.log("입력 : 음수")
}

let grade = 70
if (grade >= 90 && grade <= 100) {
    console.log("점수 : A")
} else if (grade >=80 && grade <90) {
    console.log("점수 : B")
} else if (grade >=70 && grade <80) {
    console.log("점수 : C")
} else if (grade >=60 && grade <70) {
    console.log("점수 : D")
} else if (grade < 60) {
    console.log("점수 : F")
}

let skills = ["HTML","CSS","Javascript","React"]

if (skills.includes("Javascript") && skills.includes("React")) {
    console.log("합격")
} else if (skills.includes("Javascript") || skills.includes("React")) {
    console.log("예비")
} else {
    console.log("탈락")
}


let menu = 1

if (menu == 1){
    console.log("물건사기")
} else if (menu == 2){
    console.log("잔고확인")
} else {
    console.log("홈으로 돌아가기")
}


switch (menu){
    case 1 :
        console.log("물건사기")
        break;
    case 2 :
        console.log("잔고확인")
        break;
    default :
        console.log("홈으로 돌아가기")

}

for(let i = 0; i < 10; i+=2) {
    console.log("누나!!",i)
}

for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(i,"X",j," = ",i*j)
    }
}

let i = 2
while(i<10){
    console.log("while문 실행", i)
    i++;
}

let a = 0
for(let i = 1; i <= 100; i++){
    a += i
}
console.log(a)

let b = 1

let fruit = ["banana", "apple", "grape", "mango"]
console.log(fruit)
console.log(fruit[0])

fruit[0] = "cherry"
console.log(fruit)

fruit[2] = "tomato"
console.log(fruit)

// pop : 마지막 배열 빼기
fruit.pop()
console.log(fruit)

// push : 마지막 배열에 집어넣기
fruit.push("pineapple")
console.log(fruit)

// includes : 아이템 있는지 없는지 확인
console.log(fruit.includes("apple"))

// indexOf : 인덱스 번호 알려줌
fruit.indexOf("apple")
console.log(fruit.indexOf("apple"))

// slice : 배열 아이템을 잘라내는 역할 (시작점, 끝점(끝점은 미포함)) 기존 배열은 그대로 -> 있는거 뽑아쓸 떄
console.log(fruit.slice(1,3))

// splice : 배열 아이템을 잘라내는 역할(시작점,갯수) 원본 파괴 -> 변경하고 싶을 때
fruit.splice(0,2)
console.log(fruit)


let patient = {
    name : "jimin",
    age : 17,
    disease : "cold"
}

console.log(patient)
console.log(patient.age)
console.log(patient["age"])
patient.name = "JK"
console.log(patient.name)

let patientList = [{name:"jimin", age:18},{name:"JK",age:22},{name:"jhope",age:19}]
console.log(patientList)
console.log("첫 번째 환자는:",patientList[0])
console.log("첫 번째 환자의 나이는?",patientList[0].age)

let age = 23
let license = true


if(age > 20){
    if (license != true) {
        console.log("운전이 가능합니다.")
    } else {
        console.log("면허를 따세요.")
    }
} else {
    console.log("운전 불가능합니다.")
}



function makeBurger(type, size, num){
    console.log("빵두기")
    console.log("상추두기")
    if (num < 1) {
        return "버거 개수가 0개 입니다."
    }
    if (type == "불고기"){
        console.log("고개패티두기")
    } else if (type == "새우"){
        console.log("새우패티두기")
    }
    console.log("뚜껑덥기")
    console.log(type,"버거",size,"사이즈",num,"개 준비완료")

    return "완료되었습니다."

}

function serveCoke(){
    console.log("콜라통 선택")
    console.log("얼음담기")
}

function serveFrenchFries(){
    console.log("감튀박스선택")
    console.log("감튀 담기")
}


let result = makeBurger("새우", "L", 0)
console.log("버거 프로세스 결과",result)
// makeBurger()
// serveCoke()
// serveFrenchFries()
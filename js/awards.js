// create elements
function awards(){
    let src = ["images\\01ba12730bd86c8858c1e2d86c7d150d_5665148762126820826.png","images\\22542ef6122f5ad4ac1c3834d11cdfb4_8505332314511574414.png", "images\\bddc10e07950d708a371861e7be32928_4601996924011219727.png",
        "images\\f4450e0ef470f777fca0b3dd95813734_1653002626503274756.png"];
    let block = document.getElementById('awards-container');
    let div_elem;
    let img_component;
    let count_award;
    let img, day;

    let count = {
        0 : 20,
        1 : 1,
        2 : 5,
        3 : 10
    };
    
}
awards();


// mark

// Установить количество секунд для отсчета 
// В данном случае 5 секунд 
let seconds = 5;
// День начала отметок
let day = 1;
// установка вызова фукнции каждую 1 секунду для уменьшения времени на 1 (можно установить на количество seconds)
let time_to_mark = setInterval(() => {
    if (seconds != 0) {seconds--}
}, 1000)
    
let days = {}
for (let i = 1; i <= 30; i++){
    days[i] = false; 
}

function editComment(commentId) {
  const newComment = prompt('Введите новый комментарий:');
  // Ваш Node.js код для редактирования комментария в базе данных SQLite
}

function deleteComment(commentId) {
  // Ваш Node.js код для удаления комментария из базы данных SQLite
}

// Загрузка комментариев при загрузке страницы
loadCommentsFromDB();

// Установка события для элементов
awardElement = document.querySelectorAll(".-award_element")
awardElement.forEach(element => {
    element.addEventListener('click', function() {
        let id = this.id;
        if (id == ("day-"+day)){
            if (seconds == 0 && day <= 30){
                let mark = document.createElement("span");
                let block = document.getElementById("day-"+day);
                
                mark.className = "-mark_set";
                block.append(mark);
                block.style['opacity'] = ".3"; 
                day++;
                days[day] = true;
                seconds = 0;
                
            }

        }
    });
});
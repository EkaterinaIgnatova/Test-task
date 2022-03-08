function getDataInfo(date){
    const ms = Date.parse(date.split('.').reverse().join('-'));
    const dayNum =  new Date(ms).getDay();
    // первый вариант преобразования числа в соответствующую строку
    let day = '';
    switch (dayNum) {
        case 0:
            day = 'Воскресенье';
            break;
        case 1:
            day = 'Понедельник';
            break;
        case 2:
            day = 'Вторник';
            break;
        case 3:
            day = 'Среда';
            break;
        case 4:
            day = 'Четверг';
            break;
        case 5:
            day = 'Пятница';
            break;
        case 6:
            day = 'Суббота';
            break;
    }
    const week = Math.ceil((new Date(ms).getDate() + 1) / 7);
    const monthNum =  new Date(ms).getMonth();
    // второй вариант преобразования числа в соответствующую строку
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
        .find((value, index) => index === monthNum)
    const year =  new Date(ms).getFullYear();
    return day + ', ' + week + ' неделя ' + month + ' ' + year + ' года'
}
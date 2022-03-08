document.querySelector('.technology__description-button').addEventListener(
    'click',
    (event) => {
        switch (event.target.textContent){
            case  'Щелкни здесь':
                document.querySelector('.def').innerHTML =
                    `<p>Держи несколько определений! Чтобы свернуть их, нажми на кнопку "Скрыть".</p>
                     <dl class="def__list">
                         <dt class="def__title">
                             Переменные
                         </dt>
                         <dd class="def__description">
                             это контейнеры, внутри которых можно хранить значения. Для начала нужно объявить
                             переменную с&nbsp;помощью ключевого слова const для констант или let для
                             изменяющихся значений, а&nbsp;дальше следует имя самой переменной.
                         </dd>
                         <dt class="def__title">
                             Операторы
                         </dt>
                         <dd class="def__description">
                             это математические символы, которые производят результат, основанный на&nbsp;двух
                             значениях (или переменных).
                         </dd>
                         <dt class="def__title">
                             Условия
                         </dt>
                         <dd class="def__description">
                             это кодовые структуры, которые позволяют проверять, истинно или ложно выражение, а&nbsp;затем
                             выполнить другой код в&nbsp;зависимости от&nbsp;результата.
                         </dd>
                         <dt class="def__title">
                             Функции
                         </dt>
                         <dd class="def__description">
                             это способ упаковки функциональности, которую нужно использовать повторно. Для этого
                             можно просто вызвать функцию по&nbsp;её&nbsp;имени, а&nbsp;не&nbsp;переписывать весь
                             код каждый раз.
                         </dd>
                     </dl>`
                event.target.textContent = 'Скрыть';
                break;
            case  'Скрыть':
                document.querySelector('.def').innerHTML = '';
                event.target.textContent = 'Щелкни здесь';
                break;
        }
    }
)
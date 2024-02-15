function getInputData(name) {
    let myObject = document.querySelectorAll(name); 
    let valuesArray = Object.values(myObject).map(function(obj) {
    return obj.value;
    });
    return valuesArray.find(function(value) {
      return value !== "";
    });
}

function agreeCall() {
    // Получаем все элементы с классом "t-checkbox__indicator"
    let indicators = document.querySelectorAll('.t-checkbox__indicator');

    // Перебираем найденные элементы
    for (let i = 0; i < indicators.length; i++) {
        // Получаем псевдоэлемент ::after текущего элемента
        let afterPseudoElement = window.getComputedStyle(indicators[i], '::after');

        // Проверяем, существует ли псевдоэлемент ::after
        if (afterPseudoElement.content !== 'none') {
            // Если псевдоэлемент ::after существует, возвращаем 'yes'
            return true;
        }
    }
    // Если ни у одного элемента нет псевдоэлемента ::after, возвращаем 'no'
    return false;
}



function setStorage() {
    // Получение всех параметров из адресной строки
    let queryParams = new URLSearchParams(window.location.search);

    let data = {
        phone: getInputData('input[data-tilda-rule="phone"]'),
        email: getInputData('input[data-tilda-rule="email"]'),
        name: getInputData('input[data-tilda-rule="name"]'),
        promocode: getInputData('input[name="promocode"]'),
        formname: getInputData('input[name="tildaspec-formname"]'),
        agree_call: agreeCall(),
        course: getInputData('input[name="course"]')
    };
  if(getInputData('input[name="lead_form_type"]') === 'free') data.salecourse = getInputData('input[name="salecourse"]');
  if (queryParams.get('utm_source')) data.utm_source = queryParams.get('utm_source');
  if (queryParams.get('utm_term')) data.utm_source = queryParams.get('utm_term');
  if (queryParams.get('utm_medium')) data.utm_source = queryParams.get('utm_medium');
  if (queryParams.get('utm_content')) data.utm_source = queryParams.get('utm_content');
  if (queryParams.get('utm_campaign')) data.utm_source = queryParams.get('utm_campaign');
  

    // Сохранение данных в sessionStorage
    sessionStorage.setItem('formData', JSON.stringify(data));
    console.log(data)
}

document.addEventListener('submit', function(event) {
    if (event.event && event.event.startsWith('submit_form')) {
        setStorage();
    }
});
  

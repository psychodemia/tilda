function getInputData(name) {
    let myObject = document.querySelectorAll(name); 
    let valuesArray = Object.values(myObject).map(function(obj) {
    return obj.value;
    });
    return valuesArray.find(function(value) {
      return value !== "";
    });
}


  function setStorage() {
  
    // Получение всех параметров из адресной строки
    var queryParams = new URLSearchParams(window.location.search);

    // Формирование объекта с данными
    var data = {
        phone: {{tilda_form_phone}}, //[data-tilda-rule="phone"]
        email: {{tilda_form_email}},
        name: {{tilda_form_name}},
        promocode: {{tilda_form_promocode}},
        formname: {{tilda_form_fname}},
        agree_call: {{tilda_form_agreecall}},
        course: {{tilda_form_course}}
    };
  if({{Категория страницы}} === 'free') data.salecourse = {{tilda_form_salecourse}};
  if (queryParams.get('utm_source')) data.utm_source = queryParams.get('utm_source');
  if (queryParams.get('utm_term')) data.utm_source = queryParams.get('utm_term');
  if (queryParams.get('utm_medium')) data.utm_source = queryParams.get('utm_medium');
  if (queryParams.get('utm_content')) data.utm_source = queryParams.get('utm_content');
  if (queryParams.get('utm_campaign')) data.utm_source = queryParams.get('utm_campaign');
  

    // Сохранение данных в sessionStorage
    sessionStorage.setItem('formData', JSON.stringify(data));
}
setStorage();
  

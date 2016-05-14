angular.element('.ui.segment.form')
  .form({
    fields: {
      name     : 'empty',
      gender   : 'empty',
      username : 'empty',
      password : ['minLength[6]', 'empty'],
      skills   : ['minCount[2]', 'empty'],
      terms    : 'checked'
    }
  })
;

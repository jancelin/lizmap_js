lizMap.events.on({
lizmapeditionformdisplayed: function(filterForm) {

jQuery.fn.filterByText = function(textbox, selectSingleMatch) {
  return this.each(function() {
    var select = this;
    var options = [];
    $(select).find('option').each(function() {
      options.push({value: $(this).val(), text: $(this).text()});
    });
    $(select).data('options', options);
    $(textbox).bind('change keyup', function() {
      var options = $(select).empty().scrollTop(0).data('options');
      var search = $.trim($(this).val());
      var regex = new RegExp(search,'gi');

      $.each(options, function(i) {
        var option = options[i];
        if(option.text.match(regex) !== null) {
          $(select).append(
             $('<option>').text(option.text).val(option.value)
          );
        }
      });
      if (selectSingleMatch === true && 
          $(select).children().length === 1) {
        $(select).children().get(0).selected = true;
      }
    });
  });
};

$(function() {
//jforms_view_edition_par_ocs: champ à filtrer
//jforms_view_edition_type_id: filtre, Cela pourrait être un sélecteur jQuery, un objet jQuery, ou un objet DOM.
//true: Cette option est facultative, si vous définissez à true, lorsque la liste filtrée et comprend un seul élément,
//      cet élément sera automatiquement sélectionné.

  $('#jforms_view_edition_par_ocs').filterByText($('#jforms_view_edition_type_id'), true);
});  


 }
});

lizMap.events.on({

  uicreated: function(e) {

      function nWin() {
      var w = window.open();
      var html = $("#liz-atlas-item-detail").html();
      $(w.document.body).html(html);
      w.print();
      }
      
    $('#attribution-box').click(nWin);

  }

});

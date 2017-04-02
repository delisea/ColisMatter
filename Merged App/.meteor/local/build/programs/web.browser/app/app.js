var require = meteorInstall({"client":{"coList":{"template.coList.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/coList/template.coList.js                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("coList");                                                                                     // 2
Template["coList"] = new Template("Template.coList", (function() {                                                  // 3
  var view = this;                                                                                                  // 4
  return [ HTML.Raw('<link href="css/coList.css" rel="stylesheet">\n<!--<div class="container">\n\t<div class="row">\n\n\t\t<section class="content">\n\t\t\t<h1>Table Filter</h1>\n\t\t\tdiv class="col-md-8 col-md-offset-2"\n\t\t\t\t<div class="panel panel-default">-->\n\t\t\t\t\t'), HTML.DIV({
    class: "panel-body"                                                                                             // 6
  }, "\n\t\t\t\t\t\t", HTML.Raw('<div class="pull-right">\n\t\t\t\t\t\t\t<div class="btn-group">\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-success btn-filter" data-target="livre">Livré</button>\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-warning btn-filter" data-target="transit">En transit</button>\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-danger btn-filter" data-target="incomplet">Incomplet</button>\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-default btn-filter" data-target="tous">Tous</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>'), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "table-container"                                                                                        // 8
  }, "\n\t\t\t\t\t\t\t", HTML.TABLE({                                                                               // 9
    class: "table table-filter"                                                                                     // 10
  }, "\n\t\t\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                               // 11
    return Spacebars.call(view.lookup("colis"));                                                                    // 12
  }, function() {                                                                                                   // 13
    return [ "\n\t\t\t\t\t\t\t\t\t", HTML.TR({                                                                      // 14
      "data-status": function() {                                                                                   // 15
        return Spacebars.mustache(view.lookup("delivered"), view.lookup("destination"), view.lookup("itineraire"));
      }                                                                                                             // 17
    }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                     // 18
      class: "ckbox"                                                                                                // 19
    }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                   // 20
      type: "checkbox",                                                                                             // 21
      id: "checkbox1"                                                                                               // 22
    }), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                  // 23
      for: "checkbox1"                                                                                              // 24
    }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
      class: "media"                                                                                                // 26
    }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 27
      class: "media-body"                                                                                           // 28
    }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                  // 29
      class: "media-meta pull-right"                                                                                // 30
    }, Blaze.View("lookup:date", function() {                                                                       // 31
      return Spacebars.mustache(view.lookup("date"));                                                               // 32
    })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.H4({                                                                  // 33
      class: "title"                                                                                                // 34
    }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:name", function() {                                     // 35
      return Spacebars.mustache(view.lookup("name"));                                                               // 36
    }), "(", Blaze.View("lookup:tag", function() {                                                                  // 37
      return Spacebars.mustache(view.lookup("tag"));                                                                // 38
    }), ")\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                              // 39
      class: function() {                                                                                           // 40
        return [ "pull-right ", Spacebars.mustache(view.lookup("delivered"), view.lookup("destination"), view.lookup("itineraire")) ];
      }                                                                                                             // 42
    }, "(", Blaze.View("lookup:delivered", function() {                                                             // 43
      return Spacebars.mustache(view.lookup("delivered"), view.lookup("destination"), view.lookup("itineraire"));   // 44
    }), ")"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.P({                             // 45
      class: "summary"                                                                                              // 46
    }, Blaze.View("lookup:itineraire", function() {                                                                 // 47
      return Spacebars.mustache(view.lookup("itineraire"));                                                         // 48
    })), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t" ];
  }), "\n\t\t\t\t\t\t\t\t\t", HTML.TR({                                                                             // 50
    "data-status": "pendiente"                                                                                      // 51
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                       // 52
    class: "ckbox"                                                                                                  // 53
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                     // 54
    type: "checkbox",                                                                                               // 55
    id: "checkbox3"                                                                                                 // 56
  }), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                    // 57
    for: "checkbox3"                                                                                                // 58
  }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
    class: "media"                                                                                                  // 60
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                       // 61
    class: "media-body"                                                                                             // 62
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                    // 63
    class: "media-meta pull-right"                                                                                  // 64
  }, "Febrero 13, 2016"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.H4({                                                 // 65
    class: "title"                                                                                                  // 66
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem Impsum\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                        // 67
    class: "pull-right pendiente"                                                                                   // 68
  }, "(Pendiente)"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.P({                      // 69
    class: "summary"                                                                                                // 70
  }, "Ut enim ad minim veniam, quis nostrud exercitation..."), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.TR({
    "data-status": "cancelado"                                                                                      // 72
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                       // 73
    class: "ckbox"                                                                                                  // 74
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                     // 75
    type: "checkbox",                                                                                               // 76
    id: "checkbox2"                                                                                                 // 77
  }), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                    // 78
    for: "checkbox2"                                                                                                // 79
  }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
    class: "media"                                                                                                  // 81
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                       // 82
    class: "media-body"                                                                                             // 83
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                    // 84
    class: "media-meta pull-right"                                                                                  // 85
  }, "Febrero 13, 2016"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.H4({                                                 // 86
    class: "title"                                                                                                  // 87
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem Impsum\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                        // 88
    class: "pull-right cancelado"                                                                                   // 89
  }, "(Cancelado)"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.P({                      // 90
    class: "summary"                                                                                                // 91
  }, "Ut enim ad minim veniam, quis nostrud exercitation..."), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.TR({
    "data-status": "pagado",                                                                                        // 93
    class: "selected"                                                                                               // 94
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                       // 95
    class: "ckbox"                                                                                                  // 96
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                     // 97
    type: "checkbox",                                                                                               // 98
    id: "checkbox4",                                                                                                // 99
    checked: ""                                                                                                     // 100
  }), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                    // 101
    for: "checkbox4"                                                                                                // 102
  }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
    class: "media"                                                                                                  // 104
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                       // 105
    class: "media-body"                                                                                             // 106
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                    // 107
    class: "media-meta pull-right"                                                                                  // 108
  }, "Febrero 13, 2016"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.H4({                                                 // 109
    class: "title"                                                                                                  // 110
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem Impsum\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                        // 111
    class: "pull-right pagado"                                                                                      // 112
  }, "(Pagado)"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.P({                         // 113
    class: "summary"                                                                                                // 114
  }, "Ut enim ad minim veniam, quis nostrud exercitation..."), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.TR({
    "data-status": "pendiente"                                                                                      // 116
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                       // 117
    class: "ckbox"                                                                                                  // 118
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                     // 119
    type: "checkbox",                                                                                               // 120
    id: "checkbox5"                                                                                                 // 121
  }), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                    // 122
    for: "checkbox5"                                                                                                // 123
  }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
    class: "media"                                                                                                  // 125
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                       // 126
    class: "media-body"                                                                                             // 127
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                    // 128
    class: "media-meta pull-right"                                                                                  // 129
  }, "Febrero 13, 2016"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.H4({                                                 // 130
    class: "title"                                                                                                  // 131
  }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem Impsum\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                        // 132
    class: "pull-right pendiente"                                                                                   // 133
  }, "(Pendiente)"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.P({                      // 134
    class: "summary"                                                                                                // 135
  }, "Ut enim ad minim veniam, quis nostrud exercitation..."), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), HTML.Raw('\n\t\t\t\t<!--</div>\n\t\t\t\t<div class="content-footer">\n\t\t\t\t\t<p>\n\t\t\t\t\t\tPage © - 2016 <br>\n\t\t\t\t\t\tPowered By <a href="https://www.facebook.com/tavo.qiqe.lucero" target="_blank">TavoQiqe</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t  </div>\n\t</div>-->') ];
}));                                                                                                                // 137
                                                                                                                    // 138
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"coList.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/coList/coList.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/*$(document).ready(function () {                                                                                   // 1
                                                                                                                    //
    $('.ckbox label').on('click', function () {                                                                     //
      $(this).parents('tr').toggleClass('selected');                                                                //
    });                                                                                                             //
                                                                                                                    //
    $('.btn-filter').on('click', function () {                                                                      //
      var $target = $(this).data('target');                                                                         //
	  console.log($target);                                                                                            //
      if ($target != 'all') {                                                                                       //
        $('.table tr').css('display', 'none');                                                                      //
        $('.table tr[data-status="' + $target + '"]').fadeIn('slow');                                               //
      } else {                                                                                                      //
        $('.table tr').css('display', 'none').fadeIn('slow');                                                       //
      }                                                                                                             //
    });                                                                                                             //
                                                                                                                    //
 });*/Template.coList.events({                                                                                      //
	'click .ckbox label': function (event, t) {                                                                        // 21
		//console.log(event.target);                                                                                      // 22
		//event.target.parents('tr').toggleClass('selected');                                                             // 23
		$(event.currentTarget).parent().parent().parent().toggleClass('selected');                                        // 24
	},                                                                                                                 // 25
	'click .btn-filter': function (event, t) {                                                                         // 26
		console.log("ON" + event.target.getAttribute('data-target'));                                                     // 27
		var $target = event.target.getAttribute('data-target');                                                           // 28
                                                                                                                    //
		if ($target != 'tous') {                                                                                          // 29
			$('.table tr').css('display', 'none');                                                                           // 30
			$('.table tr[data-status="' + $target + '"]').fadeIn('slow');                                                    // 31
		} else {                                                                                                          // 32
			$('.table tr').css('display', 'none').fadeIn('slow');                                                            // 33
		}                                                                                                                 // 34
	}                                                                                                                  // 35
});                                                                                                                 // 20
Template.coList.helpers({                                                                                           // 38
	'colis': function () {                                                                                             // 39
		var currentUserId = Meteor.userId();                                                                              // 40
		return CoListe.find({                                                                                             // 41
			proprietaire: 0                                                                                                  // 41
		}); /*name: "ArduinoBoard",                                                                                       // 41
      tag: "QRTag",                                                                                                 //
      depart: [62.9, 66.4],                                                                                         //
      destination: [66.4, 69.6],                                                                                    //
      itineraire: [66.4, 69.6],                                                                                     //
      date: "01/04/2017 17:20",                                                                                     //
      proprietaire: 0,                                                                                              //
      valide: false*/                                                                                               //
	},                                                                                                                 // 51
	'delivered': function (dest, it) {                                                                                 // 52
		if (dest[0] == it[0] && dest[1] == it[1]) {                                                                       // 53
			return "livre";                                                                                                  // 54
		}                                                                                                                 // 55
                                                                                                                    //
		return "transit";                                                                                                 // 56
	}                                                                                                                  // 57
});                                                                                                                 // 38
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"connectform":{"template.connectform.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/connectform/template.connectform.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("connectform");                                                                                // 2
Template["connectform"] = new Template("Template.connectform", (function() {                                        // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<link href="css/connectform.css" rel="stylesheet">\n<!--script>\nvar head = document.getElementsByTagName("head")[0],\n    cssLink = document.createElement("link");\n\ncssLink.href = "path/to/filenam.css";\ncssLink.id="dynamic-css";\ncssLink.media="screen";\ncssLink.type="text/css";\n\nhead.appendChild(cssLink);\n</script-->\n<div class="container">\n    \t<div class="row inner-container">\n\t\t\t<div class="col-md-6 col-md-offset-3">\n\t\t\t\t<div class="panel panel-login">\n\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t<a href="#" class="active" id="login-form-link">Login</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t<a href="#" id="register-form-link">Register</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-lg-12">\n\t\t\t\t\t\t\t\t<form id="login-form" action="http://phpoll.com/login/process" method="post" role="form" style="display: block;">\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group text-center">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" tabindex="3" class="" name="remember" id="remember">\n\t\t\t\t\t\t\t\t\t\t<label for="remember"> Remember Me</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6 col-sm-offset-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-lg-12">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-center">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="http://phpoll.com/recover" tabindex="5" class="forgot-password">Forgot Password?</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<form id="register-form" action="http://phpoll.com/register/process" method="post" role="form" style="display: none;">\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6 col-sm-offset-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connectform.js":["meteor/accounts-base",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/connectform/connectform.js                                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Accounts = void 0;                                                                                              // 1
module.import('meteor/accounts-base', {                                                                             // 1
	"Accounts": function (v) {                                                                                         // 1
		Accounts = v;                                                                                                     // 1
	}                                                                                                                  // 1
}, 0);                                                                                                              // 1
/*Template.registerHelper( 'isConnected', (page) => {                                                               // 3
  return Session.get('connected');                                                                                  //
});*/$(function () {                                                                                                //
	$('#login-form-link').click(function (e) {                                                                         // 10
		$("#login-form").delay(100).fadeIn(100);                                                                          // 11
		$("#register-form").fadeOut(100);                                                                                 // 12
		$('#register-form-link').removeClass('active');                                                                   // 13
		$(this).addClass('active');                                                                                       // 14
		e.preventDefault();                                                                                               // 15
	});                                                                                                                // 16
	$('#register-form-link').click(function (e) {                                                                      // 17
		$("#register-form").delay(100).fadeIn(100);                                                                       // 18
		$("#login-form").fadeOut(100);                                                                                    // 19
		$('#login-form-link').removeClass('active');                                                                      // 20
		$(this).addClass('active');                                                                                       // 21
		e.preventDefault();                                                                                               // 22
	});                                                                                                                // 23
});                                                                                                                 // 25
Template.connectform.events({                                                                                       // 27
	'submit #login-form': function (e) {                                                                               // 28
		e.preventDefault();                                                                                               // 29
		var username = e.target.username.value;                                                                           // 30
		var mdp = e.target.password.value;                                                                                // 31
		Meteor.loginWithPassword(username, mdp, function (error) {                                                        // 32
			console.log(error);                                                                                              // 33
		}); //Session.set('connected', true);                                                                             // 34
	},                                                                                                                 // 36
	'submit #register-form': function (e) {                                                                            // 37
		console.log(e.target.id);                                                                                         // 38
		e.preventDefault();                                                                                               // 39
		var username = e.target.username.value;                                                                           // 40
		var mdp = e.target.password.value;                                                                                // 41
		var cmdp = e.target["confirm-password"].value;                                                                    // 42
		var email = e.target.password.value;                                                                              // 43
                                                                                                                    //
		if (cmdp !== mdp) {                                                                                               // 44
			console.log("mdp pas bon");                                                                                      // 45
			console.log(mdp);                                                                                                // 46
			console.log(cmdp);                                                                                               // 47
			return;                                                                                                          // 48
		}                                                                                                                 // 49
                                                                                                                    //
		Accounts.createUser({                                                                                             // 51
			username: username,                                                                                              // 52
			email: email,                                                                                                    // 53
			password: mdp                                                                                                    // 54
		}, function (error) {                                                                                             // 51
			console.log("error");                                                                                            // 55
			if (error) console.log(error);                                                                                   // 55
		});                                                                                                               // 55
		console.log("done");                                                                                              // 56
	}                                                                                                                  // 57
});                                                                                                                 // 27
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"deviceList":{"template.deviceList.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/deviceList/template.deviceList.js                                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("deviceList");                                                                                 // 2
Template["deviceList"] = new Template("Template.deviceList", (function() {                                          // 3
  var view = this;                                                                                                  // 4
  return [ HTML.Raw('<!--div style="font-size:2em;" class="list-group"-->\n'), HTML.DIV({                           // 5
    class: "list-group"                                                                                             // 6
  }, "\n\n", HTML.STYLE("\n.deviceRow [class*=col] { overflow: hidden; }\n\n@media (max-width: 443px) {  \n\t.deviceRow {font-size:1.5rem;} /*1rem = 16px*/\n\t.deviceRow .glyphicon {font-size:3rem;} /*1rem = 16px*/\n}\n@media (min-width: 444px) and (max-width: 799px) {  \n\t.deviceRow {font-size:2rem;} /*1rem = 16px*/\n\t.deviceRow .glyphicon {font-size:4rem;} /*1rem = 16px*/\n}\n@media (min-width: 800px) {  \n\t.deviceRow {font-size:2.5rem;} /*1rem = 16px*/\n\t.deviceRow .glyphicon {font-size:4.5rem;} /*1rem = 16px*/\n}\n"), "\n\t\n\t", Blaze.Each(function() {
    return Spacebars.call(view.lookup("devices"));                                                                  // 8
  }, function() {                                                                                                   // 9
    return [ "\n\t\t", Blaze.If(function() {                                                                        // 10
      return Spacebars.dataMustache(view.lookup("isStarted"), view.lookup("state"));                                // 11
    }, function() {                                                                                                 // 12
      return [ "\n\t\t", HTML.DIV({                                                                                 // 13
        class: "alert alert-success"                                                                                // 14
      }, "\n\t\t", HTML.DIV({                                                                                       // 15
        class: "row deviceRow"                                                                                      // 16
      }, "\n\t\t\t", HTML.DIV({                                                                                     // 17
        class: "col-xs-4 col-sm-4"                                                                                  // 18
      }, "\n\t\t\t", Blaze.View("lookup:name", function() {                                                         // 19
        return Spacebars.mustache(view.lookup("name"));                                                             // 20
      }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                       // 21
        class: "col-xs-4 col-sm-4"                                                                                  // 22
      }, "\n\t\t\t", Blaze.View("lookup:state", function() {                                                        // 23
        return Spacebars.mustache(view.lookup("state"));                                                            // 24
      }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                       // 25
        class: "col-xs-4 col-sm-4"                                                                                  // 26
      }, "\n\t\t\t\t", HTML.SPAN({                                                                                  // 27
        style: "float: right;"                                                                                      // 28
      }, "\n\t\t\t\t\t", HTML.SPAN({                                                                                // 29
        class: "OFFdevice glyphicon glyphicon-remove-sign text-danger",                                             // 30
        style: "cursor: pointer;",                                                                                  // 31
        "data-targetname": function() {                                                                             // 32
          return Spacebars.mustache(view.lookup("name"));                                                           // 33
        }                                                                                                           // 34
      }), "\n\t\t\t\t\t", HTML.SPAN({                                                                               // 35
        class: "INFOdevice glyphicon glyphicon-info-sign text-info",                                                // 36
        style: "cursor: pointer;",                                                                                  // 37
        "data-targetname": function() {                                                                             // 38
          return Spacebars.mustache(view.lookup("name"));                                                           // 39
        }                                                                                                           // 40
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", Blaze.If(function() {                                    // 41
        return Spacebars.dataMustache(view.lookup("isSelected"), view.lookup("name"));                              // 42
      }, function() {                                                                                               // 43
        return [ "\n\t\t", HTML.DIV({                                                                               // 44
          class: "row deviceRow"                                                                                    // 45
        }, "\n\t\t\t", HTML.DIV({                                                                                   // 46
          class: "col-xs-12 col-sm-3"                                                                               // 47
        }), "\n\t\t\t", HTML.DIV({                                                                                  // 48
          class: "col-xs-4 col-sm-3",                                                                               // 49
          style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                              // 50
        }, "\n\t\t\tname\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                          // 51
          class: "col-xs-8 col-sm-3",                                                                               // 52
          style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                              // 53
        }, "\n\t\t\t", Blaze.View("lookup:name", function() {                                                       // 54
          return Spacebars.mustache(view.lookup("name"));                                                           // 55
        }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                     // 56
          class: "hidden-xs col-sm-3"                                                                               // 57
        }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                         // 58
          class: "row deviceRow"                                                                                    // 59
        }, "\n\t\t\t", HTML.DIV({                                                                                   // 60
          class: "hidden-xs col-sm-3"                                                                               // 61
        }), "\n\t\t\t", HTML.DIV({                                                                                  // 62
          class: "col-xs-4 col-sm-3",                                                                               // 63
          style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                              // 64
        }, "\n\t\t\tpackagename\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                   // 65
          class: "col-xs-8 col-sm-3",                                                                               // 66
          style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                              // 67
        }, "\n\t\t\t", Blaze.View("lookup:packagename", function() {                                                // 68
          return Spacebars.mustache(view.lookup("packagename"));                                                    // 69
        }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                     // 70
          class: "hidden-xs col-sm-3"                                                                               // 71
        }), "\n\t\t"), "\n\t\t" ];                                                                                  // 72
      }), "\n\t\t"), "\n\t\t\n\t\t\n\t\t\n\t\t" ];                                                                  // 73
    }, function() {                                                                                                 // 74
      return [ "\n\t\t", Blaze.If(function() {                                                                      // 75
        return Spacebars.dataMustache(view.lookup("isWaiting"), view.lookup("state"));                              // 76
      }, function() {                                                                                               // 77
        return [ "\n\t\t", HTML.DIV({                                                                               // 78
          class: "alert alert-warning"                                                                              // 79
        }, "\n\t\t", HTML.DIV({                                                                                     // 80
          class: "row deviceRow"                                                                                    // 81
        }, "\n\t\t\t", HTML.DIV({                                                                                   // 82
          class: "col-xs-4 col-sm-4"                                                                                // 83
        }, "\n\t\t\t", Blaze.View("lookup:name", function() {                                                       // 84
          return Spacebars.mustache(view.lookup("name"));                                                           // 85
        }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                     // 86
          class: "col-xs-4 col-sm-4"                                                                                // 87
        }, "\n\t\t\t", Blaze.View("lookup:state", function() {                                                      // 88
          return Spacebars.mustache(view.lookup("state"));                                                          // 89
        }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                     // 90
          class: "col-xs-4 col-sm-4"                                                                                // 91
        }, "\n\t\t\t\t", HTML.SPAN({                                                                                // 92
          style: "float: right;"                                                                                    // 93
        }, "\n\t\t\t\t\t", HTML.SPAN({                                                                              // 94
          class: "OFFdevice glyphicon glyphicon-remove-sign text-danger",                                           // 95
          style: "cursor: pointer;",                                                                                // 96
          "data-targetname": function() {                                                                           // 97
            return Spacebars.mustache(view.lookup("name"));                                                         // 98
          }                                                                                                         // 99
        }), "\n\t\t\t\t\t", HTML.SPAN({                                                                             // 100
          class: "INFOdevice glyphicon glyphicon-info-sign text-info",                                              // 101
          style: "cursor: pointer;",                                                                                // 102
          "data-targetname": function() {                                                                           // 103
            return Spacebars.mustache(view.lookup("name"));                                                         // 104
          }                                                                                                         // 105
        }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", Blaze.If(function() {                                  // 106
          return Spacebars.dataMustache(view.lookup("isSelected"), view.lookup("name"));                            // 107
        }, function() {                                                                                             // 108
          return [ "\n\t\t", HTML.DIV({                                                                             // 109
            class: "row deviceRow"                                                                                  // 110
          }, "\n\t\t\t", HTML.DIV({                                                                                 // 111
            class: "col-xs-12 col-sm-3"                                                                             // 112
          }), "\n\t\t\t", HTML.DIV({                                                                                // 113
            class: "col-xs-4 col-sm-3",                                                                             // 114
            style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                            // 115
          }, "\n\t\t\tname\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                        // 116
            class: "col-xs-8 col-sm-3",                                                                             // 117
            style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                            // 118
          }, "\n\t\t\t", Blaze.View("lookup:name", function() {                                                     // 119
            return Spacebars.mustache(view.lookup("name"));                                                         // 120
          }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                   // 121
            class: "hidden-xs col-sm-3"                                                                             // 122
          }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                       // 123
            class: "row deviceRow"                                                                                  // 124
          }, "\n\t\t\t", HTML.DIV({                                                                                 // 125
            class: "hidden-xs col-sm-3"                                                                             // 126
          }), "\n\t\t\t", HTML.DIV({                                                                                // 127
            class: "col-xs-4 col-sm-3",                                                                             // 128
            style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                            // 129
          }, "\n\t\t\tpackagename\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                 // 130
            class: "col-xs-8 col-sm-3",                                                                             // 131
            style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                            // 132
          }, "\n\t\t\t", Blaze.View("lookup:packagename", function() {                                              // 133
            return Spacebars.mustache(view.lookup("packagename"));                                                  // 134
          }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                   // 135
            class: "hidden-xs col-sm-3"                                                                             // 136
          }), "\n\t\t"), "\n\t\t" ];                                                                                // 137
        }), "\n\t\t"), "\n\t\t\n\t\t\n\t\t\n\t\t" ];                                                                // 138
      }, function() {                                                                                               // 139
        return [ "\n\t\t", HTML.DIV({                                                                               // 140
          class: "alert alert-info"                                                                                 // 141
        }, "\n\t\t", HTML.DIV({                                                                                     // 142
          class: "row deviceRow"                                                                                    // 143
        }, "\n\t\t\t", HTML.DIV({                                                                                   // 144
          class: "col-xs-4 col-sm-4"                                                                                // 145
        }, "\n\t\t\t", Blaze.View("lookup:name", function() {                                                       // 146
          return Spacebars.mustache(view.lookup("name"));                                                           // 147
        }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                     // 148
          class: "col-xs-4 col-sm-4"                                                                                // 149
        }, "\n\t\t\t", Blaze.View("lookup:state", function() {                                                      // 150
          return Spacebars.mustache(view.lookup("state"));                                                          // 151
        }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                     // 152
          class: "col-xs-4 col-sm-4"                                                                                // 153
        }, "\n\t\t\t\t", HTML.SPAN({                                                                                // 154
          style: "float: right;"                                                                                    // 155
        }, "\n\t\t\t\t\t", HTML.SPAN({                                                                              // 156
          class: "ONdevice glyphicon glyphicon-ok-sign text-success",                                               // 157
          style: "cursor: pointer;",                                                                                // 158
          "data-targetname": function() {                                                                           // 159
            return Spacebars.mustache(view.lookup("name"));                                                         // 160
          }                                                                                                         // 161
        }), "\n\t\t\t\t\t", HTML.SPAN({                                                                             // 162
          class: "INFOdevice glyphicon glyphicon-info-sign text-info",                                              // 163
          style: "cursor: pointer;",                                                                                // 164
          "data-targetname": function() {                                                                           // 165
            return Spacebars.mustache(view.lookup("name"));                                                         // 166
          }                                                                                                         // 167
        }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", Blaze.If(function() {                                  // 168
          return Spacebars.dataMustache(view.lookup("isSelected"), view.lookup("name"));                            // 169
        }, function() {                                                                                             // 170
          return [ "\n\t\t", HTML.DIV({                                                                             // 171
            class: "row deviceRow"                                                                                  // 172
          }, "\n\t\t\t", HTML.DIV({                                                                                 // 173
            class: "col-xs-12 col-sm-3"                                                                             // 174
          }), "\n\t\t\t", HTML.DIV({                                                                                // 175
            class: "col-xs-4 col-sm-3",                                                                             // 176
            style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                            // 177
          }, "\n\t\t\tname\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                        // 178
            class: "col-xs-8 col-sm-3",                                                                             // 179
            style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                            // 180
          }, "\n\t\t\t", Blaze.View("lookup:name", function() {                                                     // 181
            return Spacebars.mustache(view.lookup("name"));                                                         // 182
          }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                   // 183
            class: "hidden-xs col-sm-3"                                                                             // 184
          }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                       // 185
            class: "row deviceRow"                                                                                  // 186
          }, "\n\t\t\t", HTML.DIV({                                                                                 // 187
            class: "hidden-xs col-sm-3"                                                                             // 188
          }), "\n\t\t\t", HTML.DIV({                                                                                // 189
            class: "col-xs-4 col-sm-3",                                                                             // 190
            style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                            // 191
          }, "\n\t\t\tpackagename\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                 // 192
            class: "col-xs-8 col-sm-3",                                                                             // 193
            style: "box-shadow: inset 1px 1px 0 0, inset -1px -1px 0 0;"                                            // 194
          }, "\n\t\t\t", Blaze.View("lookup:packagename", function() {                                              // 195
            return Spacebars.mustache(view.lookup("packagename"));                                                  // 196
          }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                   // 197
            class: "hidden-xs col-sm-3"                                                                             // 198
          }), "\n\t\t"), "\n\t\t" ];                                                                                // 199
        }), "\n\t\t"), "\n\t\t" ];                                                                                  // 200
      }), "\n\t\t" ];                                                                                               // 201
    }), "\n\t" ];                                                                                                   // 202
  }, function() {                                                                                                   // 203
    return "\n\tno item\n    ";                                                                                     // 204
  }), "\n") ];                                                                                                      // 205
}));                                                                                                                // 206
                                                                                                                    // 207
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deviceList.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/deviceList/deviceList.js                                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var deviceList_Selected = "";                                                                                       // 1
Template.deviceList.helpers({                                                                                       // 2
	'devices': function () {                                                                                           // 3
		return Devices.find({});                                                                                          // 4
	},                                                                                                                 // 5
	'isStarted': function (state) {                                                                                    // 6
		return state === "Started";                                                                                       // 7
	},                                                                                                                 // 8
	'isWaiting': function (state) {                                                                                    // 9
		return state === "Initializing";                                                                                  // 10
	},                                                                                                                 // 11
	'isClosed': function (state) {                                                                                     // 12
		return state === "Not started";                                                                                   // 13
	},                                                                                                                 // 14
	'isSelected': function (name) {                                                                                    // 15
		console.log(deviceList_Selected);                                                                                 // 15
		return name === Session.get('deviceList_Selected');                                                               // 16
	}                                                                                                                  // 17
});                                                                                                                 // 2
Template.deviceList.events({                                                                                        // 19
	'click .ONdevice': function (event) {                                                                              // 20
		console.log("ON" + event.target.getAttribute('data-targetname')); //alert("ON " + event.target.getAttribute('data-targetname'));
	},                                                                                                                 // 23
	'click .OFFdevice': function (event) {                                                                             // 24
		//alert("OFF " + event.target.getAttribute('data-targetname'));                                                   // 25
		console.log("OFF" + event.target.getAttribute('data-targetname'));                                                // 26
	},                                                                                                                 // 27
	'click .INFOdevice': function (event) {                                                                            // 28
		if (event.target.getAttribute('data-targetname') !== Session.get('deviceList_Selected')) Session.set('deviceList_Selected', event.target.getAttribute('data-targetname'));else Session.set('deviceList_Selected', "");
	}                                                                                                                  // 33
});                                                                                                                 // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"homeTemplate":{"template.homeTemplate.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/homeTemplate/template.homeTemplate.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("homeTemplate");                                                                               // 2
Template["homeTemplate"] = new Template("Template.homeTemplate", (function() {                                      // 3
  var view = this;                                                                                                  // 4
  return [ HTML.STYLE("\nhtml, body {\n\tpadding-left:0;\n\tpadding-right:0;\n\tpadding-bottom:0;\n\theight: 100%;\n}\n\n\n.media-photo {\n/*border: 5px solid #ad7343;*//*63cdf4*/\nborder-radius: 50%;\n/*height: 120px;\nleft: 125px;*/\n/*position: absolute;\ntop: -25px;\nwidth: 120px;*/\n\nbackground:transparent url('https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg') no-repeat center center /cover;\n}\n.header-home {\n\t/*border-bottom-right-radius: 20%;*/\n}\n.table{\n    border: 0;\n    width: 100%;\n\tmargin: 0;\n    /*position: absolute;*/\n    z-index: 1000;\n}\n\n.table-cell{\n    display:table-cell;\n    vertical-align:middle;\n    height:100%;\n    width:100%;\n\tpadding: 0;\n}\n.square {\n    float:left;\n    position: relative;\n    width: 10vh;\n\theight: 10vh;\n    /*padding-bottom : 15%;  = width for a 1:1 aspect ratio */\n    margin:1.66%;\n    overflow:hidden;\n}\n\n.summary {\n\tfont-size: 3vh;\n}\n\n#map {\n\theight: 100%;\n    min-height: 100%;\n    min-width: 100%;\n\tz-index:0;\n  }\n"), "\n\t\t", HTML.TABLE({
    class: "table alert alert-info header-home"                                                                     // 6
  }, "\n\t\t  ", HTML.COL({                                                                                         // 7
    width: "10vh"                                                                                                   // 8
  }), "\n\t\t", HTML.TR("\n\t\t\t", HTML.TD({                                                                       // 9
    class: "table-cell square media-photo"                                                                          // 10
  }, "\n\t\t\t\t", HTML.Comment('img src="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg" class="media-photo" 20px'), "\n\t\t\t"), "\n\t\t\t", HTML.TD({
    class: "table-cell",                                                                                            // 12
    style: "padding-top: 5px; padding-left: 5px;"                                                                   // 13
  }, "\n\t\t\t\t ", HTML.H2({                                                                                       // 14
    style: "font-size: 4vh;",                                                                                       // 15
    class: "label label-primary"                                                                                    // 16
  }, "Polytech'Grenoble"), "\n\t\t\t\t\t", HTML.P({                                                                 // 17
    class: "summary",                                                                                               // 18
    style: "padding-top: 5px;"                                                                                      // 19
  }, "\n\t\t\t\t\t\tSaint Martin d'hères", HTML.BR(), "\n\t\t\t\t\t\tDevices OK: 2\n\t\t\t\t\t"), "\n\t\t\t"), "\n\t\t")), HTML.Raw('\n\t<div id="map"></div>') ];
}));                                                                                                                // 21
                                                                                                                    // 22
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"homeTemplate.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/homeTemplate/homeTemplate.js                                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Meteor.startup(function () {                                                                                        // 1
  /*$(window).resize(function() {                                                                                   // 2
    $('#map').css('height', window.innerHeight - 82 - 45);                                                          //
  });*/$(window).resize(); // trigger resize event                                                                  //
}); // create marker collection                                                                                     // 6
                                                                                                                    //
var Markers = new Meteor.Collection('markers');                                                                     // 9
Meteor.subscribe('markers');                                                                                        // 11
var map;                                                                                                            // 12
var markers;                                                                                                        // 13
                                                                                                                    //
var geoFitBounds = function (map, bbox) {                                                                           // 15
  var b = L.latLngBounds(bbox);                                                                                     // 16
  pb = L.bounds(map.project(b.getSouthWest()), map.project(b.getNorthEast())), z = map.getBoundsZoom(b), c = b.getCenter(), pc = map.unproject(pb.getCenter());
  map.setView(pc, z);                                                                                               // 22
  return map;                                                                                                       // 23
};                                                                                                                  // 24
                                                                                                                    //
var supportsOrientationChange = "onorientationchange" in window,                                                    // 26
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";                                  // 26
window.addEventListener(orientationEvent, function () {                                                             // 29
  //console.log('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);                         // 30
  /*map.fitBounds([                                                                                                 // 32
  	[45.1667, 5.7667],                                                                                               //
  	[45.184394, 5.752884]                                                                                            //
  ], {paddingTopLeft: [0, $(".table-cell").outerHeight()]});*/ //map.fitBounds(markers.getBounds().pad(0.5));       //
  //console.log($(".table-cell").outerHeight());                                                                    // 37
  /*console.log($("#map").outerHeight());                                                                           // 38
  map.fitBounds(markers.getBounds().pad(0.25));*/geoFitBounds(map, markers.getBounds().pad(1));                     //
}, false);                                                                                                          // 42
                                                                                                                    //
Template.homeTemplate.rendered = function () {                                                                      // 44
  L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';                                                 // 45
  Markers.insert({                                                                                                  // 47
    latlng: L.latLng(45.1667, 5.7667)                                                                               // 47
  });                                                                                                               // 47
  Markers.insert({                                                                                                  // 48
    latlng: L.latLng(45.184394, 5.752884)                                                                           // 48
  });                                                                                                               // 48
  map = L.map('map', {                                                                                              // 50
    doubleClickZoom: false                                                                                          // 51
  }); //.setView([49.25044, -123.137], 13);                                                                         // 50
  //console.log();                                                                                                  // 53
  /*map.fitBounds([                                                                                                 // 55
  [45.1667, 5.7667],                                                                                                //
  [45.184394, 5.752884]                                                                                             //
  ], {paddingTopLeft: [0, $(".table-cell").outerHeight()]});*/                                                      //
  console.log($(".table-cell").outerHeight());                                                                      // 60
  L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);                                                          // 63
  map.on('dblclick', function (event) {                                                                             // 65
    Markers.insert({                                                                                                // 66
      latlng: event.latlng                                                                                          // 66
    });                                                                                                             // 66
  }); // add clustermarkers                                                                                         // 67
                                                                                                                    //
  markers = L.markerClusterGroup();                                                                                 // 70
  map.addLayer(markers);                                                                                            // 71
  var query = Markers.find();                                                                                       // 73
  query.observe({                                                                                                   // 74
    added: function (document) {                                                                                    // 75
      var marker = L.marker(document.latlng).addTo(map).on('click', function (event) {                              // 76
        map.removeLayer(marker);                                                                                    // 78
        Markers.remove({                                                                                            // 79
          _id: document._id                                                                                         // 79
        });                                                                                                         // 79
      });                                                                                                           // 80
      markers.addLayer(marker);                                                                                     // 81
    },                                                                                                              // 82
    removed: function (oldDocument) {                                                                               // 83
      layers = map._layers;                                                                                         // 84
      var key, val;                                                                                                 // 85
                                                                                                                    //
      for (key in meteorBabelHelpers.sanitizeForInObject(layers)) {                                                 // 86
        val = layers[key];                                                                                          // 87
                                                                                                                    //
        if (val._latlng) {                                                                                          // 88
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {//map.removeLayer(val);
          }                                                                                                         // 91
        }                                                                                                           // 92
      }                                                                                                             // 93
    }                                                                                                               // 94
  });                                                                                                               // 74
  geoFitBounds(map, markers.getBounds().pad(1));                                                                    // 96
};                                                                                                                  // 97
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"navBar":{"template.navBar.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/navBar/template.navBar.js                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("navBar");                                                                                     // 2
Template["navBar"] = new Template("Template.navBar", (function() {                                                  // 3
  var view = this;                                                                                                  // 4
  return [ HTML.STYLE("\n/*@media (min-height: 500px) {  */\n\t.co-navbar-fixed-top {\n\t\tposition: fixed;\n\t\tright: 0;\n\t\tleft: 0;\n\t\tz-index: 1030;\n\t\ttop: 0;\n\t\tborder-width: 0 0 1px;\n\t}\n/*}*/\n\t.navbar {\n\t\theight: 50px;\n\t\tmargin-bottom: 20px;\n\t\tborder: 1px solid transparent;\n\t}\n"), "\n", HTML.NAV({
    class: "navbar navbar-default co-navbar-fixed-top"                                                              // 6
  }, "\n\t", HTML.Raw('<!--<div class="row">\n\t\t<div class="col-xs-4 col-sm-4">\n\t\t\tcoucou\n\t\t</div>\n\t\t<div class="col-xs-4 col-sm-4">\n\t\t\tcoucou\n\t\t</div>\n\t\t<div class="col-xs-4 col-sm-4">\n\t\t\tcoucou\n\t\t</div>\n\t</div>-->'), "\n\t", HTML.DIV({
    class: "container-fluid row"                                                                                    // 8
  }, "\n    ", HTML.Raw('<div class="navbar-header col-xs-3 col-sm-3">\n      <a class="navbar-brand navLink" href="#Home" data-targetname="Home">Collismatter</a>\n    </div>'), "\n\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));                                                              // 10
  }, function() {                                                                                                   // 11
    return [ "\n    ", HTML.UL({                                                                                    // 12
      class: "nav navbar-nav col-xs-9 col-sm-9 row"                                                                 // 13
    }, "\n      ", Blaze.Each(function() {                                                                          // 14
      return Spacebars.call(view.lookup("objectInArray"));                                                          // 15
    }, function() {                                                                                                 // 16
      return [ "\n      \t", HTML.LI({                                                                              // 17
        class: function() {                                                                                         // 18
          return [ Blaze.If(function() {                                                                            // 19
            return Spacebars.dataMustache(view.lookup("isPage"), view.lookup("name"));                              // 20
          }, function() {                                                                                           // 21
            return "active";                                                                                        // 22
          }), " col-xs-3 col-sm-3" ];                                                                               // 23
        }                                                                                                           // 24
      }, HTML.A({                                                                                                   // 25
        class: "navLink",                                                                                           // 26
        href: function() {                                                                                          // 27
          return [ "#", Spacebars.mustache(view.lookup("name")) ];                                                  // 28
        },                                                                                                          // 29
        "data-targetname": function() {                                                                             // 30
          return Spacebars.mustache(view.lookup("name"));                                                           // 31
        }                                                                                                           // 32
      }, Blaze.View("lookup:name", function() {                                                                     // 33
        return Spacebars.mustache(view.lookup("name"));                                                             // 34
      }))), "\n\t  " ];                                                                                             // 35
    }), "\n    "), "\n\t" ];                                                                                        // 36
  }, function() {                                                                                                   // 37
    return [ "\n\t", HTML.Comment('<div style="text-align: center" class="navbar-brand col-xs-8 col-sm-8">\n\t\tConnection\n\t</div>'), "\n\t" ];
  }), "\n  "), "\n") ];                                                                                             // 39
}));                                                                                                                // 40
                                                                                                                    // 41
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navBar.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/navBar/navBar.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.navBar.helpers({                                                                                           // 1
	/*'isPage': function(page){                                                                                        // 2
 	return page === Session.get('page');                                                                              //
 },*/'objectInArray': function () {                                                                                 //
		return [{                                                                                                         // 6
			name: "Home",                                                                                                    // 7
			last: "Home",                                                                                                    // 7
			age: 100                                                                                                         // 7
		}, {                                                                                                              // 7
			name: "Colis",                                                                                                   // 8
			last: "page1",                                                                                                   // 8
			age: 200                                                                                                         // 8
		}, {                                                                                                              // 8
			name: "Devices",                                                                                                 // 9
			last: "page2",                                                                                                   // 9
			age: 200                                                                                                         // 9
		}, {                                                                                                              // 9
			name: "Disconnect",                                                                                              // 10
			last: "page2",                                                                                                   // 10
			age: 200                                                                                                         // 10
		}];                                                                                                               // 10
	}                                                                                                                  // 12
});                                                                                                                 // 1
Template.navBar.events({                                                                                            // 15
	'click .navLink': function (event) {                                                                               // 16
		if (event.target.getAttribute('data-targetname') === "Disconnect") {                                              // 17
			Meteor.logout(function (error) {                                                                                 // 18
				if (error) console.log(error.reason);                                                                           // 19
			});                                                                                                              // 21
		} else Session.set('page', event.target.getAttribute('data-targetname'));                                         // 22
	}                                                                                                                  // 25
});                                                                                                                 // 15
Template.registerHelper('isPage', function (page) {                                                                 // 28
	return page === Session.get('page');                                                                               // 29
});                                                                                                                 // 30
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.html":["./template.main.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.html                                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.main.js");                                                                     // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/template.main.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.body.addContent((function() {                                                                              // 2
  var view = this;                                                                                                  // 3
  return [ Spacebars.include(view.lookupTemplate("navBar")), HTML.Raw("\n<!--\n{{#unless isConnected}}\n{{> connectform}}\n{{/unless}}isConnected-->\n"), Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));                                                              // 5
  }, function() {                                                                                                   // 6
    return [ "\n\t", HTML.STYLE("\n\tbody {\n\t\tpadding: 50px;\n\t}\n\t"), "\n\n", Blaze.If(function() {           // 7
      return Spacebars.dataMustache(view.lookup("isPage"), "Devices");                                              // 8
    }, function() {                                                                                                 // 9
      return [ "\n", Spacebars.include(view.lookupTemplate("deviceList")), "\n" ];                                  // 10
    }, function() {                                                                                                 // 11
      return [ "\n", Blaze.If(function() {                                                                          // 12
        return Spacebars.dataMustache(view.lookup("isPage"), "Colis");                                              // 13
      }, function() {                                                                                               // 14
        return [ "\n", Spacebars.include(view.lookupTemplate("coList")), "\n" ];                                    // 15
      }, function() {                                                                                               // 16
        return [ "\n", Spacebars.include(view.lookupTemplate("homeTemplate")), "\n" ];                              // 17
      }), "\n" ];                                                                                                   // 18
    }), "\n\n" ];                                                                                                   // 19
  }, function() {                                                                                                   // 20
    return [ "\n\t", HTML.STYLE("\n\t@media (max-height: 499px) {\n\t\tbody {\n\t\t\tpadding: 55px;\n\t\t}\n\t}\n\t"), "\n\t", Spacebars.include(view.lookupTemplate("connectform")), "\n" ];
  }) ];                                                                                                             // 22
}));                                                                                                                // 23
Meteor.startup(Template.body.renderToDocument);                                                                     // 24
                                                                                                                    // 25
Template.__checkName("hello");                                                                                      // 26
Template["hello"] = new Template("Template.hello", (function() {                                                    // 27
  var view = this;                                                                                                  // 28
  return [ HTML.Raw("<button>Click Me</button>\n  "), HTML.P("You've pressed the button ", Blaze.View("lookup:counter", function() {
    return Spacebars.mustache(view.lookup("counter"));                                                              // 30
  }), " times.") ];                                                                                                 // 31
}));                                                                                                                // 32
                                                                                                                    // 33
Template.__checkName("info");                                                                                       // 34
Template["info"] = new Template("Template.info", (function() {                                                      // 35
  var view = this;                                                                                                  // 36
  return HTML.Raw('<h2>Learn Meteor!</h2>\n  <ul>\n    <li><a href="https://www.meteor.com/try" target="_blank">Do the Tutorial</a></li>\n    <li><a href="http://guide.meteor.com" target="_blank">Follow the Guide</a></li>\n    <li><a href="https://docs.meteor.com" target="_blank">Read the Docs</a></li>\n    <li><a href="https://forums.meteor.com" target="_blank">Discussions</a></li>\n  </ul>');
}));                                                                                                                // 38
                                                                                                                    // 39
Template.__checkName("navBar2");                                                                                    // 40
Template["navBar2"] = new Template("Template.navBar2", (function() {                                                // 41
  var view = this;                                                                                                  // 42
  return HTML.Raw('<nav class="navbar navbar-default">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#c">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n        <li class="active"><a href="#d">Link <span class="sr-only">(current)</span></a></li>\n        <li><a href="#a">Link</a></li>\n        <li class="dropdown">\n          <a href="#b" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n          <ul class="dropdown-menu">\n            <li><a href="#">Action</a></li>\n            <li><a href="#">Another action</a></li>\n            <li><a href="#">Something else here</a></li>\n            <li role="separator" class="divider"></li>\n            <li><a href="#">Separated link</a></li>\n            <li role="separator" class="divider"></li>\n            <li><a href="#">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class="navbar-form navbar-left">\n        <div class="form-group">\n          <input type="text" class="form-control" placeholder="Search">\n        </div>\n        <button type="submit" class="btn btn-default">Submit</button>\n      </form>\n      <ul class="nav navbar-nav navbar-right">\n        <li><a href="#">Link</a></li>\n        <li class="dropdown">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n          <ul class="dropdown-menu">\n            <li><a href="#">Action</a></li>\n            <li><a href="#">Another action</a></li>\n            <li><a href="#">Something else here</a></li>\n            <li role="separator" class="divider"></li>\n            <li><a href="#">Separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>');
}));                                                                                                                // 44
                                                                                                                    // 45
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","meteor/meteor","./main.html",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.js                                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Template = void 0;                                                                                              // 1
module.import('meteor/templating', {                                                                                // 1
	"Template": function (v) {                                                                                         // 1
		Template = v;                                                                                                     // 1
	}                                                                                                                  // 1
}, 0);                                                                                                              // 1
var ReactiveVar = void 0;                                                                                           // 1
module.import('meteor/reactive-var', {                                                                              // 1
	"ReactiveVar": function (v) {                                                                                      // 1
		ReactiveVar = v;                                                                                                  // 1
	}                                                                                                                  // 1
}, 1);                                                                                                              // 1
var Meteor = void 0;                                                                                                // 1
module.import('meteor/meteor', {                                                                                    // 1
	"Meteor": function (v) {                                                                                           // 1
		Meteor = v;                                                                                                       // 1
	}                                                                                                                  // 1
}, 2);                                                                                                              // 1
module.import('./main.html');                                                                                       // 1
Session.setDefault('deviceList_Selected', ""); ///TODO fix navBar responsivess                                      // 7
// TODO:                                                                                                            // 12
// Remember me?                                                                                                     // 13
// Forgot password                                                                                                  // 14
// after disco can't register                                                                                       // 15
// table des suivis                                                                                                 // 16
// do better startup()                                                                                              // 18
// Global for( fct in Meteor.perso.startup) fct();    ???                                                           // 19
                                                                                                                    //
Meteor.startup(function () {                                                                                        // 21
	Session.set('connected', false);                                                                                   // 22
	Session.set('page', 'Home');                                                                                       // 23
	Meteor.call('removeAllPosts');                                                                                     // 24
	Meteor.call('removeAllColis');                                                                                     // 25
	Devices.insert({                                                                                                   // 26
		name: "device1",                                                                                                  // 26
		state: "Started",                                                                                                 // 26
		packagename: "com..."                                                                                             // 26
	});                                                                                                                // 26
	Devices.insert({                                                                                                   // 27
		name: "device2",                                                                                                  // 27
		state: "Started",                                                                                                 // 27
		packagename: "com2..."                                                                                            // 27
	});                                                                                                                // 27
	Devices.insert({                                                                                                   // 28
		name: "device3",                                                                                                  // 28
		state: "Not started",                                                                                             // 28
		packagename: "com3..."                                                                                            // 28
	});                                                                                                                // 28
	Devices.insert({                                                                                                   // 29
		name: "device4",                                                                                                  // 29
		state: "Not started",                                                                                             // 29
		packagename: "com4..."                                                                                            // 29
	});                                                                                                                // 29
	Devices.insert({                                                                                                   // 30
		name: "device5",                                                                                                  // 30
		state: "Initializing",                                                                                            // 30
		packagename: "com5..."                                                                                            // 30
	}); /*CoListe.insert({name: "ArduinoPackage", state: "Treatment", lastX: 52.9, lastY: 56.4});                      // 30
     CoListe.insert({name: "AnotherPackage", state: "Treatment", lastX: 56.4, lastY: 59.6});*/                      //
	CoListe.insert({                                                                                                   // 34
		name: "ArduinoBoard",                                                                                             // 35
		tag: "QRTag",                                                                                                     // 36
		depart: [52.9, 56.4],                                                                                             // 37
		destination: [56.4, 59.6],                                                                                        // 38
		itineraire: [54.4, 56.6],                                                                                         // 39
		date: "04/04/2017 17:20",                                                                                         // 40
		proprietaire: 0,                                                                                                  // 41
		valide: true                                                                                                      // 42
	});                                                                                                                // 34
	CoListe.insert({                                                                                                   // 44
		name: "ArduinoBoard",                                                                                             // 45
		tag: "QRTag",                                                                                                     // 46
		depart: [62.9, 66.4],                                                                                             // 47
		destination: [66.4, 69.6],                                                                                        // 48
		itineraire: [66.4, 69.6],                                                                                         // 49
		date: "01/04/2017 17:20",                                                                                         // 50
		proprietaire: 0,                                                                                                  // 51
		valide: false                                                                                                     // 52
	});                                                                                                                // 44
});                                                                                                                 // 54
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"lib":{"main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// lib/main.js                                                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
CoListe = new Mongo.Collection('coliste');                                                                          // 1
Devices = new Mongo.Collection('devices');                                                                          // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/coList/template.coList.js");
require("./client/connectform/template.connectform.js");
require("./client/deviceList/template.deviceList.js");
require("./client/homeTemplate/template.homeTemplate.js");
require("./client/navBar/template.navBar.js");
require("./client/template.main.js");
require("./client/coList/coList.js");
require("./client/connectform/connectform.js");
require("./client/deviceList/deviceList.js");
require("./client/homeTemplate/homeTemplate.js");
require("./client/navBar/navBar.js");
require("./lib/main.js");
require("./client/main.js");
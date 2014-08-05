"use strict";

elFinder.prototype.commands.share= function() {

  var m   = 'msg',
    fm  = this.fm,
    msg = {
      doc_public   : fm.i18n('doc_public'),
      make_public  : fm.i18n('make_public'),
      tag          : "Mots-clés(tags)",
      files        : fm.i18n('files'),
      folders      : fm.i18n('folders'),
      items        : fm.i18n('items'),
      yes          : fm.i18n('yes'),
      no           : fm.i18n('no'),
      save         : fm.i18n('btnSave'),
      cancel       : fm.i18n('btnCancel')
    },
    doc_public,
    spclass = 'elfinder-info-spinner';

  this.tpl = {
    main       : '<div class="ui-helper-clearfix elfinder-info-title"><span class="elfinder-cwd-icon {class} ui-corner-all"/>{title}</div><table class="elfinder-info-tb">{content}</table>',
    itemTitle  : '<strong>{name}</strong><span class="elfinder-info-kind">{kind}</span>',
    groupTitle : '<strong>{items}: {num}</strong>',
    row        : '<tr><td id="msgId">{label} : </td><td>{value}</td></tr>',
    row_tag    : '<tr id="tagId" {disable} ><td>{label} : </td><td><ul id="myTabs" >{value}</ul></td></tr>',
    spinner    : '<span>{text}</span> <span class="'+spclass+'"/>'
  }
  this.updateOnSelect = false;
  this.shortcuts = [{
    pattern     : 'ctrl+s'
  }];

  this.init = function() {
    $.each(msg, function(k, v) {
      msg[k] = fm.i18n(v);
    });     
  }

  this.getstate = function(sel) {
    sel = sel || fm.selected();
    return !this._disabled && sel.length == 1 && $.map(sel, function(h) { var f = fm.file(h); return f && !f.locked && f.mime != "directory" ? h : null }).length == sel.length
      ? 0 : -1;
  }

  this.exec = function(hashes) {
    var files   = this.files(hashes),
    dfrd = $.Deferred();
    if (! files.length) {
      files   = this.files([ this.fm.cwd().hash ]);
    }

    var self    = this,
      fm      = this.fm,
      tpl     = this.tpl,
      row     = tpl.row,
      row_tag = tpl.row_tag,
      cnt     = files.length,
      tag     = [],
      content = [],
      disable = "",
      buttons = tpl.buttons,
      view    = tpl.main,
      l       = '{label}',
      v       = '{value}',
      msgPbc  = "",
      renduMime = [],
      opts    = {
        title : this.title,
        width : 'auto',
        buttons : {},
        close : function() { $(this).elfinderdialog('destroy'); }
      },
      count = [],
      replSpinner = function(msg) { dialog.find('.'+spclass).parent().text(msg); },
      id = fm.namespace+'-share-'+$.map(files, function(f) { return f.hash }).join('-'),
      dialog = fm.getUI().find('#'+id),
      size, tmb, file, title, dcnt,
      input_checked = function(id){
        return "<input type='checkbox' id='"+id+"' class='js-switch js-check-change' checked='checked' onchange='hide(this)'>"
      },
      input = function(id){
        return "<input type='checkbox' id='"+id+"' class='js-switch js-check-change' onchange='hide(this)'>"
      },

      save = function() {
        if (document.getElementById("publicId"+file.name).checked == true){
          doc_public = "1"
        } else {
          doc_public = "0"
        }
        fm.request({
              data : {
                cmd        : 'share',
                target     : file.hash,
                doc_public : doc_public,
                tag_list   : listTag,
                new_tag    : newListTag
              },
              // notify : {type : 'resize', cnt : 1}
            })
            .fail(function(error) {
              dfrd.reject(error);
            })
            .done(function() {
              dfrd.resolve();
            });
        newListTag=[];
        $(this).elfinderdialog('close');
      },
      cancel = function() {
        autocomp();
        removeAll();
        dfrd.reject();
        $(this).elfinderdialog('close');
      },

      file  = files[0];

      listTag = file.list_tag;

      renduMime = file.name.split(".");
      renduMime = renduMime[renduMime.length-1];

      doc_public = file.doc_public;

      view  = view.replace('{class}', fm.mime2class(file.mime));
      title = tpl.itemTitle.replace('{name}', fm.escape(file.i18 || file.name)).replace('{kind}', fm.mime2kind(file));
      inputId = "publicId"+file.name;
      dialogId = id;
      msgPbc = msg.doc_public;
      make_pub = msg.make_public;


      if (doc_public == 1){
        var public_input = $(input_checked("publicId"+file.name));
      } else {
        disable = "style='display:none;'";
        var public_input = $(input("publicId"+file.name));
      }

      // tag.push('<li><input type="text"/></li>');

      content.push(row.replace(l, msgPbc).replace(v,  public_input[0].outerHTML));
      content.push(row_tag.replace(l, msg.tag).replace(v, tag.join('')));

      opts.buttons[msg.save]   = save;
      opts.buttons[msg.cancel] = cancel;

      if (file.tmb) {
        tmb = fm.option('tmbUrl')+file.tmb;
      }

    view = view.replace('{title}', title).replace('{content}', content.join('')).replace('{disable}', disable);

    //implement what the custom command should do here
    dialog = fm.dialog(view, opts, buttons);
    dialog.attr('id', id);

    // // load thumbnail
    if (tmb) {
      $('<img/>')
        .load(function() { dialog.find('.elfinder-cwd-icon').css('background', 'url("'+tmb+'") center center no-repeat'); })
        .attr('src', tmb);
    }

    this.initSwitch();
  }

  this.initSwitch = function(){
    var elem = document.querySelector('.js-switch');
    var init = new Switchery(elem, { color: '#1aa1cb', secondaryColor: '#cccccc' });
  }
}
var newListTag = [],
listTag = [],
that,
new_tag = false,
s = "",
make_pub,
value = "",
init = false,
dialogId,
inputId;

function hide(input){
  // var input = document.querySelector('.js-check-click');
  if(input.checked){
    $("#tagId").show("slow");
    if(listTag==0){
      disabled($($('#'+dialogId)[0].nextSibling.firstChild.firstChild));
    }
    autocomp();
  } else {
    $("#tagId").hide("slow");
    disabled($($('#'+dialogId)[0].nextSibling.firstChild.firstChild));
  }
  return false;
}

function disabled(button){
  button.attr('title', make_pub);
  var myTooltip = button.tooltip({
    content: button.attr( "title" ),
    items: 'button'
    })
  .off( "mouseover" )
  .attr( "title", "" ).css({ cursor: "pointer" });
  if(document.getElementById(inputId).checked && (listTag.length == 0 || listTag == null)){
    button.attr('disabled', true);
    myTooltip.tooltip( "open" );
  } else {
    button.attr('disabled', false);
    myTooltip.tooltip( "close" );
  }
}

//recherche dichotomiquement un valeur dans une liste 
function include(array, value){
  array.sort();
  var mediane = 0; var deb = 0; var fin = array.length-1;
  while(deb <= fin){
    mediane = (deb+fin)/2;
    mediane = Math.round(mediane, 0);
    if(array[mediane].toLowerCase() == value.toLowerCase()) return mediane;
    else if(array[mediane].toLowerCase() < value.toLowerCase()) deb = mediane+1;
    else if(array[mediane].toLowerCase() > value.toLowerCase()) fin = mediane-1;
  }
  return -1;
}

function autocomp(){
 if ($("#myTabs").length > 0) {
  $('#myTabs').tagit(
  {
    allowSpaces: true,
    tagSource: function(search, showChoices) {
      that = this;
      $.ajax({
        url: virtual_path+"/api/connector/?cmd=searchTag",
        type:"get",
        dataType: 'json',
        data: 'q='+search.term,
        async: true,
        cache: true,
        success:function(choices){
          var index = include(choices.list_tag, search.term);
          if(index!=-1){
            value = choices.list_tag[index];
            new_tag=false;
          } else {
            value = "";
            new_tag=true;
          }
          return showChoices(that._subtractArray(choices.list_tag, that.assignedTags()));
        },
        error:function(XMLHttpRequest,textStatus, errorThrown){
          alert("Erreur de chargement...");
        }
      });
    },
    singleFieldDelimiter: ',',
    autocomplete: {
      delay: 0, 
      minLength: 2,
      select: function( event, ui ) {
        if(ui.item){
          new_tag=false;
          that.createTag(ui.item.value);
          return false;
        }
      }
    },

    beforeTagAdded: function(event, ui) {
      if(value != "" && new_tag == false){
        $(ui.tag[0]["children"][0]).text(value);
        if(include(listTag, value)==-1){
          ui.tagLabel = value;
        }
      }
      if(new_tag == true){
        ui.tag.addClass('tagit-choice-new-editable');
        newListTag.push(ui.tagLabel);
      }
      if(init == false){
        listTag.push(ui.tagLabel); 
      }
    },
    afterTagAdded: function(event, ui) {
      if($('#'+dialogId)[0] != null){
        disabled($($('#'+dialogId)[0].nextSibling.firstChild.firstChild));
      }
      value = "";
      new_tag = false;
      init = false;

    },
    beforeTagRemoved: function(event, ui) {
      var index = listTag.indexOf(ui.tagLabel);
      if(index != -1){
        listTag.splice(index, 1);
      }
      var indexTag = newListTag.indexOf(ui.tagLabel);
      if(indexTag != -1){
        newListTag.splice(indexTag, 1);
      }
      disabled($($('#'+dialogId)[0].nextSibling.firstChild.firstChild));
    }
  }
  );
 }
}

function createTag(){
  if(listTag.length != 0){
    for(var i = 0; i<listTag.length;i++){
      init = true;
      if ($("#myTabs").length > 0)  $("#myTabs").tagit('createTag', listTag[i]);
    }
  }
  return false;
}

function removeAll(){
  for(var i =0; i<newListTag.length;i++){
    var index = include(listTag, newListTag[i]);
    if(index !=-1){
      listTag.splice(index, 1);
    }
     if ($("#myTabs").length > 0) $("#myTabs").tagit("removeTagByLabel", newListTag[i]);
  }
  newListTag = [];
  return false;
}


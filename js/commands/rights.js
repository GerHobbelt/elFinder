"use strict";

elFinder.prototype.commands.rights= function() {

  var m   = 'msg',
    fm  = this.fm,
    msg = {
      locked   : fm.i18n('locked'),
      read   : fm.i18n('read'),
      write   : fm.i18n('write'),
      files    : fm.i18n('files'),
      folders  : fm.i18n('folders'),
      items    : fm.i18n('items'),
      yes      : fm.i18n('yes'),
      no       : fm.i18n('no'),
      save     : fm.i18n('btnSave'),
      cancel   : fm.i18n('btnCancel')
    },
    locked, read, write,date,
    spclass = 'elfinder-info-spinner'

  this.tpl = {
    main       : '<div class="ui-helper-clearfix elfinder-info-title"><span class="elfinder-cwd-icon {class} ui-corner-all"/>{title}</div><table class="elfinder-info-tb">{content}</table>',
    itemTitle  : '<strong>{name}</strong><span class="elfinder-info-kind">{kind}</span>',
    groupTitle : '<strong>{items}: {num}</strong>',
    row        : '<tr><td>{label} : </td><td>{value}</td></tr>',
    spinner    : '<span>{text}</span> <span class="'+spclass+'"/>'
  }

  this.updateOnSelect = false;
  this.shortcuts = [{
    pattern     : 'ctrl+r'
  }];

  this.init = function() {
    $.each(msg, function(k, v) {
      msg[k] = fm.i18n(v);
    });     
  }

  this.getstate = function(sel) {
    sel = sel || fm.selected();
    return !this._disabled && sel.length == 1 && $.map(sel, function(h) { var f = fm.file(h); return f && f.locked_rights && !f.doc_public && !f.locked ? h : null }).length == sel.length
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
      cnt     = files.length,
      content = [],
      buttons = tpl.buttons,
      view    = tpl.main,
      l       = '{label}',
      v       = '{value}',
      renduMime = [],
      opts    = {
        title : this.title,
        width : 'auto',
        buttons : {},
        close : function() { $(this).elfinderdialog('destroy'); }
      },
      count = [],
      replSpinner = function(msg) { dialog.find('.'+spclass).parent().text(msg); },
      id = fm.namespace+'-rights-'+$.map(files, function(f) { return f.hash }).join('-'),
      dialog = fm.getUI().find('#'+id),
      size, tmb, file, classFile, title, dcnt,
      input_checked = function(id){
        return "<input type='checkbox' id='"+id+"' checked='checked'>"
      },
      input = function(id){
        return "<input type='checkbox' id='"+id+"'>"
      },

      save = function() {
        if (document.getElementById("lockedId"+file.name).checked == true){
          locked = "1"
        } else {
          locked = "0"
        }
        if (document.getElementById("readId"+file.name).checked == true){
          read = "1"
        } else {
          read = "0"
        }
        if (document.getElementById("writeId"+file.name).checked == true){
          write = "1"
        } else {
          write = "0"
        }
        if($('#datepicker')[0] != null){
          date = $('#datepicker')[0].value;
        }
        fm.request({
              data : {
                cmd    : 'rights',
                target : file.hash,
                read   : read,
                write  : write,
                locked : locked,
                date   : date,
              },
              // notify : {type : 'resize', cnt : 1}
            })
            .fail(function(error) {
              dfrd.reject(error);
            })
            .done(function() {
              dfrd.resolve();
            });
        $(this).elfinderdialog('close');
      },
      cancel = function() {
        dfrd.reject();
        $(this).elfinderdialog('close');
      },

      inputPicker = function(value){
        var picker = $("<input>", {
          type: 'text',
          align: 'center',
          id: 'datepicker',
          style: "width:60px;",
          value: value
        });
        return picker;
      };

      file  = files[0];

      renduMime = file.name.split(".");
      renduMime = renduMime[renduMime.length-1];

      locked = file.locked_rights;
      read = file.read_rights;
      write = file.write_rights;
      date = file.date_rendu

      classFile = fm.mime2classdirectory(file.mime, file.name);
      if (classFile == null){
        classFile = fm.mime2class(file.mime);
      }
      view  = view.replace('{class}', classFile);
      title = tpl.itemTitle.replace('{name}', fm.escape(file.i18 || file.name)).replace('{kind}', fm.mime2kind(file));


      if (locked == "1"){
        var locked_input = $(input_checked("lockedId"+file.name))
      } else {
        var locked_input = $(input("lockedId"+file.name))
      }

      if (read == "1"){
        var read_input = $(input_checked("readId"+file.name))
      } else {
        var read_input = $(input("readId"+file.name))
      }


      if (write == "1"){
        var write_input = $(input_checked("writeId"+file.name))
      } else {
        var write_input = $(input("writeId"+file.name))
      }

      content.push(row.replace(l, msg.locked).replace(v,  locked_input[0].outerHTML));

      content.push(row.replace(l, msg.read).replace(v,  read_input[0].outerHTML));

      content.push(row.replace(l, msg.write).replace(v,  write_input[0].outerHTML));

      if(file.mime == "directory" && renduMime == "rendu"){
        content.push(row.replace(l, "rendre jusqu'au").replace(v,  inputPicker(date)[0].outerHTML));
      }

      opts.buttons[msg.save]   = save;
      opts.buttons[msg.cancel] = cancel;

      if (file.tmb) {
        tmb = fm.option('tmbUrl')+file.tmb;
      }


    view = view.replace('{title}', title).replace('{content}', content.join(''));

    //implement what the custom command should do here
    dialog = fm.dialog(view, opts, buttons);
    dialog.attr('id', id)

    // // load thumbnail
    if (tmb) {
      $('<img/>')
        .load(function() { dialog.find('.elfinder-cwd-icon').css('background', 'url("'+tmb+'") center center no-repeat'); })
        .attr('src', tmb);
    }
  }


}

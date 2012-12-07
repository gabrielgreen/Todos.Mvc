var TodosUI = Class.create({

    initialize: function (params) {
        this.ajaxURL = params.addURL;
        this.setupFormKeypressHandler();
        this.showAdd();
    },

    // Intercepts the ENTER keypress on the text box for adding a new item
    // If there is non-whitespace in the text box then perform AJAX update
    setupFormKeypressHandler: function () {
        me = this;
        this.theForm().keypress(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                if (!String.isNullOrWhitespace(me.itemInput().val())) {
                    me.doAjax();
                }
            }
        });
    },

    // Performs an AJAX POST of serialized form data to an action method 
    // which returns the content of a rendered partial view to replace
    // the HTML of the item list
    doAjax: function (url) {
        me = this;
        jQuery.ajax(this.ajaxURL, {
            type: 'POST',
            data: me.theForm().serialize(),
            success: function (data) {
                me.setItems(data);
                me.clearInput();
            }
        });
    },

    // Replaces the HTML of the item list
    setItems: function (content) {
        this.todoList().html(content);
    },

    // 
    // These functions manage the text for adding a new item
    //

    showAdd: function () {
        this.itemInput().removeClass('not-visible');
        this.itemInput().focus();
    },

    clearInput: function () {
        this.itemInput().val('');
    },

    //
    // These functions return the jQuery object for the DOM element
    //

    itemInput: function () {
        return jQuery('#input-todo');
    },

    todoList: function () {
        return jQuery('#container-todos');
    },

    theForm: function () {
        return jQuery('form');
    }

});

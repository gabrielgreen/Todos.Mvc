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

    // Intercepts a click on an item and toggles the completion state
    // This method is called each time the partial view is displayed
    setupItemClickHandler: function() {
        me = this;
        this.allItems().click(function () {

            // Toggle the visual class to indicate item completion status
            jQuery(this).toggleClass('is-done');

            // Toggle the hidden value for this item to preserve view state
            var idNum = this.id.split('-')[1];
            var hidden = jQuery('#' + 'hidden-item-is-done-' + idNum);
            if (jQuery(this).hasClass('is-done')) {
                hidden.val("True");
            }
            else {
                hidden.val("False");
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
    },

    allItems: function () {
        return jQuery('.todo-item>span');
    }

});

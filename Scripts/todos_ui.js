var TodosUI = Class.create({
    initialize: function (params) {
        this.ajaxURL = params.addURL;
        this.setupFormKeypressHandler();
        this.showAdd();
    },
    setupFormKeypressHandler: function () {
        me = this;
        jQuery('form').keypress(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                if (!String.isNullOrWhitespace(me.itemInput().val())) {
                    me.doAjax();
                }
            }
        });
    },
    doAjax: function (url) {
        me = this;
        jQuery.ajax(this.ajaxURL, {
            type: 'POST',
            data: jQuery('form').serialize(),
            success: function (data) {
                me.setItems(data);
                me.clearInput();
            }
        });
    },
    showAdd: function () {
        this.itemInput().removeClass('not-visible');
        this.itemInput().focus();
    },
    setItems: function (content) {
        this.todoList().html(content);
    },
    clearInput: function () {
        this.itemInput().val('');
    },
    itemInput: function () {
        return jQuery('#input-todo');
    },
    todoList: function () {
        return jQuery('#container-todos');
    }
});

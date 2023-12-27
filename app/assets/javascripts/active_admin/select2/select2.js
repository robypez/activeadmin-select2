'use strict';

function initSelect2(inputs, extra = {}) {
  inputs.each(function () {
    const item = $(this);
    // Reading from data allows <input data-select2='{"tags": ['some']}'> to be passed to select2
    const options = $.extend({ allowClear: true }, extra, item.data('select2'));
    // Because select2 reads from input.data to check if it is select2 already
    item.data('select2', null);
    item.select2(options);
  });
}

$(document).on('has_many_add:after', '.has_many_container', function (e, fieldset) {
  initSelect2(fieldset.find('.select2-input'));
});

$(document).on('ready page:load turbolinks:load', function () {
  initSelect2($(".select2-input"), { placeholder: "" });
});


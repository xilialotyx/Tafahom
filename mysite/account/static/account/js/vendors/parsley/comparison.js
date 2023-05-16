// Greater than validator
window.ParsleyValidator.addValidator('gt',
    function (value, requirement) {
        return parseFloat(value) > parseFloat($(requirement).val());
    }, 32)
    .addMessage('en', 'gt', 'این مقدار باید بزرگتر باشد از');

// Greater than or equal to validator
window.ParsleyValidator.addValidator('gte',
    function (value, requirement) {
        return parseFloat(value) >= parseFloat($(requirement).val());
    }, 32)
    .addMessage('en', 'gte', 'این مقدار باید بزرگتر یا مساوی باشد از ');

// Less than validator
window.ParsleyValidator.addValidator('lt',
    function (value, requirement) {
        return parseFloat(value) < parseFloat($(requirement).val());
    }, 32)
    .addMessage('en', 'lt', 'این مقدار باید کوچک تر باشد از');

// Less than or equal to validator
window.ParsleyValidator.addValidator('lte',
    function (value, requirement) {
        return parseFloat(value) <= parseFloat($(requirement).val());
    }, 32)
    .addMessage('en', 'lte', 'این مقدار باید کوچکتر یا مساوی باشد از');

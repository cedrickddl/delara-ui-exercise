var processData = function() {
    var sentence = $('#inputSentence').val();
    var wordsContainer = [];


    if (!sentence) {
        alert('Textbox is empty!');
        return;
    }

    wordsContainer= sentence.split(' ');

    for (var i in wordsContainer) {
        if (i % 2 !== 0) {
            wordsContainer[i] = wordsContainer[i].split('').reverse().join('');
        }
    }
    $('.processed-text').text(wordsContainer.join(' '));
    $('#resultModal').modal('show');
}
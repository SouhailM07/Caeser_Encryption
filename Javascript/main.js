function s(name, number) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return name = name.toLowerCase().split('').map(function (e) {
        if (arr.includes(e)) {
            if (arr.indexOf(e) + number > 25)
                return arr[arr.indexOf(e) + number - 26];
            else if (number < 0 && arr.indexOf(e) + number < 0)
                return arr[arr.indexOf(e) + number + 26];
            else
                return arr[arr.indexOf(e) + number];
        }
        else
            return e;
    }).join('').toUpperCase();
}
let number_input = document.querySelector('#selected_number'), sb_mark = document.querySelector('#sb_mark'), text_input = document.querySelector('#textarea_input'), text_output = document.querySelector('#output');
sb_mark.addEventListener('click', function () {
    number_input.style.display = 'block';
});
text_input.addEventListener('input', function () {
    text_output.textContent = s(this.value, +number_input.value);
});
text_output.addEventListener('click', function () {
    if (this.textContent.length > 0) {
        navigator.clipboard.writeText(text_output.textContent);
        alert("Copied the text: " + text_output.textContent);
    }
});
document.addEventListener('keydown', function (event) {
    // Check if Ctrl, Shift, and S are pressed
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 's') {
        // Prevent the default browser save functionality
        event.preventDefault();
        //! switch
        //   console.log('Ctrl + Shift + S pressed');
        number_input.value = (-number_input.value).toString();
    }
});

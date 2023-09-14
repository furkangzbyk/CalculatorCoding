"use";
var _buttons = document.getElementsByTagName("button"),
_length = _buttons.length,
i = 0,
_script = document.getElementById("conclusion");


for (i = 0; i<_length; i++){
_buttons[i].onclick = calculate; 
}

function calculate(){
    var _value = this.innerHTML;
    if(_value == "="){
        try{
            _script.value = eval(_script.value);
        } catch (e){
            _script.value = "0";
        }
        return;
    }

    _script.value += _value;
}
import ace from 'brace'
import 'brace/ext/statusbar'
import 'brace/ext/language_tools'
import 'brace/theme/monokai'

var editor = ace.edit("editor");
//editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/json");

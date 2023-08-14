// JS - app.js

// Importing the Froala Editor
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';

document.addEventListener('DOMContentLoaded', function() {
    const editorElement = document.getElementById('editor');

    new FroalaEditor(editorElement, {
        // Setting the autostart option
        autosta2rt: true
    });
});

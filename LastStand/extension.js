//Importing Native Modules 
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();
const ext = ME.imports.exts;

//Importing GObject-Introspection namespaces
const St = imports.gi.St;

//Importing Gnome-Shell UI
const Main = imports.ui.main;






// Init() function is first function that will be initialized, then enable() and disable() will follow. 
function init() {
    return new ext.Extension();
}












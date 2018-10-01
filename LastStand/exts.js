const St = imports.gi.St;
const Main = imports.ui.main;


class PanelButton extends St.Bin {
    constructor() {
        super();
        this.style_class = "panel-button";
        this.reactive = true;
        this.can_focus = true;
        this.x_fill = true;
        this.y_fill = false;
        this.track_hover = true;
    }
};


/**
 * this.icon_name @see https://developer.gnome.org/st/3.24/st-st-icon.html#StIcon--icon-name
 * this.icon_size @see https://developer.gnome.org/st/3.24/st-st-icon.html#StIcon--icon-size
 *
 */

class ButtonIcon extends St.Icon {
    constructor() {
        super();
        this.style_class = "system-run-symbolic";
        this.icon_name = "system-run-symbolic";
        this.icon_size = 25;
    }

};


class Extension {
    constructor() {
        this.label = null;
        this.button = null;
    }

    enable() {
        this.button = new PanelButton();
        this.icon = new ButtonIcon();


        this.button.set_child(this.icon);
        // Use panel from Main namespace to insert button at the beginning of panel's right box.
        Main.panel._rightBox.insert_child_at_index(this.button, 0);
    }


    disable() {
        Main.panel._rightBox.remove_child(this.button);
    }
};

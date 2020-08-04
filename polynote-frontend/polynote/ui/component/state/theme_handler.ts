import {UserPreferences, UserPreferencesHandler} from "./storage";
import * as monaco from "monaco-editor";

export class ThemeHandler {
    constructor() {
        const handlePref = (pref: typeof UserPreferences["theme"]) => {
            console.log("Setting theme to ", pref.value)
            if (pref.value) {
                const el = document.getElementById("polynote-color-theme");
                if (el) {
                    el.setAttribute("href", `static/style/colors-${pref.value.toLowerCase()}.css`);
                }
                monaco.editor.setTheme(`polynote-${pref.value.toLowerCase()}`);
            }
        }
        handlePref(UserPreferencesHandler.getState().theme)
        UserPreferencesHandler.view("theme").addObserver(pref => handlePref(pref))
    }
}

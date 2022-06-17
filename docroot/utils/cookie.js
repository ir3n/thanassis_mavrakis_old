class CookieHelper {
    /**
     * Save a cookie
     * @param name
     * @param value
     * @param days
     */
    save = (name, value, days) => {
        if (typeof document === 'undefined') return null;

        let expires;
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toGMTString();
        } else expires = '';
        document.cookie = name + '=' + value + expires + '; path=/';
    };

    /**
     * loads a cookie by name
     * @param name
     * @returns {*}
     */
    load = (name) => {
        if (typeof document === 'undefined') return null;

        let nameEQ = name + '=';
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    /**
     * removes a cookie by name
     * @param name
     */
    remove = (name) => {
        this.save(name, '', -1);
    };
}

export default new CookieHelper();

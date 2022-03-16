import { Controller } from "xpresser/types/http";

const AppController = <Controller.Object>{
    /**
     * Controller name.
     * @type {string}
     */
    name: "AppController",

    /**
     * Index Method for "/"
     * @returns {string}
     */
    index: () => "<h1>My xpresser Typescript lite project</h1>",

    /**
     * 404 Page handler
     * @param http
     */
    notFound: (http) => http.notFound()
};

export = AppController;

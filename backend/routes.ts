import { getInstanceRouter } from "xpresser";

/**
 * See https://xpresserjs.com/router/
 */
const Route = getInstanceRouter();

/**
 * Url: "/" points to AppController@index
 * The index method of the controller.
 */
Route.get("/", "App@index").name("index");

/**
 * Add 404 routes after plugins are loaded.
 */
Route.routesAfterPlugins = () => {
    Route.get("*", "App@notFound").name("404");
};

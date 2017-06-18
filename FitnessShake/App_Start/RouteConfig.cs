using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace FitnessShake
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "landing",
                url: "home/landing",
                defaults: new { controller = "Home", action = "Landing" });

            routes.MapRoute(
                name: "site",
                url: "site/index/",
                defaults: new { controller = "Site", action = "Index" });

            routes.MapRoute(
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" });

            routes.MapRoute(
                name: "register",
                url: "Account/Register",
                defaults: new { controller = "Account", action = "Register" });

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" });
        }
    }
}


//routes.MapRoute(
//    name: "routeTwo",
//    url: "routesDemo/Two/{donuts}",
//    defaults: new { controller = "RoutesDemo", action = "Two", donuts = UrlParameter.Optional });
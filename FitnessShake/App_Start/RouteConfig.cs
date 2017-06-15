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
                name: "routeOne",
                url: "test/One",
                defaults: new { controller = "Test", action = "One" });

            routes.MapRoute(
                name: "routeTwo",
                url: "test/Two/",
                defaults: new { controller = "Test", action = "Two" });

            //routes.MapRoute(
            //    name: "routeTwo",
            //    url: "routesDemo/Two/{donuts}",
            //    defaults: new { controller = "RoutesDemo", action = "Two", donuts = UrlParameter.Optional });

            routes.MapRoute(
                name: "routeThree",
                url: "test/Three",
                defaults: new { controller = "Test", action = "Three" });

            routes.MapRoute(
                name: "routeFour",
                url: "test/Four",
                defaults: new { controller = "Test", action = "Four" });

            routes.MapRoute(
                name: "sliderOne",
                url: "slider/One",
                defaults: new { controller = "Slider", action = "One" });


            routes.MapRoute(
                name: "sliderTwo",
                url: "slider/Two",
                defaults: new { controller = "Slider", action = "Two" });



            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" });
        }
    }
}

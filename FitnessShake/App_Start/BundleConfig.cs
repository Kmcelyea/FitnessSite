using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace FitnessShake
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                       "~/Content/site.css",
                       "~/Content/bootstrap.scss"));
            bundles.Add(new ScriptBundle("~/bundles/Application")
            .IncludeDirectory("~/Scripts/App/Controllers", "*.js")
            .Include("~/Scripts/App/Application.js"));


            BundleTable.EnableOptimizations = true;
        }
    }
}

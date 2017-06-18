using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FitnessShake.Controllers
{
    [Authorize]
    public class SiteController : Controller
    {
        // GET: Site
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}
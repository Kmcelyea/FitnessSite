using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace FitnessShake.Data
{
    public class AppContext : DbContext
    {

        public AppContext()
        {
            Configuration.ProxyCreationEnabled = false;
        }
    }
}

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SimpleToDo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CheckController : ControllerBase
    {
        private readonly ILogger<CheckController> _logger;

        public CheckController(ILogger<CheckController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
            => '"' +
               "Executing: " +
               Path.GetFileName(Assembly.GetExecutingAssembly().Location) +
               " Time: " +
               DateTime.Now.ToLongTimeString() + '"';
    }
}

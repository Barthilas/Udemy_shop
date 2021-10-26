using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController] //Does some validation, try remove it.
    [Route("api/[controller]")]
    public class BaseController : ControllerBase
    {
        
    }
}
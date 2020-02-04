using Microsoft.AspNetCore.Mvc;
using Trips.Data;

namespace Trips.Controllers
{
    [Route("api/[controller]")]
    public class TripsController : Controller
    {
        private ITripService _service;
        public TripsController(ITripService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult ReadAll()
        {
            return Ok(_service.ReadAll());
        }

        [HttpPost("Create")]
        public IActionResult Create([FromBody]Trip trip)
        {
            if (trip != null)
            {
                _service.Create(trip);
            }

            return Ok();
        }
    }
}
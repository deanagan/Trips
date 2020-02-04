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

        [HttpPut("[action]/{id}")]
        public IActionResult Update(int id, [FromBody]Trip trip)
        {
            _service.Update(id, trip);
            return Ok();
        }

        [HttpGet("[action]")]
        public IActionResult ReadAll()
        {
            return Ok(_service.ReadAll());
        }

        [HttpPost("[action]")]
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
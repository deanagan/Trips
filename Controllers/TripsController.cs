using System;
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

        [HttpDelete("[action]/{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }

        [HttpPut("[action]/{id}")]
        public IActionResult Update(int id, [FromBody]Trip trip)
        {
            try
            {
                _service.Update(id, trip);
                return Ok();
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("[action]")]
        public IActionResult ReadAll()
        {
            try
            {
                return Ok(_service.ReadAll());
            } catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("[action]/{id}")]
        public IActionResult Read(int id)
        {
            try
            {
                return Ok(_service.Read(id));
            } catch(Exception ex) {
                return BadRequest(ex.Message);
            }
            
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody]Trip trip)
        {
            if (trip != null)
            {
                _service.Create(trip);
                return Ok();
            }
            
            return BadRequest("Trip creation failed.");

            
        }
    }
}
using System.Collections.Generic;
using System.Linq;

namespace Trips.Data
{
    public class TripService : ITripService
    {
        public void Create(Trip trip)
        {
            Data.Trips.Add(trip);
        }

        public void Delete(int id)
        {
            var tripToDelete = Data.Trips.FirstOrDefault(n => n.Id == id);
            if (tripToDelete != null)
            {
                Data.Trips.Remove(tripToDelete);
            }
        }

        public Trip Read(int id)
        {
            throw new System.NotImplementedException();
        }

        public List<Trip> ReadAll() => Data.Trips.ToList();
        

        public void Update(int id, Trip trip)
        {
            var tripToUpdate = Data.Trips.FirstOrDefault(n => n.Id == id);

            if (tripToUpdate != null)
            {
                tripToUpdate.Name = trip.Name;
                tripToUpdate.Description = trip.Description;
                tripToUpdate.DateStarted = trip.DateStarted;
                tripToUpdate.DateCompleted = trip.DateCompleted;
            }
        }
    }
}
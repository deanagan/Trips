using System.Collections.Generic;

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
            throw new System.NotImplementedException();
        }

        public Trip Read(int id)
        {
            throw new System.NotImplementedException();
        }

        public List<Trip> ReadAll()
        {
            throw new System.NotImplementedException();
        }

        public void Update(int id, Trip trip)
        {
            throw new System.NotImplementedException();
        }
    }
}
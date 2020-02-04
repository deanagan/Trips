using System.Collections.Generic;

namespace Trips.Data
{
    public interface ITripService
    {
        void Create(Trip trip);
        List<Trip> ReadAll();
        Trip Read(int id);
        void Update(int id, Trip trip);
        void Delete(int id);
    }
}
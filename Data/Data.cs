using System;
using System.Collections.Generic;

namespace Trips.Data
{
    // TODO: In-Memory Data Only. Create DB context.
    public static class Data
    {
        public static List<Trip> Trips => readAll;

        static List<Trip> readAll = new List<Trip>
        {
            new Trip
            {
                Id=1,
                Name="Cebu, Philippines",
                Description="Cebu is one of the most beautiful cities in the Philippines.",
                DateStarted = new DateTime(2018, 04, 19),
                DateCompleted = new DateTime(2018, 05, 03)
            },
            new Trip
            {
                Id=2,
                Name="Tokyo, Japan",
                Description="Tokyp is one of the busiest cities in the World!",
                DateStarted = new DateTime(2019, 08, 27),
                DateCompleted = new DateTime(2019, 09, 08)
            },
            new Trip
            {
                Id=3,
                Name="New York, U.S.A",
                Description="I want to be a part of it, New york! New york!",
                DateStarted = new DateTime(2019, 12, 12),
                DateCompleted = null
            },

        };
    }

}
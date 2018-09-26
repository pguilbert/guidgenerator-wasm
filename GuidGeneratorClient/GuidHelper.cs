using System;

namespace GuidGeneratorClient
{
    public static class GuidHelper
    {
        public static string NewGuid(string format = "D", int uppercase = 0)
        {
            string guid = Guid.NewGuid().ToString(format);
            return uppercase == 1 ? guid.ToUpper() : guid;
        }
    }
}

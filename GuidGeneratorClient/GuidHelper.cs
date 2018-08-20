using System;

namespace GuidGeneratorClient
{
    public static class GuidHelper
    {
        public static string NewGuid() => Guid.NewGuid().ToString();
    }
}

using Trio.HospitalManagement.Contracts;

namespace Trio.HospitalManagement.Api.Tests.Common
{
    public class TestApiResult<T>
    {
        public TestApiResult(HttpResponseMessage message, string content, Response<T> response)
        {
            Message = message;
            Content = content;
            Response = response;
        }

        public HttpResponseMessage Message { get; set; }
        public string Content { get; set; }
        public Response<T> Response { get; set; }
    }
}

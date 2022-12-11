using System;

namespace app.vediai.Models
{
	public class InterviewerAccountModel
	{
		public int id { get; set; }

		public string FirstName { get; set; }

		public string LastName { get; set; }

		public string Email { get; set; }

		public string Password { get; set; }

		public string Bio { get; set; }

		public DateOnly DateRegistered { get; set; }

        public int Cost { get; set; }
    }
}


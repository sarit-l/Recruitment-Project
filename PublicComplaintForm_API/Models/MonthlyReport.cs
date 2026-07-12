namespace PublicComplaintForm_API.Models
{
    public class MonthlyReport
    {
        public string DepartmentName { get; set; } = string.Empty;

        public int CurrentMonth { get; set; }

        public int PreviousMonth { get; set; }

        public int SameMonthLastYear { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Todos.Mvc.Models
{
    public class TodosVM
    {
        public List<string> Todos { get; set; }

        public TodosVM()
        {
            Todos = new List<string>();
        }
    }
}
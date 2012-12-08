using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Todos.Mvc.Models
{
    public class TodosVM
    {
        public List<TodoItem> Todos { get; set; }

        public TodosVM()
        {
            Todos = new List<TodoItem>();
        }
    }

    public class TodoItem
    {
        public string Text { get; set; }
        public bool IsDone { get; set; }
    }
}
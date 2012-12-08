using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Todos.Mvc.Models;

namespace Todos.Mvc.Controllers
{
    public class TodosController : Controller
    {
        //
        // GET: /Todos/

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        //
        // POST: /Todos/Add

        [HttpPost]
        public ActionResult Add(List<TodoItem> Todos, string addTodo)
        {
            var viewModel = new TodosVM();

            if (Todos != null)
            {
                viewModel.Todos.AddRange(Todos);
            }

            if (!string.IsNullOrWhiteSpace(addTodo))
            {
                viewModel.Todos.Add(new TodoItem { Text = addTodo });
            }

            return PartialView("ListPartial", viewModel);
        }

    }
}

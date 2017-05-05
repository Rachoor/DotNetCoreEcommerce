using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EcommerceApplication.Services.Infrastructure;
using Microsoft.AspNetCore.Identity;
using EcommerceApplication.Models;

namespace EcommerceApplication.Areas.Admin.Controllers
{

    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class CategoryController : Controller
    {
        private readonly ICategory _categoryRepository;
        
        public CategoryController(ICategory categoryRepository)
        {
            _categoryRepository = categoryRepository;
            
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            var categories = _categoryRepository.GetAll();
            return View(categories);
        }
    }
}

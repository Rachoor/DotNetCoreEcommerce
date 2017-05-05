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
    public class ProductsController : Controller
    {
        private readonly IProduct _productRepository;
        private readonly ICategory _categoryRepository;
        private readonly UserManager<Customer> _userManager;

        public ProductsController(IProduct productRepository, ICategory categoryRepository, UserManager<Customer> userManager)
        {
            _productRepository = productRepository;
            _categoryRepository = categoryRepository;
            _userManager = userManager;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Update()
        {
            return View();
        }

        public IActionResult Delete()
        {
            return View();
        }
    }
}

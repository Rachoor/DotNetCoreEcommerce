﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using EcommerceApplication.Models;
using EcommerceApplication.ViewModels.Account;

namespace EcommerceApplication.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<Customer> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly SignInManager<Customer> _signInManager;

        public AccountController(UserManager<Customer> userManager, RoleManager<ApplicationRole> roleManager, SignInManager<Customer> signInManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        #region Register Settings

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel registerVM)
        {
            if (ModelState.IsValid)
            {
                var customer = new Customer { UserName = registerVM.Email, Email = registerVM.Email };
                var result = await _userManager.CreateAsync(customer, registerVM.Password);

                if (result.Succeeded)
                {
                    if (!_roleManager.RoleExistsAsync("SiteUser").Result)
                    {
                        ApplicationRole role = new ApplicationRole();
                        role.Name = "SiteUser";

                        IdentityResult roleResult = _roleManager.CreateAsync(role).Result;

                        if (!roleResult.Succeeded)
                        {
                            ModelState.AddModelError("", "Something went wrong");
                            return View(registerVM);
                        }
                    }

                    _userManager.AddToRoleAsync(customer, "SiteUser").Wait();
                    await _signInManager.SignInAsync(customer, isPersistent: false);
                    return RedirectToAction("Login", "Account");
                }
            }

            return View(registerVM);
        }

        #endregion


    }
}

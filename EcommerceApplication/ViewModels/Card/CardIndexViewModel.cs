using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceApplication.ViewModels.Card
{
    public class CardIndexViewModel
    {
        public CardIndexViewModel()
        {
            CardProductViewModelList = new List<CardProductViewModel>();
        }
        
        public List<CartProductViewModel> CardProductViewModelList { get; set; }

        public decimal CardTotalPrice { get; set; }

    }
}

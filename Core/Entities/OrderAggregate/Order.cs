using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities.OrderAggregate
{
    public class Order : BaseEntity
    {
        public Order()
        {
        }

        public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail, Address shipToAddres, DeliveryMethod deliveryMethod, decimal subtotal,string paymentIntentId)
        {
            BuyerEmail = buyerEmail;
            ShipToAddres = shipToAddres;
            DeliveryMethod = deliveryMethod;
            OrderItems = orderItems;
            Subtotal = subtotal;
            PaymentIntentId = paymentIntentId;
        }

        public string BuyerEmail { get; set; } 

        public DateTimeOffset OrderDate {get; set;} = DateTimeOffset.Now;

        public Address ShipToAddres { get; set; }

        public DeliveryMethod DeliveryMethod {get; set; }

        public IReadOnlyList<OrderItem> OrderItems { get; set; }

        public decimal Subtotal { get; set; }

        public OrderStatus Status {get; set;} = OrderStatus.Pending;

        public string PaymentIntentId { get; set; }

        //automappe convenience GetSOMETHING return total:
        public decimal GetTotal() {
            return Subtotal + DeliveryMethod.Price;
        }
    }
}
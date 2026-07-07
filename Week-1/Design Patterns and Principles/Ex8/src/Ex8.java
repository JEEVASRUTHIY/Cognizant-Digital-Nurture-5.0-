public class Ex8 {

    public static void main(String[] args) {

        // Pay using Credit Card
        PaymentContext payment = new PaymentContext();
        payment.setPaymentStrategy(new CreditCardPayment());
        payment.makePayment(5000);

        System.out.println();

        // Pay using PayPal
        payment.setPaymentStrategy(new PayPalPayment());
        payment.makePayment(2500);
    }
}

// Strategy Interface
interface PaymentStrategy {
    void pay(double amount);
}

// Concrete Strategy - Credit Card
class CreditCardPayment implements PaymentStrategy {

    @Override
    public void pay(double amount) {
        System.out.println("Paid Rs." + amount + " using Credit Card.");
    }
}

// Concrete Strategy - PayPal
class PayPalPayment implements PaymentStrategy {

    @Override
    public void pay(double amount) {
        System.out.println("Paid Rs." + amount + " using PayPal.");
    }
}

// Context Class
class PaymentContext {

    private PaymentStrategy paymentStrategy;

    // Set the payment strategy
    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    // Execute the selected strategy
    public void makePayment(double amount) {
        paymentStrategy.pay(amount);
    }
}
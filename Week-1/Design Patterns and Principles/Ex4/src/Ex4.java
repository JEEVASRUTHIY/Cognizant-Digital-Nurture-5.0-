public class Ex4 {

    public static void main(String[] args) {

        // Using PayPal
        PaymentProcessor paypal = new PayPalAdapter();
        paypal.processPayment(500);

        System.out.println();

        // Using Google Pay
        PaymentProcessor googlePay = new GooglePayAdapter();
        googlePay.processPayment(1000);
    }
}

// Target Interface
interface PaymentProcessor {
    void processPayment(double amount);
}

// Adaptee Class 1
class PayPalGateway {

    public void makePayment(double amount) {
        System.out.println("Payment of Rs." + amount + " processed using PayPal.");
    }
}

// Adaptee Class 2
class GooglePayGateway {

    public void pay(double amount) {
        System.out.println("Payment of Rs." + amount + " processed using Google Pay.");
    }
}

// Adapter for PayPal
class PayPalAdapter implements PaymentProcessor {

    private PayPalGateway paypal = new PayPalGateway();

    @Override
    public void processPayment(double amount) {
        paypal.makePayment(amount);
    }
}

// Adapter for Google Pay
class GooglePayAdapter implements PaymentProcessor {

    private GooglePayGateway googlePay = new GooglePayGateway();

    @Override
    public void processPayment(double amount) {
        googlePay.pay(amount);
    }
}
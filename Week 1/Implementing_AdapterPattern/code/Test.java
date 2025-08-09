interface PaymentProcessor {
    boolean processPayment(double amt, String currency);
}

class GPayGateway{
    public void makePayment(double amt, String currency) {
        System.out.println("Processing $" + amt + " " + currency + " payment through GPay");
    }
}

class RazorPayGateway{
    public void makePayment(double amt, String currency) {
        System.out.println("Processing $" + amt + " " + currency + " payment through RazorPay");
    }
}
class PayPalGateway{
    public void makePayment(double amt, String currency) {
        System.out.println("Processing $" + amt + " " + currency + " payment through PayPal");
    }
}

class GPayAdapter implements PaymentProcessor {
    private GPayGateway gPayGateway;

    public GPayAdapter(GPayGateway gPayGateway) {
        this.gPayGateway = gPayGateway;
    }

    @Override
    public boolean processPayment(double amt, String currency) {
        gPayGateway.makePayment(amt, currency);
        return true;
    }
}

class RazorPayAdapter implements PaymentProcessor {
    private RazorPayGateway razorPayGateway;

    public RazorPayAdapter(RazorPayGateway razorPayGateway) {
        this.razorPayGateway = razorPayGateway;
    }

    @Override
    public boolean processPayment(double amt, String currency) {
        razorPayGateway.makePayment(amt, currency);
        return true;
    }
}

class PayPalAdapter implements PaymentProcessor {
    private PayPalGateway payPalGateway;

    public PayPalAdapter(PayPalGateway payPalGateway) {
        this.payPalGateway = payPalGateway;
    }

    @Override
    public boolean processPayment(double amt, String currency) {
        payPalGateway.makePayment(amt, currency);
        return true;
    }
}


public class Test {
    public static void main(String[] args) {
        GPayGateway gPayGateway = new GPayGateway();
        RazorPayGateway razorPayGateway = new RazorPayGateway();
        PayPalGateway payPalGateway = new PayPalGateway();

        PaymentProcessor gPayAdapter = new GPayAdapter(gPayGateway);
        PaymentProcessor razorPayAdapter = new RazorPayAdapter(razorPayGateway);
        PaymentProcessor payPalAdapter = new PayPalAdapter(payPalGateway);

        gPayAdapter.processPayment(100.4, "USD");
        razorPayAdapter.processPayment(86.4, "KWD");
        payPalAdapter.processPayment(8550.4, "INR");


    }
}


// Abhraneel week 1